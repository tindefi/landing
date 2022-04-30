<template>
  <section class="tin-faq-page">
    <section class="faq-section container">
      <h1 class="faq-section__title fz-2 fw-700 text-gradient-5">{{t('pages.faq.title')}}</h1>
      <Faq />
    </section>
  </section>
</template>

<script setup>
  import { onMounted } from 'vue'
  import Faq from '@/components/common/Faq.vue'
  import { sketch } from '@/modules/sketch'

  const { t } = useI18n()

  onMounted(() => {
    sketch(document.querySelector('.tin-faq-page'), false)
  })
</script>
