<template>
  <section class="tin-ico-component">
    <section class="phases-section container">
      <header class="phases-section__header">
        <!-- <router-link class="tin-ico-back" to="/">
          <button class="tin-button" v-html="`&larr; ${t('forms.back')}`"></button>
        </router-link> -->

        <h3 class="phases-section__title is-simple"><img src="/tindefi.svg" alt="Logo Tin Defi" loading="lazy" /><span class="separator">|</span>{{t('pages.ico.presale')}}</h3>
      </header>

      <IcoRounds />
    </section>

    <section class="world-section container">
      <div class="world-section__header">
        <h2 class="world-section__title text-gradient-1" v-html="t('pages.ico.world.title')"></h2>
        <p class="world-section__text">{{t('pages.ico.world.text')}}</p>
      </div>

      <RoadmapWorld />
    </section>

    <section class="road-section container">
      <div class="road-section__header">
        <h2 class="road-section__title text-gradient-1" v-html="t('pages.ico.road.title')"></h2>
        <p class="road-section__text">{{t('pages.ico.road.text')}}</p>
      </div>

      <RoadmapDownloads />
    </section>

    <section class="financials-section container">
      <div class="financials-section__header">
        <h2 class="financials-section__title text-gradient-1" v-html="t('pages.ico.financials.title')"></h2>
      </div>

      <Financials />
    </section>

    <section class="tokenomics-section container">
      <div class="tokenomics-section__header">
        <h2 class="tokenomics-section__title text-gradient-1" v-html="t('pages.ico.tokenomics.title')"></h2>
      </div>

      <Tokenomics />
    </section>

    <section class="goals-section container">
      <div class="goals-section__header">
        <h2 class="goals-section__title text-gradient-1" v-html="t('pages.ico.goals.title')"></h2>

        <TinCountdown target="2023-01-01 00:00:00" size="large" wrap />
      </div>

      <Goals />
    </section>

    <section class="utils-section container">
      <div class="utils-section__header">
        <h2 class="utils-section__title text-gradient-1" v-html="t('pages.ico.utils.title')"></h2>
        <p class="utils-section__text">{{t('pages.ico.utils.text')}}</p>
      </div>

      <div class="utils-section__carousel">
        <Utils />
      </div>
    </section>
  </section>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { sketch } from '@/modules/sketch'

  import IcoRounds from '@/components/common/IcoRounds.vue'
  import RoadmapWorld from '@/components/common/RoadmapWorld.vue'
  import RoadmapDownloads from '@/components/common/RoadmapDownloads.vue'
  import Financials from '@/components/common/Financials.vue'
  import Tokenomics from '@/components/common/Tokenomics.vue'
  import Goals from '@/components/common/Goals.vue'
  import Utils from '@/components/common/Utils.vue'
  import TinCountdown from '@/components/tin/Countdown.vue'

  const { t } = useI18n()

  onMounted(() => {
    sketch(document.querySelector('.phases-section'), false)
    sketch(document.querySelector('.goals-section'))
  })
</script>
