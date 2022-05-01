<template>
  <section class="faq-item-page">
    <section class="faq-item container">
      <header class="faq-item__header">
        <router-link class="faq-item-back" to="/faq">
          <button class="tin-button" v-html="`&larr; ${t('forms.back')}`"></button>
        </router-link>

        <h2 class="faq-item__title has-text-lighter fw-600">{{item?.title}}</h2>

        <div class="faq-item__items">
          <div class="faq-item__item" v-for="faq, index in item?.faqs" :key="index">
            <div class="faq-item__item__header">
              <span class="faq-item__item__dropdown-trigger"></span>
              <div class="faq-item__item__question" @click.prevent="toggle">{{faq.question}}</div>
            </div>
            <div class="faq-item__item__answer" v-html="faq.answer"></div>
          </div>
        </div>
      </header>

      <IcoRounds />
    </section>
  </section>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { faqs } from '@/json/faqs.js'
  import { sketch } from '@/modules/sketch'

  const { t } = useI18n()

  const route = useRoute()

  const { locale } = useI18n()

  let item = computed(() => {
    return faqs[locale.value][route.params.item]
  })

  const toggle = (event) => {
    event.target.closest('.faq-item__item').classList.toggle('is-opened')
  }

  onMounted(() => {
    sketch(document.querySelector('.faq-item-page'), false)
  })
</script>