<template>
  <section class="tin-not-found">
    <h1 class="text-gradient-0 fw-700">404</h1>
    <p class="fz-3 has-text-white">{{t('pages.not-found.text')}}</p>
    <img class="tin-not-found__image" src="/images/404.svg" alt="404" />
  </section>
</template>

<script setup>
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

    &__image{
      position: absolute;
      transform: translate(220px, -20px);
      z-index: -1;
    }
  }
</style>