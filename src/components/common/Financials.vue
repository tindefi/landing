<template>
  <section class="tin-financials">
    <div class="tin-financials__content">
      <div class="tin-financials__items">
        <div class="tin-financials__item grid-row-1-3">
          <div class="tin-financial__item__percent fz-1 fw-700 has-text-lighter">33%</div>
          <div class="tin-financial__item__title fz-3 fw-500 has-text-lighter">{{t('common.financials.item_1.title')}}</div>
          <div class="tin-financial__item__text">{{t('common.financials.item_1.text')}}</div>
        </div>
        <div class="tin-financials__item grid-row-1-3">
          <div class="tin-financial__item__percent fz-1 fw-700 has-text-lighter">33%</div>
          <div class="tin-financial__item__title fz-3 fw-500 has-text-lighter">{{t('common.financials.item_2.title')}}</div>
          <div class="tin-financial__item__text">{{t('common.financials.item_2.text')}}</div>
        </div>
        <div class="tin-financials__item">
          <div class="tin-financial__item__percent fz-2 fw-600 has-text-lighter">15%</div>
          <div class="tin-financial__item__title fz-3 fw-500 has-text-lighter">{{t('common.financials.item_3.title')}}</div>
          <div class="tin-financial__item__text">{{t('common.financials.item_3.text')}}</div>
        </div>
        <div class="tin-financials__item">
          <div class="tin-financial__item__percent fz-2 fw-600 has-text-lighter">10%</div>
          <div class="tin-financial__item__title fz-4 fw-700 has-text-lighter">{{t('common.financials.item_4.title')}}</div>
        </div>
        <div class="tin-financials__row">
          <div class="tin-financials__item">
            <div class="tin-financial__item__percent fz-3 fw-600 has-text-lighter">4%</div>
            <div class="tin-financial__item__title fz-5 fw-600 has-text-lighter">{{t('common.financials.item_6.title')}}</div>
          </div>
          <div class="tin-financials__item">
            <div class="tin-financial__item__percent fz-3 fw-600 has-text-lighter">3.8%</div>
            <div class="tin-financial__item__title fz-5 fw-600 has-text-lighter">{{t('common.financials.item_7.title')}}</div>
          </div>
          <div class="tin-financials__item">
            <div class="tin-financial__item__percent fz-3 fw-600 has-text-lighter">1.2%</div>
            <div class="tin-financial__item__title fz-5 fw-600 has-text-lighter">{{t('common.financials.item_5.title')}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t } = useI18n()
</script>