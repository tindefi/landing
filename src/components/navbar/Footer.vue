<template>
  <footer class="tin-footer">
    <div class="tin-footer__container">
      <div class="tin-footer__left">
        <div class="tin-footer__brand">
          <img class="tin-footer__logo" src="/tindefi-logo-full.svg" alt="Logo Tin Defi">
          <p class="tin-footer__slogan"><small>{{t('footer.slogan')}}</small></p>
        </div>
        <div class="tin-footer__social">
          <a href="#">
            <TinIcon class="tin-footer__rrss" name="rrss/tindefi" size="23px" />
          </a>
          <a :href="filteredSocial.instagram" target="_blank">
            <TinIcon class="tin-footer__rrss" name="rrss/instagram" size="23px" />
          </a>
          <a :href="filteredSocial.telegram" target="_blank">
            <TinIcon class="tin-footer__rrss" name="rrss/telegram" size="23px" />
          </a>
          <a :href="filteredSocial.twitter" target="_blank">
            <TinIcon class="tin-footer__rrss" name="rrss/twitter" size="23px" />
          </a>
        </div>
      </div>
      <div class="tin-footer__right">
        <div class="tin-footer__column">
          <router-link to="/services" class="tin-footer__link">{{t('navbar.services')}}</router-link>
        </div>

        <div class="tin-footer__column">
          <router-link to="/about" class="tin-footer__link">{{t('navbar.about')}}</router-link>
        </div>

        <div class="tin-footer__column">
          <router-link to="/faq" class="tin-footer__link">{{t('navbar.faq')}}</router-link>
        </div>

        <div class="tin-footer__column">
          <template v-if="$route.name === 'ico'">
            <a v-if="walletStore.address" class="tin-button wallet-connect-button is-connected" @click.prevent="walletStore.disconnect()">{{walletStore.shortAddress}}</a>
            <a v-else class="tin-button wallet-connect-button" @click.prevent="walletStore.connect()">{{walletStore.loading ? t('forms.loading') : t('wallet.connect')}}</a>
          </template>
          <router-link v-else class="tin-button wallet-connect-button is-success big-shadow" to="/ico">{{t('navbar.join-ico')}}</router-link>
        </div>
      </div>
    </div>
    <div class="tin-footer__bottom">
      <small>{{t('footer.love')}}</small>
    </div>
  </footer>
</template>

<script setup>
  import TinIcon from '@/components/tin/TinIcon.vue'
  import { social } from '@/json/social'

  import { useWalletStore } from '@/stores/wallet'
  const walletStore = useWalletStore()

  const { t, locale } = useI18n()

  const filteredSocial = computed(() => {
    return social[locale.value]
  })
</script>