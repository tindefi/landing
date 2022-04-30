<template>
  <section class="tin-ico">
    <section class="tin-ico__items">
      <article class="tin-ico__item">
        <header class="tin-ico__item__header">
          <div class="tin-ico__item__header__left">
            <h3 class="tin-ico__item__title">{{t('common.ico-rounds.title', {round: 1})}}</h3>
            <div class="tin-ico__item__label-text">
              <label class="tin-ico__item__label">{{t('forms.roe')}}</label>
              <p class="tin-ico__item__text has-text-success">+1,000%</p>
            </div>
            <div class="tin-ico__item__label-text">
              <label class="tin-ico__item__label">{{t('common.ico-rounds.listing-price')}}</label>
              <p class="tin-ico__item__text">$ 50.00</p>
            </div>
          </div>
          <div class="tin-ico__item__header__right">
            <div class="last-buy">
              <div class="last-buy__user">
                <img src="https://avatars.dicebear.com/api/identicon/davidosuna.svg?colorLevel=100" alt="Avatar" class="last-buy__avatar" loading="lazy" />
                <span class="last-buy__address">0x846...67gl</span>
              </div>
              <div class="last-buy__amount">$ 10,000.00 BUSD</div>
              <div class="last-buy__time">10 min ago</div>
            </div>
          </div>
        </header>

        <div class="tin-range">
          <div class="tin-range__slider">
            <div class="tin-range__label-container">
              <h4 class="tin-range__label">{{totalBoughtFormatted}}</h4>
            </div>
            <!-- <input v-model="totalBought" class="tin-range__input" type="range" step="0.01" min="0" :max="supply"> -->
            <div class="tin-range__input">
              <div class="tin-range__input__marker"></div>
            </div>
          </div>
          <div class="box-minmax">
            <span>$ 0.00</span><span>{{supplyFormatted}}</span>
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
                <span class="tin-value">≈ $ 5.00</span>
              </div>
            </article>

            <article class="tin-ico__footer__item">
              <div class="tin-ico__footer__item__icon">
                <TinIcon name="user" />
              </div>
              <div class="tin-ico__footer__item__content">
                <span class="tin-label">{{t('common.ico-rounds.investor', 369)}}</span>
                <span class="tin-value">369</span>
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
            </article>
          </div>
          <div class="tin-ico__footer__right">
            <button v-if="walletStore.address" class="tin-button is-success big-shadow has-text-darker tin-ico__button" @click.prevent="walletStore.disconnect()">Invertir</button>
            <button v-else class="tin-button is-success has-text-darker tin-ico__button" @click.prevent="walletStore.connect()">{{walletStore.loading ? 'Loading' : 'Connect wallet'}}</button>
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
                <span class="tin-value">≈ $ 7.00</span>
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
                <span class="tin-value">≈ $ 9.00</span>
              </div>
            </article>
          </div>
        </footer>
      </article>
    </section>
  </section>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { formatMoney } from '@/modules/utils'
  import { useWalletStore } from '@/stores/wallet'
  import { storeToRefs } from 'pinia';

  import TinIcon from '@/components/tin/TinIcon.vue'

  const { t } = useI18n()

  const { address, balance, loading } = storeToRefs(useWalletStore())


  const totalBought = ref(37075.50)
  const supply = ref(100000.00)

  const walletStore = useWalletStore()

  const totalBoughtFormatted = computed(() => {
    return formatMoney(totalBought.value)
  })

  const supplyFormatted = computed(() => {
    return formatMoney(supply.value)
  })

  const showRangeValue = (value = null) => {
    value = value ?? totalBought.value;
    const rangeLabelContainer = document.querySelector(".tin-range__label-container")
    const rangeInputMarker = document.querySelector(".tin-range__input__marker")
    const labelPosition = (value  * 100) / supply.value
    rangeLabelContainer.style.left = labelPosition + "%"
    rangeInputMarker.style.left = labelPosition + "%"
  }

  watch(totalBought, async (newVal, oldVal) => {
    showRangeValue(newVal)
  })

  onMounted(() => {
    showRangeValue()
    // setTimeout(() => {totalBought.value = 37075.50}, 2000)
  })
</script>
