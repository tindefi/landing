<template>
  <footer class="tin-footer">
    <div class="tin-footer__container">
      <div class="tin-footer__left">
        <div class="tin-footer__brand">
          <img class="tin-footer__logo" src="/tindefi-logo-full.svg" alt="Logo Tin Defi">
          <p class="tin-footer__copy">Connecting all crypto stakeholders.</p>
        </div>
        <div class="tin-footer__social">
          <a href="/">
            <TinIcon class="tin-footer__rrss" name="rrss/tindefi" size="23px" />
            <TinIcon class="tin-footer__rrss" name="rrss/github" size="23px" />
            <TinIcon class="tin-footer__rrss" name="rrss/telegram" size="23px" />
            <TinIcon class="tin-footer__rrss" name="rrss/twitter" size="23px" />
          </a>
        </div>
      </div>
      <div class="tin-footer__right">
        <div class="tin-footer__column">
          <router-link to="/" class="tin-footer__link">About us</router-link>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
        </div>

        <div class="tin-footer__column">
          <router-link to="/" class="tin-footer__link">About us</router-link>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
        </div>

        <div class="tin-footer__column">
          <router-link to="/" class="tin-footer__link">About us</router-link>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
        </div>

        <div class="tin-footer__column">
          <router-link to="/" class="tin-footer__link">About us</router-link>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
          <p class="tin-footer__text">Información</p>
        </div>
      </div>
    </div>
    <div class="tin-footer__bottom">
      Made by Tindefi with ❤ for the cryptoworld️
    </div>
  </footer>
</template>

<script setup>
  import TinIcon from '@/components/tin/TinIcon.vue'
</script>