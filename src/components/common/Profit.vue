<template>
  <section class="tin-profit-component">
    <nav class="tin-profit__filters">
      <button class="tin-profit__filter" :class="{'is-active':filter === 'investors'}" @click.prevent="filter = 'investors'">{{t('common.profit.filters.investors')}}</button>
      <button class="tin-profit__filter" :class="{'is-active':filter === 'influencers'}" @click.prevent="filter = 'influencers'">{{t('common.profit.filters.influencers')}}</button>
      <button class="tin-profit__filter" :class="{'is-active':filter === 'projects'}" @click.prevent="filter = 'projects'">{{t('common.profit.filters.projects')}}</button>
      <button class="tin-profit__filter" :class="{'is-active':filter === 'ventures'}" @click.prevent="filter = 'ventures'">{{t('common.profit.filters.vc')}}</button>
    </nav>
    <div class="tin-profit__items">
      <article class="tin-profit__item investors" v-show="filter === 'investors'" :style="{backgroundImage: 'url(/images/profit/background_0.svg)'}">
        <div class="tin-profit__item__info">
          <div class="tin-profit__item__info__wrapper">
            <h2 class="text-gradient-8">{{t('common.profit.slides.investors.title')}}</h2>
            <ul>
              <li>{{t('common.profit.slides.investors.item_1')}}</li>
              <li>{{t('common.profit.slides.investors.item_2')}}</li>
              <li>{{t('common.profit.slides.investors.item_3')}}</li>
              <li>{{t('common.profit.slides.investors.item_4')}}</li>
              <li>{{t('common.profit.slides.investors.item_5')}}</li>
              <li>{{t('common.profit.slides.investors.item_6')}}</li>
              <li>{{t('common.profit.slides.investors.item_7')}}</li>
              <li>{{t('common.profit.slides.investors.item_8')}}</li>
              <li>{{t('common.profit.slides.investors.item_9')}}</li>
              <li>{{t('common.profit.slides.investors.item_10')}}</li>
            </ul>
          </div>
        </div>
      </article>
      <article class="tin-profit__item influencers" v-show="filter === 'influencers'" :style="{backgroundImage: 'url(/images/profit/background_1.svg)'}">
        <div class="tin-profit__item__info">
          <div class="tin-profit__item__info__wrapper">
            <h2 class="text-gradient-8">{{t('common.profit.slides.influencers.title')}}</h2>
            <ul>
              <li>{{t('common.profit.slides.influencers.item_1')}}</li>
              <li>{{t('common.profit.slides.influencers.item_2')}}</li>
              <li>{{t('common.profit.slides.influencers.item_3')}}</li>
              <li>{{t('common.profit.slides.influencers.item_4')}}</li>
              <li>{{t('common.profit.slides.influencers.item_5')}}</li>
            </ul>
          </div>
        </div>
      </article>
      <article class="tin-profit__item projects" v-show="filter === 'projects'" :style="{backgroundImage: 'url(/images/profit/background_2.svg)'}">
        <div class="tin-profit__item__info">
          <div class="tin-profit__item__info__wrapper">
            <h2 class="text-gradient-8">{{t('common.profit.slides.projects.title')}}</h2>
            <ul>
              <li>{{t('common.profit.slides.projects.item_1')}}</li>
              <li>{{t('common.profit.slides.projects.item_2')}}</li>
              <li>{{t('common.profit.slides.projects.item_3')}}</li>
              <li>{{t('common.profit.slides.projects.item_4')}}</li>
              <li>{{t('common.profit.slides.projects.item_5')}}</li>
              <li>{{t('common.profit.slides.projects.item_6')}}</li>
              <li>{{t('common.profit.slides.projects.item_7')}}</li>
            </ul>
          </div>
        </div>
      </article>
      <article class="tin-profit__item ventures" v-show="filter === 'ventures'" :style="{backgroundImage: 'url(/images/profit/background_3.svg)'}">
        <div class="tin-profit__item__info">
          <div class="tin-profit__item__info__wrapper">
            <h2 class="text-gradient-8">{{t('common.profit.slides.vc.title')}}</h2>
            <ul>
              <li>{{t('common.profit.slides.vc.item_1')}}</li>
              <li>{{t('common.profit.slides.vc.item_2')}}</li>
              <li>{{t('common.profit.slides.vc.item_3')}}</li>
              <li>{{t('common.profit.slides.vc.item_4')}}</li>
              <li>{{t('common.profit.slides.vc.item_5')}}</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
  const { t } = useI18n()

  const filter = ref('investors')
</script>