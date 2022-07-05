<template>
  <section class="tin-downloads-roadmap">
    <div class="tin-downloads-roadmap__container">
      <div class="tin-downloads-roadmap__downloads">
        <header class="tin-downloads-roadmap__downloads__header">
        <p class="fz-4 fw-700">{{t('forms.download', 2)}}</p>
        <p class="fz-1 fw-700 text-gradient-5">Soon</p>
        </header>
        <div class="tin-downloads-roadmap__downloads__content">
          <div class="tin-downloads-roadmap__downloads__item">
            <div class="tin-downloads-roadmap__downloads__item__platform"><TinIcon name="os/ios" /> IOS</div>
            <div class="tin-downloads-roadmap__downloads__item__count">---</div>
          </div>
          <div class="tin-downloads-roadmap__downloads__item">
            <div class="tin-downloads-roadmap__downloads__item__platform"><TinIcon name="os/android" /> Android</div>
            <div class="tin-downloads-roadmap__downloads__item__count">---</div>
          </div>
        </div>
        <footer class="tin-downloads-roadmap__downloads__footer">
          <p class="fw-400">{{t('common.roadmap-downloads.launch')}}</p>
          <div class="tin-downloads-roadmap__downloads__footer__launch fz-3 fw-700">SOON</div>
        </footer>
      </div>

      <div class="tin-downloads-roadmap__info">
        <div class="tin-downloads-roadmap__info__background" :style="{backgroundImage: `url(/images/roadmap/downloads/${target}.webp)`}"></div>
        <div class="tin-downloads-roadmap__info__wrapper">
          <!-- <div class="tin-downloads-roadmap__info__content">
            <img src="/tindefi.svg" alt="Logo Tin Defi" loading="lazy" />
            <p class="fz-1 fw-700 text-gradient-4">CONF 20K</p>
          </div> -->
          <div class="tin-downloads-roadmap__info__targets">
            <span class="tin-downloads-roadmap__info__target" @click.prevent="setTarget('10K')">10K</span>
            <span class="tin-downloads-roadmap__info__target" @click.prevent="setTarget('20K')">20K</span>
            <span class="tin-downloads-roadmap__info__target" @click.prevent="setTarget('50K')">50K</span>
            <span class="tin-downloads-roadmap__info__target" @click.prevent="setTarget('100K')">100K</span>
            <span class="tin-downloads-roadmap__info__target" @click.prevent="setTarget('250K')">250K</span>
            <span class="tin-downloads-roadmap__info__target" @click.prevent="setTarget('500K')">500K</span>
            <span class="tin-downloads-roadmap__info__target" @click.prevent="setTarget('1M')">1M</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  import TinIcon from '@/components/tin/TinIcon.vue'

  const { t } = useI18n()

  const target = ref('10K')

  const setTarget = (_target) => {
    target.value = _target
  }
</script>