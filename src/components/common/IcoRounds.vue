<template>
  <section class="tin-ico">
    <widget-container-modal />
    <aside class="tin-ico__coming-soon fz-2 fw-600 text-gradient-0">{{t('forms.comingsoon')}}</aside>

    <section class="tin-ico__items">
      <article class="tin-ico__item">
        <header class="tin-ico__item__header">
          <div class="tin-ico__item__header__left">
            <h3 class="tin-ico__item__title">{{t('common.ico-rounds.title', {round: icoInfo.round.index})}}</h3>
            <div class="tin-ico__item__label-text">
              <label class="tin-ico__item__label">{{t('forms.roi')}}</label>
              <p class="tin-ico__item__text has-text-success" :class="{'is-blurred':loadings.roi}">+{{icoInfo.round.roi}}%</p>
            </div>
            <div class="tin-ico__item__label-text">
              <label class="tin-ico__item__label">{{t('common.ico-rounds.listing-price')}}</label>
              <p class="tin-ico__item__text">{{formatMoney(TIN_PUBLIC_PRICE)}}</p>
            </div>
          </div>
          <div class="tin-ico__item__header__right">
            <p class="next-round-text">{{t('common.ico-rounds.next_countdown')}}</p>
            <TinCountdown target="2022-05-18 18:00:00" size="large" wrap />
            <!-- <div class="last-buy" :class="{'is-blurred':loadings.lastbuy}">
              <div class="last-buy__user">
                <img :src="`https://avatars.dicebear.com/api/identicon/${LAST_BUY.address}.svg?colorLevel=100`" alt="Avatar" class="last-buy__avatar" loading="lazy" />
                <span class="last-buy__address">{{shortAddress(LAST_BUY.address)}}</span>
              </div>
              <div class="last-buy__amount">{{formatMoney(Number(LAST_BUY.tokens) * Number(ICO.round.pricePerToken))}} BUSD</div>
              <div class="last-buy__time">{{LAST_BUY.timeago}}</div>
            </div> -->
          </div>
        </header>

        <div class="tin-range">
          <div class="tin-range__slider">
            <div class="tin-range__label-container">
              <h4 v-if="walletStore.admin" class="tin-range__label" :class="{'is-blurred':loadings.raised}">{{icoInfo.round.raised.busd}}</h4>
              <h4 v-else class="tin-range__label">{{t('common.ico-rounds.private_round')}}</h4>
            </div>
            <div class="tin-range__input">
              <div class="tin-range__input__marker"></div>
            </div>
          </div>
          <div class="box-minmax">
            <!-- <span>$ 0.00</span><span><div :class="{'is-blurred':loadings.target}">{{icoInfo.round.target}}</div></span> -->
            <span>$ 0.00</span><span><div>$ 1,810,000.00</div></span>
          </div>
        </div>

        <footer class="tin-ico__footer">
          <div class="tin-ico__footer__left">
            <article class="tin-ico__footer__item">
              <div class="tin-ico__footer__item__icon">
                <TinIcon name="tin-rounded" />
              </div>
              <div class="tin-ico__footer__item__content">
                <span class="tin-label">1 TIN</span>
                <span class="tin-value" :class="{'is-blurred':loadings.price}">≈ {{icoInfo.round.pricePerToken}}</span>
              </div>
            </article>

            <!-- <article class="tin-ico__footer__item">
              <div class="tin-ico__footer__item__icon">
                <TinIcon name="user" />
              </div>
              <div class="tin-ico__footer__item__content">
                <span class="tin-label">{{t('common.ico-rounds.investor', 369)}}</span>
                <span class="tin-value" :class="{'is-blurred':loadings.buyers}">{{icoInfo.round.buyers}}</span>
              </div>
            </article>

            <article class="tin-ico__footer__item">
              <div class="tin-ico__footer__item__icon">
                <TinIcon name="calendar" />
              </div>
              <div class="tin-ico__footer__item__content">
                <span class="tin-label">{{t('common.ico-rounds.vesting')}}</span>
              </div>
              <TinIcon name="info" size="14px" style="margin-left:3px" />
            </article> -->
          </div>
          <div class="tin-ico__footer__right">
            <button v-if="walletStore.address" class="tin-button is-success big-shadow has-text-darker tin-ico__button" :class="{'is-loading':loading}" @click.prevent="invest()">{{t('forms.invest')}}</button>
            <button v-else class="tin-button is-success has-text-darker tin-ico__button" :class="{'is-loading':loading}" @click.prevent="walletStore.connect()">{{t('wallet.connect')}}</button>
          </div>
        </footer>
      </article>
      <article class="tin-ico__item is-next">
        <footer class="tin-ico__footer">
          <div class="tin-ico__footer__left">
            <article class="tin-ico__footer__item">
              <div class="tin-ico__footer__item__icon">
                <TinIcon name="tin-rounded" />
              </div>
              <div class="tin-ico__footer__item__content">
                <span class="tin-label">1 TIN</span>
                <span class="tin-value" :class="{'is-blurred':loadings.price}">≈ {{formatMoney(Number(ICO.round.pricePerToken) + 2)}}</span>
              </div>
            </article>
          </div>
        </footer>
      </article>
      <article class="tin-ico__item is-next">
        <footer class="tin-ico__footer">
          <div class="tin-ico__footer__left">
            <article class="tin-ico__footer__item">
              <div class="tin-ico__footer__item__icon">
                <TinIcon name="tin-rounded" />
              </div>
              <div class="tin-ico__footer__item__content">
                <span class="tin-label">1 TIN</span>
                <span class="tin-value" :class="{'is-blurred':loadings.price}">≈ {{formatMoney(Number(ICO.round.pricePerToken) + 4)}}</span>
              </div>
            </article>
          </div>
        </footer>
      </article>
    </section>

    <section class="tin-ico__history">
      <header class="tin-ico__history__header">
        <p class="fz-4 fw-700 has-text-white">{{t('common.ico-rounds.history.title')}}</p>
        <div class="tin-ico__history__header__vesting">
          <div class="tin-ico__footer__item__icon">
            <TinIcon name="calendar" />
          </div>
          <div class="tin-ico__footer__item__content">
            <span class="tin-label">{{t('common.ico-rounds.vesting')}}</span>
          </div>
          <TinIcon name="info" size="14px" style="margin-left:3px" />
        </div>
      </header>
      <div v-if="loadings.buys" class="tin-spinner"></div>
      <template v-else>
        <div v-if="BUYS?.length" class="tin-ico__history__items">
          <header class="tin-ico__history__item is-header">
            <span>{{t('forms.date')}}</span>
            <span>{{t('forms.price')}}</span>
            <span class="text-right">{{t('forms.quantity')}} (BUSD)</span>
            <span class="text-right">{{t('forms.total')}} (TIN)</span>
          </header>
          <div v-for="buy in BUYS" :key="buy.timestamp" class="tin-ico__history__item">
            <span>{{buy.timestamp}}</span>
            <span>{{formatMoney(buy.price)}}</span>
            <span class="has-text-light fw-400 text-right">{{formatMoney(buy.busd)}}</span>
            <span class="has-text-light fw-400 text-right">{{formatNumber(buy.tin)}}</span>
          </div>
        </div>
        <div v-else class="tin-ico__history__invest">
          <button v-if="walletStore.address" class="tin-button is-success has-text-darker tin-ico__button" :class="{'is-loading':loading}" @click.prevent="invest()">{{t('forms.invest')}}</button>
          <button v-else class="tin-button is-success has-text-darker tin-ico__button" :class="{'is-loading':loading}" @click.prevent="walletStore.connect()">{{t('wallet.connect')}}</button>
        </div>
      </template>
    </section>
  </section>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { formatMoney, formatNumber, shortAddress } from '@/modules/utils'
  import { useWalletStore } from '@/stores/wallet'
  import { storeToRefs } from 'pinia'
  import Web3 from 'web3/dist/web3.min.js'

  import { openModal } from "jenesius-vue-modal"

  import TinIcon from '@/components/tin/TinIcon.vue'
  import IcoModal from '@/components/tin/IcoModal.vue'
  import TinCountdown from '@/components/tin/Countdown.vue'

  import { TIN_ICO_ABI } from '@/modules/abis'
  import { TIN_ICO } from '@/modules/contracts'

  const { t, locale } = useI18n()

  const { loading, provider, address } = storeToRefs(useWalletStore())

  const walletStore = useWalletStore()

  const TIN_PUBLIC_PRICE = 50

  const loadings = ref({
    roi: true,
    raised: true,
    target: true,
    price: true,
    buyers: true,
    buys: true,
    lastbuy: true,
  })

  const BUYS = ref([])
  const LAST_BUY = ref({
    address: '0x00000000000000000000000000000000',
    tokens: 10,
    timeago: 'loading...'
  })

  const ICO = ref({
    round: {
      index: 0,
      raised: {
        busd: 0,
        tin: 0,
      },
      buyers: 0,
      pricePerToken: 0,
      target: '0',
      referralCodeRequired: true,
    },
    totalRaised: 0,
  })

  const icoInfo = computed(() => {
    const web3 = new Web3(provider)
    return {
      round: {
        index: Number(ICO.value.round.index),
        raised: {
          busd: formatMoney(web3.utils.fromWei(String(ICO.value.round.raised.busd))),
          tin: formatMoney(web3.utils.fromWei(String(ICO.value.round.raised.tin))),
        },
        buyers: formatNumber(ICO.value.round.buyers, true),
        pricePerToken: formatMoney(ICO.value.round.pricePerToken),
        target: formatMoney(web3.utils.fromWei(String(ICO.value.round.target))),
        roi: formatNumber(TIN_PUBLIC_PRICE / ICO.value.round.pricePerToken * 100),
      },
      totalRaised: formatNumber(web3.utils.fromWei(String(ICO.value.totalRaised)))
    }
  })

  const showRangeValue = (value = null) => {
    const web3 = new Web3(provider)
    value = value ?? Number(web3.utils.fromWei(ICO.value.round.raised.busd))
    const rangeLabelContainer = document.querySelector(".tin-range__label-container")
    const rangeInputMarker = document.querySelector(".tin-range__input__marker")
    const labelPosition = (value  * 100) / Number(web3.utils.fromWei(ICO.value.round.target))
    rangeLabelContainer.style.left = labelPosition + "%"
    rangeInputMarker.style.left = labelPosition + "%"
  }

  const invest = () => {
    openModal(IcoModal, {referralCodeRequired: ICO.value.round.referralCodeRequired})
  }

  const reloadPhaseInfo = () => {
    getCurrentPhase()
    getTotalRaised()
    getBuys()
  }

  const getBuys = async () => {
    loadings.value.buys = true
    await walletStore.getBuys().then(res => {
      BUYS.value = res
    })
    loadings.value.buys = false
  }

  const getTotalRaised = async () => {
    await walletStore.totalRaised().then(res => {
      ICO.value.totalRaised = res
    })
  }

  const getCurrentPhase = async () => {
    await walletStore.currentPhase().then(res => {
      ICO.value.round.index = res
      getRaisedPerPhase()
      getTargetICOPerPhase()
      getPricePerTokenPerPhase()
      getBuyersPerPhase()
    })
  }

  const getTargetICOPerPhase = async () => {
    await walletStore.targetICOPerPhase(ICO.value.round.index).then(res => {
      ICO.value.round.target = res
      loadings.value.target = false
    })
  }

  const getRaisedPerPhase = async () => {
    await walletStore.raisedPerPhase(ICO.value.round.index).then(res => {
      ICO.value.round.raised.busd = res['busdRaised']
      ICO.value.round.raised.tin = res['tokensBought']
      loadings.value.raised = false
      // setTimeout(() => showRangeValue(), 10)
    })
  }

  const getPricePerTokenPerPhase = async () => {
    await walletStore.pricePerTokenPerPhase(ICO.value.round.index).then(res => {
      ICO.value.round.pricePerToken = res
      loadings.value.price = false
      loadings.value.roi = false
    })
  }

  const getBuyersPerPhase = async () => {
    await walletStore.buyersPerPhase(ICO.value.round.index).then(res => {
      ICO.value.round.buyers = res
      loadings.value.buyers = false
    })
  }

  const listenTokensBought = async () => {
    const web3 = new Web3(window.ethereum)
    const block = await web3.eth.getBlockNumber()
    const TIN_ICO_CONTRACT = new web3.eth.Contract(TIN_ICO_ABI, TIN_ICO)

    loadings.value.lastbuy = true

    TIN_ICO_CONTRACT.events.tokensBought({
      fromBlock: block - 1000,
      toBlock: 'latest'
    }, function(error, event){
      // if(error) console.info('error', error)
      // else console.info('event', event)
    })
    .on('data', async function(event){
      loadings.value.lastbuy = false
      LAST_BUY.value.address = event.returnValues.buyer
      LAST_BUY.value.tokens = web3.utils.fromWei(String(event.returnValues.tokenAmount))
      await web3.eth.getBlock(event.blockNumber).then(res => LAST_BUY.value.timeago = getTimeAgo(res.timestamp * 1000))
      reloadPhaseInfo()
    })
    .on('changed', async function(event){
      loadings.value.lastbuy = false
      LAST_BUY.value.address = event.returnValues.buyer
      LAST_BUY.value.tokens = web3.utils.fromWei(String(event.returnValues.tokenAmount))
      await web3.eth.getBlock(event.blockNumber).then(res => LAST_BUY.value.timeago = getTimeAgo(res.timestamp * 1000))
      reloadPhaseInfo()
    })
    .on('error', function(error){
      console.info('error2', error)
    })
  }

  watch(provider, async (newVal, oldVal) => {
    if(newVal && !oldVal) reloadPhaseInfo()
  })

  watch(address, async (newVal, oldVal) => {
    if(newVal !== oldVal) getBuys()
  })

  onMounted(() => {
    if(provider) reloadPhaseInfo()
    listenTokensBought()
  })

const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

const getSecondsDiff = timestamp => (Date.now() - timestamp) / 1000
const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
}

const getTimeAgo = timestamp => {
  const rtf = new Intl.RelativeTimeFormat(locale.value)

  const secondsElapsed = getSecondsDiff(timestamp)
  const {value, unit} = getUnitAndValueDate(secondsElapsed)
  return rtf.format(value, unit)
}
</script>
