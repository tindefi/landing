<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import Navbar from '@/components/navbar/Navbar.vue'
  import Footer from '@/components/navbar/Footer.vue'
  import { useWalletStore } from '@/stores/wallet'

  const walletStore = useWalletStore()

  onMounted(() => {
    walletStore.init()
  })
</script>