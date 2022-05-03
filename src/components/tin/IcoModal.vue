<template>
  <div class="tin-ico-modal">
    <header>
      <h2 class="header-title">Participar En La ICO</h2>
      <h4 class="header-text">La moneda requerida para invertir en la ICO es BUSD.</h4>
    </header>
    <div class="main-content">
      <div class="invest-amount-container">
        <div class="invest-amount-text">Cantidad a invertir</div>
        <div class="invest-amount-amount">
          <input v-model="amount" class="invest-amount-input" placeholder="1,000.00" type="text" inputmode="decimal" min="0" step="0.01" size="3" maxlength="19">
          <span class="invest-amount-token"><img src="/images/busd.png" alt="bnb"> BUSD</span>
        </div>
        <div class="invest-amount-utils">
          <span class="invest-amount-utils-text">Balance: {{ textBalances.busd }}</span>
          <div class="invest-amount-utils-buttons">
            <button @click.prevent="setAmountPercent(100)">MAX</button>
            <button @click.prevent="setAmountPercent(30)">30%</button>
            <button @click.prevent="setAmountPercent(60)">60%</button>
          </div>
        </div>
      </div>
      <div class="return-amount-container">
        <div class="return-amount-text">ROI esperado al precio de listado</div>
        <div class="return-amount-amount">
          <input v-model="ROIAmount" readonly>
        </div>
        <div class="return-amount-utils">
          <span class="return-amount-utils-tin">~ {{TINAmount}} TIN </span>
          <span v-if="Number(amount)" class="return-amount-utils-roi">(+{{ROIPercent}}%)</span>
        </div>
      </div>
    </div>
    <footer>
      <div class="button-container">
        <button v-if="Number(allowance)" class="tin-button is-success" :class="{'is-loading':loading, 'is-disabled':!Number(amount)}" @click.prevent="invest()">{{t('forms.invest')}}</button>
        <button v-else class="tin-button is-success" :class="{'is-loading':loading}" @click.prevent="approve">{{t('wallet.approve')}}</button>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { watch, ref, toRefs } from "vue"
  import { storeToRefs } from "pinia"
  import { formatMoney, formatNumber } from "@/modules/utils"
  import Web3 from 'web3/dist/web3.min.js'
  import { BUSD } from '@/modules/tokens'
  import { TIN_ICO } from '@/modules/contracts'

  import { useWalletStore } from "@/stores/wallet"
  const walletStore = useWalletStore()
  const { address, balances, loading, provider } = storeToRefs(useWalletStore())

  const { t } = useI18n()

  const TIN_PUBLIC_PRICE = 50

  const CURRENT_ROUND_TIN_PRICE = ref(0)
  const amount = ref('')
  const allowance = ref(0)
  const textBalances = ref({
    busd: '',
    ether: '',
  })

  const setAmountPercent = (percent) => {
    const web3 = new Web3(provider)
    const newval = String(web3.utils.fromWei(balances.value.busd) * percent / 100)

    amount.value = newval
  }

  const getBUSDBalance = async () => {
    const web3 = new Web3(provider)
    await walletStore.getTokenBalance(BUSD).then(res => {
      balances.value.busd = res
      textBalances.value.busd = formatNumber(web3.utils.fromWei(res))
    })
  }

  const getAllowance = async () => {
    loading.value = true
    await walletStore.getAllowance(BUSD, TIN_ICO).then(res => {
      allowance.value = res
    }).catch(console.info).finally(() => {
      loading.value = false
    })
  }

  const approve = async () => {
    loading.value = true
    await walletStore.approve(BUSD, TIN_ICO).then(res => {
      getAllowance()
    }).catch(console.info).finally(() => {
      loading.value = false
    })
  }

  const invest = async () => {
    if(!Number(amount.value)) return

    loading.value = true
    await walletStore.buyTinICOTokens(amountWei.value, 'capital').then(res => {
      getBUSDBalance()
      amount.value = ''
    }).catch(console.info).finally(() => {
      loading.value = false
    })
  }

  const amountWei = computed(() => {
    const web3 = new Web3(provider)
    if(!amount.value) return
    return web3.utils.toWei(amount.value)
  })

  const ROIAmount = computed(() => {
    const AMOUNT = amount.value * TIN_PUBLIC_PRICE / CURRENT_ROUND_TIN_PRICE.value
    return formatMoney(AMOUNT, 'USD', false, '$ 0.00')
  })

  const ROIPercent = computed(() => {
    return formatNumber(TIN_PUBLIC_PRICE / CURRENT_ROUND_TIN_PRICE.value * 100)
  })

  const TINAmount = computed(() => {
    return formatNumber(amount.value / CURRENT_ROUND_TIN_PRICE.value)
  })

  watch(address, (val) => {
    getBUSDBalance()
  })

  watch(amount, (currentValue, oldValue) => {
    currentValue = currentValue.replace(",", ".") // In case of iPhone, there is no ".", but only ","
    let valid = (/^[0-9]*\.?[0-9]*$/).test(currentValue)
    if(!valid){
      amount.value = oldValue
      return
    }
  })

  onMounted(() => {
    getBUSDBalance()
    getAllowance()
  })
</script>
