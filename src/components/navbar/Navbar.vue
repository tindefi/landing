<template>
  <nav class="tin-navbar" :class="{'is-opened':opened}">
    <div class="tin-navbar__trigger" @click.prevent="opened = !opened">
      <span class="tin-navbar__trigger__line"></span>
      <span class="tin-navbar__trigger__line"></span>
      <span class="tin-navbar__trigger__line"></span>
    </div>

    <div class="tin-navbar__left">
      <router-link class="tin-navbar__item is-logo" to="/">
        <img src="/tindefi-logo-full.svg" alt="Logo Tin Defi">
      </router-link>
    </div>

    <div class="tin-navbar__right">
      <router-link class="tin-navbar__item" to="/services">{{t('navbar.services')}}</router-link>

      <MenuItemDropdown :title="t('navbar.resources')">
        <div class="tin-navbar__dropdown_item">
          <a :href="`/downloads/business-plan-1-${locale}.pdf`" target="_blank" class="tin-navbar__item"><TinIcon name="download" size="23px" /> {{t('pages.home.hero.buttons.business')}}</a>
        </div>
        <div class="tin-navbar__dropdown_item">
          <a :href="`/downloads/pitch-deck-1-${locale}.pdf`" target="_blank" class="tin-navbar__item"><TinIcon name="download" size="23px" /> {{t('pages.home.hero.buttons.pitch')}}</a>
        </div>
      </MenuItemDropdown>

      <router-link class="tin-navbar__item" to="/about">{{t('navbar.about')}}</router-link>
      <router-link class="tin-navbar__item" to="/faq">{{t('navbar.faq')}}</router-link>

      <template v-if="$route.name === 'ico'">
        <a v-if="walletStore.address" class="tin-navbar__item is-button tin-button wallet-connect-button is-connected" @click.prevent="walletStore.disconnect()">{{walletStore.shortAddress}}</a>
        <a v-else class="tin-navbar__item is-button tin-button wallet-connect-button" @click.prevent="walletStore.connect()">{{walletStore.loading ? t('forms.loading') : t('wallet.connect')}}</a>
      </template>
      <router-link v-else class="tin-navbar__item is-button tin-button wallet-connect-button" to="/ico">{{t('navbar.join-ico')}}</router-link>

      <MenuItemDropdown position="right" simple class="lang-dropdown">
        <template #title>
          <img :src="`/icons/lang/${locale}.svg`" width="23" />
        </template>
        <div class="tin-navbar__dropdown_item tin-navbar__lang__item" :class="{'is-selected':locale === 'es'}" @click.prevent="setLocale('es')">
          <img src="/icons/lang/es.svg" width="23" /> <span class="lang-name">Español</span>
        </div>
        <div class="tin-navbar__dropdown_item tin-navbar__lang__item" :class="{'is-selected':locale === 'en'}" @click.prevent="setLocale('en')">
          <img src="/icons/lang/en.svg" width="23" /> <span class="lang-name">English</span>
        </div>
      </MenuItemDropdown>
    </div>
  </nav>
</template>

<script setup>
  import MenuItemDropdown from '@/components/navbar/MenuItemDropdown.vue'
  import TinIcon from '@/components/tin/TinIcon.vue'

  import { useWalletStore } from '@/stores/wallet'
  const walletStore = useWalletStore()

  const { t, locale } = useI18n()

  const opened = ref(false)

  const setLocale = (selected) => {
    locale.value = selected
  }

  watch(locale, async (newVal, oldVal) => {
    localStorage.setItem('locale', newVal)
  })
</script>
