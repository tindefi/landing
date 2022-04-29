<template>
  <section class="tin-advisors">
    <div class="tin-advisors__items">
      <article v-for="advisor, i in advisors" :key="i" class="tin-advisors__card">
        <div class="tin-advisors__card__picture" :style="{backgroundImage: `url(/images/dogesun.gif)`}"></div>
        <div class="tin-advisors__card__info">
          <div class="tin-advisors__card__name">{{advisor.name}}</div>
          <div class="tin-advisors__card__position">{{advisor.position}}</div>
          <div class="tin-advisors__card__social">
            <template v-if="Object.keys(advisor.social).length">
              <a v-for="href, social in advisor.social" :key="social" class="tin-team__card__social__link" :href="href" target="_blank">
                <TinIcon class="tin-team__card__social__icon" :name="`rrss/${social}`" />
              </a>
            </template>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
  import { advisors } from '@/json/advisors'
  import TinIcon from '@/components/tin/TinIcon.vue'
</script>
