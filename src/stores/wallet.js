import { defineStore } from 'pinia'
import Web3 from 'web3/dist/web3.min.js'
import Web3Modal, { getInjectedProvider, getInjectedProviderName } from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import moment from 'moment'
import axios from 'axios'

import { ERC20_TOKEN_ABI } from '@/modules/abis'
import { TIN_ICO_ABI, TIN_VESTING_ABI } from '@/modules/abis'
import { TIN_ICO, TIN_VESTING } from '@/modules/contracts'

export const useWalletStore = defineStore('wallet', {
  state: () => {
    return {
      web3modal: null,
      chain: {
        id: null,
        name: null,
      },
      chains: [],
      provider: null,
      address: null,
      checksum: null,
      balances: {
        ether: 0,
        busd: 0
      },
      loading: false,
      admin: false,
    }
  },

  getters: {
    shortAddress(state) {
      if(!state.address) return ''
      return state.address.slice(0, 4)+'...'+state.address.slice(-4)
    }
  },

  actions: {
    // saveWalletData(payload) {
    //   this.address = payload.address
    // },
    // async connect() {
    //   this.loading = true
    //   try {
    //     const data = await window.ethereum.request({
    //       method: 'eth_requestAccounts',
    //     })
    //     console.log('data :>> ', data)

    //     this.address = data[0]
    //   }catch (error){
    //     console.error(error)
    //   }finally{
    //     this.loading = false
    //   }
    // },
    async init() {
      const providerOptions = {
          walletconnect: {
              package: WalletConnectProvider, // required
              options: {
                rpc: { 56: 'https://bsc-dataseed1.binance.org/' },
                network: "binance",
              }
          },
      }

      this.web3modal = new Web3Modal({
          network: "mainnet", // optional
          cacheProvider: true, // optional
          providerOptions, // required
          disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
          theme: 'dark'
      })

      if(this.web3modal?.cachedProvider){
        this.connect()
      }
    },
    async connect() {
      this.loading = true

      try{
        this.provider = await this.web3modal.connect()
      }catch(error){
        console.error('Could not get a wallet connection', error)
        return
      }

      if(this.provider){
        this.setProviderEvents()
        await this.setData()
      }
    },
    async connectTo(id = null) {
      this.loading = true

      try{
        this.provider = await this.web3modal.connectTo(id)
      }catch(error){
        console.error('Could not get a wallet connection', error)
        return
      }

      if(this.provider){
        this.setProviderEvents()
        await this.setData()
      }
    },
    setProviderEvents() {
      // Subscribe to accounts change
      this.provider.on("accountsChanged", (accounts) => {
        console.info('accountsChanged')
        this.loading = true
        if(this.address && accounts && accounts.length) this.setData()
        else this.disconnect()
      })

      // Subscribe to chainId change
      this.provider.on("chainChanged", (chainId) => {
        console.info('chainChanged')
        this.loading = true
        this.setData()
      })

      // Disconnect
      this.provider.on("disconnect", (data) => {
        console.info('disconnect')
        this.loading = true
        this.disconnect()
      })
    },
    async setData() {
      if(!this.provider) return

      try{
        // Get a Web3 instance for the wallet
        const web3 = new Web3(this.provider)

        // Get connected chain id from Ethereum node
        this.chain.id = typeof(ethereum) !== 'undefined' ? await parseInt(ethereum.networkVersion) : await web3.eth.getChainId()

        // Load chain information over an HTTP API
        if(!this.chains?.length){
          if(localStorage.getItem('chains')){
            this.chains = JSON.parse(localStorage.getItem('chains'))
          }else{
            await this.getChains()
          }
        }
        this.chain.name = this.chains.find(o => o.chainId === this.chain.id)?.name

        // Get list of accounts of the connected wallet
        if(typeof(ethereum) !== 'undefined'){
          var res = await ethereum.request({ method: 'eth_accounts' })
        }else{
          var res = await web3.eth.getAccounts()
        }

        this.address = res[0]
        //this.getEtherBalance()
        this.checksum = web3.utils.toChecksumAddress(this.address)
        this.admin = /0xbE8.*.a1Ce/.test(this.checksum)

        web3.eth.subscribe('newBlockHeaders', () => {
        })

      }catch(error){
        console.error('Error setting data',error)
        return
      }finally{
        this.loading = false
      }
    },
    async disconnect() {
      // if(this.provider && typeof this.provider.close === "function"){
      //   await this.provider.close()
      // }

      await this.web3modal.clearCachedProvider()

      // web3.eth.clearSubscriptions()

      this.reset()

    },
    reset() {
      // this.web3 = null
      this.chain.id = null
      this.chain.name = null
      this.provider = null
      this.address = null
      this.checksum = null
      this.balances.ether = 0
      this.balances.busd = 0
      this.loading = false
      this.admin = false
    },
    setCachedProvider() {
      this.web3modal.setCachedProvider()
    },
    clearCachedProvider() {
      this.web3modal.clearCachedProvider()
    },
    getInjectedProvider() {
      return getInjectedProvider()
    },
    getInjectedProviderName() {
      return getInjectedProviderName()
    },








    async getEtherBalance(wallet = null) {
      wallet = wallet || this.address
      if(!wallet) return

      const web3 = new Web3(this.provider)
      return await web3.eth.getBalance(wallet)
    },
    async getTokenBalance(token, wallet = null) {
      wallet = wallet || this.address
      if(!wallet) return

      const web3 = new Web3(this.provider)
      let contract = new web3.eth.Contract(ERC20_TOKEN_ABI, token)
      return await contract.methods.balanceOf(wallet).call().catch(alert)
      console.info(wallet, token)
    },
    async getChains() {
      await axios.get('https://chainid.network/chains.json').then(response => {
        this.chains = response.data
        localStorage.setItem('chains', JSON.stringify(response.data))
      })
    },
    async getAllowance(token, spender, wallet = null) {
      wallet = wallet || this.address
      if(!token || !spender || !wallet) return

      let web3 = new Web3(this.provider)
      let contract = new web3.eth.Contract(ERC20_TOKEN_ABI, token)
      return await contract.methods.allowance(wallet, spender).call()
    },
    async approve(token, spender, amount = 0, wallet = null) {
      wallet = wallet || this.address
      if(!token || !spender || !wallet) return

      const AMOUNT = amount ? String(amount) : '100000000000000000000000000000000'
      let web3 = new Web3(this.provider)
      let contract = new web3.eth.Contract(ERC20_TOKEN_ABI, token)
      return await contract.methods.approve(spender, AMOUNT).send({ from: wallet })
    },
    async buyTinICOTokens(amount, code) {
      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      return await TIN_ICO_CONTRACT.methods.buyTokens(amount, code).send({ from: this.address })
    },
    async currentPhase() {
      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      return await TIN_ICO_CONTRACT.methods.currentPhase().call()
    },
    async buyersPerPhase(phase) {
      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      return await TIN_ICO_CONTRACT.methods.buyersPerPhase(phase).call()
    },
    async targetICOPerPhase(phase) {
      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      return await TIN_ICO_CONTRACT.methods.targetICOPerPhase(phase).call()
    },
    async raisedPerPhase(phase) {
      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      return await TIN_ICO_CONTRACT.methods.raisedPerPhase(phase).call()
    },
    async pricePerTokenPerPhase(phase) {
      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      return await TIN_ICO_CONTRACT.methods.getWeiPerTokenPerPhase(phase).call()
    },
    async totalRaised() {
      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      return await TIN_ICO_CONTRACT.methods.totalRaised().call()
    },
    async getReferral(code) {
      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      return await TIN_ICO_CONTRACT.methods.getReferral(code).call()
    },
    async getBuys(wallet = null) {
      wallet = wallet || this.address
      console.info(wallet, this.address)
      if(!wallet) return

      let web3 = new Web3(this.provider)
      const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)
      const buysCount = await TIN_ICO_CONTRACT.methods.getCountBuysPerUser(wallet).call()

      console.info(buysCount)

      let buys = new Array()
      for(let index = 0; index < buysCount; index++){
        console.info(index)
        let buy = await TIN_ICO_CONTRACT.methods.buysPerUser(wallet, index).call()
        buys.push({
          timestamp: moment.unix(buy.timeStamp).format('YYYY-MM-DD HH:mm:ss'),
          price: buy.weiPerToken,
          busd: web3.utils.fromWei(buy.busdAmount),
          tin: web3.utils.fromWei(buy.tinAmount),
        })
      }

      return buys
    },



  },
})
