<template>
  <div class="tin-ico-modal" :class="{'is-loading':somethingLoading}">
    <header>
      <h2 class="header-title">{{t('pages.ico.modal.participate')}}</h2>
      <h4 class="header-text">{{t('pages.ico.modal.busd')}}</h4>
    </header>
    <div class="main-content">
      <div class="invest-amount-container">
        <div class="invest-amount-text">{{t('pages.ico.modal.amount')}}</div>
        <div class="invest-amount-amount">
          <input v-model="amount" class="invest-amount-input" placeholder="1,000.00" type="text" inputmode="decimal" min="0" step="0.01" size="3" maxlength="19">
          <span class="invest-amount-token"><img src="/images/busd.png" alt="bnb"> BUSD</span>
        </div>
        <div class="invest-amount-utils">
          <span class="invest-amount-utils-text">{{t('wallet.balance')}}: {{ textBalances.busd }}</span>
          <div class="invest-amount-utils-buttons">
            <button @click.prevent="setAmountPercent(100)">{{t('forms.max').toUpperCase()}}</button>
            <button @click.prevent="setAmountPercent(30)">30%</button>
            <button @click.prevent="setAmountPercent(60)">60%</button>
          </div>
        </div>
      </div>
      <div class="return-amount-container">
        <div class="return-amount-text">{{t('pages.ico.modal.expectedroi')}}</div>
        <div class="return-amount-amount">
          <input v-model="ROIAmount" readonly>
        </div>
        <div class="return-amount-utils">
          <span class="return-amount-utils-tin">~ {{TINAmount}} TIN </span>
          <span v-if="Number(amount)" class="return-amount-utils-roi">(+{{ROIPercent}}%)</span>
        </div>
      </div>
      <div class="return-amount-container">
        <div class="return-amount-text">{{t('pages.ico.modal.buycode')}}</div>
        <div class="return-amount-amount tin-input-container" :class="{'is-loading':loadings.code}">
          <input v-model="referralCode" class="code-input" placeholder="_ _ _ _ _ _ _ _ _" maxlength="9">
          <span class="tin-input-spinner"></span>
        </div>
        <div v-if="referrer?.refType === CODE_TYPE_ERROR" class="return-amount-utils">
          <span class="return-amount-utils-tin has-text-danger">{{t('pages.ico.modal.invalidcode')}}</span>
        </div>
      </div>
    </div>
    <footer>
      <div class="button-container">
        <button class="tin-button is-success" :class="{'is-loading':loadings.approve, 'is-disabled':enoughAllowance}" @click.prevent="approve">{{t('wallet.approve')}}</button>
        <button class="tin-button is-success" :class="{'is-loading':loadings.invest, 'is-disabled':!Number(amount) || !enoughAllowance}" @click.prevent="invest()">{{t('forms.invest')}}</button>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { watch, ref, toRefs } from "vue"
  import { storeToRefs } from "pinia"
  import { formatMoney, formatNumber } from "@/modules/utils"
  import { BUSD } from '@/modules/tokens'
  import { TIN_ICO } from '@/modules/contracts'
  import Web3 from 'web3/dist/web3.min.js'

  import { useWalletStore } from "@/stores/wallet"
  const walletStore = useWalletStore()
  const { address, balances, loading, provider } = storeToRefs(useWalletStore())

  const { t } = useI18n()

  const TIN_PUBLIC_PRICE = 50
  const CODE_TYPE_CAPITAL = "0xbdc126fb66a19d5738edc1551662bd8be1886b6ce38e9fb3ce730d459fcdac1e"
  const CODE_TYPE_NORMAL = "0x33880a3093e1e3244dfa2c4f1e3976a41c403a68a9a46d658ad84540151881dd"
  const CODE_TYPE_ERROR = "0x0000000000000000000000000000000000000000000000000000000000000000"

  const { emit } = getCurrentInstance()

  const props = defineProps({
    referralCodeRequired: {
      type: Boolean,
      default: true,
    },
  })

  const referralCode = ref('')
  const referrer = ref(null)

  const CURRENT_ROUND_TIN_PRICE = ref(0)

  const amount = ref('')
  const allowance = ref(0)
  const textBalances = ref({
    busd: '',
    ether: '',
  })

  const loadings = ref({
    code: false,
    approve: false,
    invest: false,
  })

  const somethingLoading = computed(() => {
    if(loadings.value.approve) return true
    if(loadings.value.invest) return true
    // return Object.values(loadings.value).some(o => o)
  })

  const referrerTax = computed(() => {
    return referrer && referrer?.value?.refType === CODE_TYPE_CAPITAL && referrer?.value?.totalPerc ? (100 - referrer?.value?.totalPerc) / 100 : 1
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
    loadings.value.approve = true
    await walletStore.approve(BUSD, TIN_ICO, amountWei.value).then(res => {
      getAllowance()
    }).catch(console.info).finally(() => {
      loadings.value.approve = false
    })
  }

  const invest = async () => {
    if(!Number(amount.value)) return

    validateReferralCode()
    if(!referralCodeValiation.value) return

    if(amountWei.value > balances.value.busd){
      alert('You have not enough BUSD in your wallet')
      return
    }

    loadings.value.invest = true
    await walletStore.buyTinICOTokens(TINAmountWei.value, referralCode.value).then(res => {
      getBUSDBalance()
      amount.value = ''
      referralCode.value = ''
      emit('invest', res)
      alert(t('pages.ico.modal.success'))
      location.reload()
    }).catch(console.info).finally(() => {
      loadings.value.invest = false
    })
  }

  const referralCodeValiation = computed(() => {
    const valid = referrer?.value?.active && referrer?.value?.refType != CODE_TYPE_ERROR
    return props.referralCodeRequired ? referrer?.value && valid : valid
  })

  const validateReferralCode = () => {
    if(props.referralCodeRequired){
      if(!referrer?.value){
        alert(t('pages.ico.modal.coderequired'))
        return
      }

      if(!referrer?.value?.active || referrer?.value?.refType == CODE_TYPE_ERROR){
        alert(t('pages.ico.modal.invalidcodealert'))
        return
      }
    }
  }

  const enoughAllowance = computed(() => {
    const web3 = new Web3(provider)
    return allowance.value / 10**18 >= amountWei.value / 10**18
  })

  const amountWei = computed(() => {
    const web3 = new Web3(provider)
    if(!amount.value) return 0
    return web3.utils.toWei(amount.value)
  })

  const ROIAmount = computed(() => {
    const AMOUNT = amount.value * TIN_PUBLIC_PRICE / CURRENT_ROUND_TIN_PRICE.value * referrerTax.value
    return formatMoney(AMOUNT, 'USD', false, '$ 0.00')
  })

  const ROIPercent = computed(() => {
    return formatNumber(TIN_PUBLIC_PRICE / CURRENT_ROUND_TIN_PRICE.value * 100 * referrerTax.value)
  })

  const TINAmount = computed(() => {
    if(!amount.value || !CURRENT_ROUND_TIN_PRICE.value) return 0
    return formatNumber(amount.value / CURRENT_ROUND_TIN_PRICE.value * referrerTax.value)
  })

  const TINAmountWei = computed(() => {
    if(!amount.value || !CURRENT_ROUND_TIN_PRICE.value) return 0
    const web3 = new Web3(provider)
    return web3.utils.toWei(String(amount.value / CURRENT_ROUND_TIN_PRICE.value))
  })

  const getCurrentPhase = async () => {
    await walletStore.currentPhase().then(res => {
      getPricePerTokenPerPhase(res)
    })
  }

  const getPricePerTokenPerPhase = async (phase) => {
    await walletStore.pricePerTokenPerPhase(phase).then(res => {
      CURRENT_ROUND_TIN_PRICE.value = res
    })
  }

  const getReferral = async (code) => {
    loadings.value.code = true
    await walletStore.getReferral(code).then((res) => {
      referrer.value = {
        refType: res.refType,
        reciever: res.reciever,
        totalPerc: res.totalPerc,
        percTokens: res.percTokens,
        percBUSD: res.percBUSD,
        active: res.active,
      }
    }).catch(console.info).finally(() => {
      loadings.value.code = false
    })
  }

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

  const timeout = ref(null)
  watch(referralCode, (newVal, oldVal) => {
    clearTimeout(timeout.value);

    if(newVal && newVal.length < 3) referrer.value = null

    timeout.value = setTimeout(function () {
      if(newVal && newVal.length >= 3) getReferral(newVal)
    }, 500);
  })

  onMounted(() => {
    getBUSDBalance()
    getAllowance()
    getCurrentPhase()
  })
</script>
