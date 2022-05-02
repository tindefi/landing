import { defineStore } from 'pinia'
import Web3 from 'web3/dist/web3.min.js';
import Web3Modal, { getInjectedProvider, getInjectedProviderName } from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
import axios from 'axios';

export const useWalletStore = defineStore('wallet', {
  state: () => {
    return {
      web3: null,
      busd: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      web3modal: null,
      minABI: [
        // balanceOf
        {
          "constant":true,
          "inputs":[{"name":"_owner","type":"address"}],
          "name":"balanceOf",
          "outputs":[{"name":"balance","type":"uint256"}],
          "type":"function"
        },
      ],
      chain: {
        id: null,
        name: null,
      },
      chains: [],
      provider: null,
      address: null,
      balances: {
        ether: 0,
        busd: 0
      },
      loading: false,
    };
  },

  getters: {
    shortAddress(state) {
      if(!state.address) return '';
      return state.address.slice(0, 4)+'...'+state.address.slice(-4);
    }
  },

  actions: {
    // saveWalletData(payload) {
    //   this.address = payload.address;
    // },
    // async connect() {
    //   this.loading = true;
    //   try {
    //     const data = await window.ethereum.request({
    //       method: 'eth_requestAccounts',
    //     });
    //     console.log('data :>> ', data);

    //     this.address = data[0];
    //   }catch (error){
    //     console.error(error);
    //   }finally{
    //     this.loading = false;
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
      };

      this.web3modal = new Web3Modal({
          network: "mainnet", // optional
          cacheProvider: true, // optional
          providerOptions, // required
          disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
          theme: 'dark'
      });

      if(this.web3modal?.cachedProvider){
        this.connect();
      }
    },
    async connect() {
      try{
        this.provider = await this.web3modal.connect();
      }catch(error){
        console.error('Could not get a wallet connection', error);
        return;
      }

      if(this.provider){
        this.setProviderEvents();
        await this.setData();
      }
    },
    async connectTo(id = null) {
      try{
        this.provider = await this.web3modal.connectTo(id);
      }catch(error){
        console.error('Could not get a wallet connection', error);
        return;
      }

      if(this.provider){
        this.setProviderEvents();
        await this.setData();
      }
    },
    setProviderEvents() {
      // Subscribe to accounts change
      this.provider.on("accountsChanged", (accounts) => {
        console.info('accountsChanged');
        this.loading = true;
        if(this.address && accounts && accounts.length) this.setData();
        else this.disconnect();
      });

      // Subscribe to chainId change
      this.provider.on("chainChanged", (chainId) => {
        console.info('chainChanged');
        this.loading = true;
        this.setData();
      });

      // Disconnect
      this.provider.on("disconnect", (data) => {
        console.info('disconnect');
        this.loading = true;
        this.disconnect();
      });
    },
    async getBalance(walletAddress) {
      let contract = new this.web3.eth.Contract(this.minABI, this.busd);
      return await contract.methods.balanceOf(walletAddress).call();
    },
    async setData() {
      if(!this.provider) return;

      try{
        // Get a Web3 instance for the wallet
        this.web3 = new Web3(this.provider);

        // Get connected chain id from Ethereum node
        this.chain.id = typeof(ethereum) !== 'undefined' ? await parseInt(ethereum.networkVersion) : await this.web3.eth.getChainId();

        // Load chain information over an HTTP API
        if(!this.chains?.length){
          if(localStorage.getItem('chains')){
            this.chains = JSON.parse(localStorage.getItem('chains'));
          }else{
            await this.getChains();
          }
        }
        this.chain.name = this.chains.find(o => o.chainId === this.chain.id)?.name;

        // Get list of accounts of the connected wallet
        if(typeof(ethereum) !== 'undefined'){
          var res = await ethereum.request({ method: 'eth_accounts' });
        }else{
          var res = await this.web3.eth.getAccounts();
        }

        this.address = res[0];
        //this.getEtherBalance();

        this.web3.eth.subscribe('newBlockHeaders', () => {
        });

      }catch(error){
        console.error('Error setting data',error);
        return;
      }finally{
        this.loading = false;
      }
    },
    async disconnect() {
      // if(this.provider && typeof this.provider.close === "function"){
      //   await this.provider.close();
      // }

      await this.web3modal.clearCachedProvider();

      // this.web3.eth.clearSubscriptions();

      this.reset();

    },
    reset() {
      this.web3 = null;
      this.chain.id = null;
      this.chain.name = null;
      this.provider = null;
      this.address = null;
      this.balances.busd = 0;
      this.loading = false;
    },
    async getEtherBalance(walletAddress) {
      let web3 = new Web3(this.web3.provider);
      let contract = new web3.eth.Contract(this.minABI, this.busd);
      this.balances.busd = await contract.methods.balanceOf(walletAddress).call();
    },
    async getChains() {
      await axios.get('https://chainid.network/chains.json').then(response => {
        this.chains = response.data;
        localStorage.setItem('chains', JSON.stringify(response.data));
      });
    },
    setCachedProvider() {
      this.web3modal.setCachedProvider();
    },
    clearCachedProvider() {
      this.web3modal.clearCachedProvider();
    },
    getInjectedProvider() {
      return getInjectedProvider();
    },
    getInjectedProviderName() {
      return getInjectedProviderName();
    }


  },
});
