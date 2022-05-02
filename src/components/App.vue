<template>
  <Navbar />
  <router-view />
  <Footer />

  <modals-container />
</template>

<script>
  // import { container } from "jenesius-vue-modal"

  // export default {
  //   components: {WidgetContainerModal: container},
  //   name: "App"
  // }
</script>

<script setup>
  import { ref, onMounted, inject } from 'vue'
  import Navbar from '@/components/navbar/Navbar.vue'
  import Footer from '@/components/navbar/Footer.vue'
  import { useWalletStore } from '@/stores/wallet'

  import { container as ModalsContainer } from "jenesius-vue-modal" // https://github.com/Jenesius/vue-modal

  const walletStore = useWalletStore()

  onMounted(() => {
    walletStore.init()
  })
</script>
