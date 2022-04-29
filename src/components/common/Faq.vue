<template>
  <section class="tin-faq">
    <div class="tin-faq__items">
      <router-link v-for="faq in faqTitles" :to="`/faq/${faq.slug}`" :key="faq.slug" class="tin-faq__item">
        <TinIcon class="tin-faq__item__icon" :name="faq.icon" size="34px" />
        <p class="tin-faq__item__title">{{faq.title}}</p>
      </router-link>
    </div>
  </section>
</template>

<script setup>
  import TinIcon from '@/components/tin/TinIcon.vue'
  import { faqs } from '@/json/faqs.js'
  import { watch, onMounted } from 'vue'

  const { locale } = useI18n()

  const faqTitles = ref([]);

  const setFaqs = () => {
    faqTitles.value = Object.values(faqs[locale.value]).map((faq) => {
      return {icon: faq.icon, slug: faq.slug, title:faq.title}
    })
  }

  watch(locale, (newVal, oldVal) => {
    setFaqs()
  })

  onMounted(() => {
    setFaqs()
  })
</script>
