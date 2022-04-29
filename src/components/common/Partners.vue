<template>
  <section class="tin-partner">
    <div class="tin-partner__items">
      <article v-for="partner, i in partners" :key="i" class="tin-partner__item">
        <img :src="`/icons/partners/${partner.logo}.svg`" :width="partner.size" loading="lazy" />
      </article>
    </div>
  </section>
</template>

<script setup>
  import { partners } from '@/json/partners'
  console.info(partners)
</script>
