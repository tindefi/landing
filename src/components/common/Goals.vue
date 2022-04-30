<template>
  <section class="tin-goals">
    <div class="tin-goals__items">
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_1.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_1.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500 has-text-lighter"
            :style="{backgroundImage: `linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 ${financingAchieved}%, #B5BCC8 ${financingAchieved}%)`}"><span>{{formatMoney(financing)}}</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">{{financingAchieved}}% {{t('forms.of')}} 100M</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_2.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_2.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500"
            :style="{backgroundImage: 'linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 0%, #B5BCC8 0%)'}"><span>TBA</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">0 {{t('forms.of')}} $1,000,000</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_3.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_3.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500"
            :style="{backgroundImage: 'linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 0%, #B5BCC8 0%)'}"><span>TBA</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">0 {{t('forms.of')}} 1,000,000</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_4.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_4.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500 has-text-lighter"
            :style="{backgroundImage: 'linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 40%, #B5BCC8 40%)'}"><span>40 miembros</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">40 {{t('forms.of')}} 100</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_5.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_5.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500"
            :style="{backgroundImage: 'linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 0%, #B5BCC8 0%)'}"><span>TBA</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">5 {{t('forms.exchange', 5)}}</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_6.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_6.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500"
            :style="{backgroundImage: 'linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 0%, #B5BCC8 0%)'}"><span>TBA</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">6 {{t('forms.country', 6)}}</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_7.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_7.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500 has-text-lighter"
            :style="{backgroundImage: 'linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 0%, #B5BCC8 0%)'}"><span>TBA</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">100 VC</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_8.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_8.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500"
            :style="{backgroundImage: 'linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 0%, #B5BCC8 0%)'}"><span>TBA</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">300 {{t('forms.influencer', 300)}}</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
      <article class="tin-goals__item">
        <header class="tin-goals__header">
          <div class="tin-goals__item__title fz-3 fw-500 has-text-lighter">{{t('common.goals.item_9.title')}}</div>
          <div class="tin-goals__item__text">{{t('common.goals.item_9.text')}}</div>
        </header>
        <main class="tin-goals__main">
          <div class="tin-goals__item__achieved fz-3 fw-500"
            :style="{backgroundImage: 'linear-gradient(#232528, #232528), linear-gradient(to right, #07ffa3 0%, #B5BCC8 0%)'}"><span>TBA</span></div>
          <div class="tin-goals__item__total fz-4 fw-700">350 {{t('forms.project', 350)}}</div>
          <!-- <div class="tin-goals__item__button">{{t('common.goals.show_info')}}</div> -->
        </main>
      </article>
    </div>
  </section>
</template>

<script setup>
  import { formatMoney } from '@/modules/utils'

  const { t } = useI18n()

  const financing = ref(270000);

  const financingAchieved = computed(() => {
    return Number((financing.value * 100 / 100000000).toFixed(2));
  })
</script>

{
  "es": {
    "top": "30%",
    "left": "63%",
  },
}