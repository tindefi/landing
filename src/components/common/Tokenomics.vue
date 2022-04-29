<template>
  <section class="tin-tokenomics">
    <div class="tin-tokenomics__content">
      <div class="tin-tokenomics__items">
        <div class="tin-tokenomics__item big-one">
          <div class="tin-tokenomics__item__percent fz-1 fw-700 has-text-lighter">50%</div>
          <div class="tin-tokenomics__item__title fz-3 fw-500 has-text-lighter">{{t('common.tokenomics.item_1.title')}}</div>
          <div class="tin-tokenomics__item__text">{{t('common.tokenomics.item_1.text')}}</div>
        </div>
        <div class="tin-tokenomics__item__wrapper">
          <div class="tin-tokenomics__item item-1 is-narrow">
            <div class="tin-tokenomics__item__percent fz-1 fw-700 has-text-lighter">24%</div>
            <div class="tin-tokenomics__item__title fz-3 fw-500 has-text-lighter">{{t('common.tokenomics.item_2.title')}}</div>
            <div class="tin-tokenomics__item__text">{{t('common.tokenomics.item_2.text')}}</div>
          </div>
          <div class="tin-tokenomics__item item-2 is-narrow">
            <div class="tin-tokenomics__item__percent fz-2 fw-600 has-text-lighter">9%</div>
            <div class="tin-tokenomics__item__title fz-3 fw-500 has-text-lighter">{{t('common.tokenomics.item_3.title')}}</div>
          </div>
          <div class="tin-tokenomics__item item-3 is-short">
            <div class="tin-tokenomics__item__percent fz-3 fw-600 has-text-lighter">5%</div>
            <div class="tin-tokenomics__item__title fz-4 fw-700 has-text-lighter">{{t('common.tokenomics.item_4.title')}}</div>
          </div>
          <div class="tin-tokenomics__item item-4 is-narrower">
            <div class="tin-tokenomics__item__percent fz-3 fw-600 has-text-lighter">3.15%</div>
            <div class="tin-tokenomics__item__text fw-500 has-text-lighter">{{t('common.tokenomics.item_5.title')}}</div>
          </div>
          <div class="tin-tokenomics__item item-5 is-narrower">
            <div class="tin-tokenomics__item__percent fz-3 fw-600 has-text-lighter">3%</div>
            <div class="tin-tokenomics__item__text fw-500 has-text-lighter">{{t('common.tokenomics.item_6.title')}}</div>
          </div>
          <div class="tin-tokenomics__item item-6 is-narrower">
            <div class="tin-tokenomics__item__percent fz-3 fw-600 has-text-lighter">2%</div>
            <div class="tin-tokenomics__item__text fw-500 has-text-lighter">{{t('common.tokenomics.item_7.title')}}</div>
          </div>
          <div class="tin-tokenomics__item item-7 is-narrower">
            <div class="tin-tokenomics__item__percent fz-3 fw-600 has-text-lighter">1.25%</div>
            <div class="tin-tokenomics__item__text has-text-lighter">{{t('common.tokenomics.item_8.title')}}</div>
          </div>
          <div class="tin-tokenomics__item item-8 is-narrower">
            <div class="tin-tokenomics__item__percent fz-3 fw-600 has-text-lighter">1%</div>
            <div class="tin-tokenomics__item__text has-text-lighter">{{t('common.tokenomics.item_9.title')}}</div>
          </div>
          <div class="tin-tokenomics__item item-9 is-narrower">
            <div class="tin-tokenomics__item__percent fz-3 fw-600 has-text-lighter">0.9%</div>
            <div class="tin-tokenomics__item__text has-text-lighter">{{t('common.tokenomics.item_10.title')}}</div>
          </div>
          <div class="tin-tokenomics__item item-10 is-narrower">
            <div class="tin-tokenomics__item__percent fz-3 fw-600 has-text-lighter">0.7%</div>
            <div class="tin-tokenomics__item__text has-text-lighter">{{t('common.tokenomics.item_11.title')}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t } = useI18n()
</script>