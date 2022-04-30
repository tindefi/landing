<template>
  <section class="tin-not-found">
    <h1 class="text-gradient-0 fw-700">404</h1>
    <p class="fz-3 has-text-white">page not found</p>
  </section>
</template>

<script setup>
  import Faq from '@/components/common/Faq.vue'
  import { sketch } from '@/modules/sketch'

  const { t } = useI18n()

  onMounted(() => {
    sketch(document.querySelector('.tin-not-found'), false)
  })
</script>

<style scoped lang="scss">
  .tin-not-found{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 20vh;
    width: 100vw;
  }
</style>