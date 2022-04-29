<template>
  <section class="tin-chiefs tin-team">
    <div class="tin-team__items gtc-4">
      <article v-for="chief, i in chiefs" :key="i" class="tin-team__card">
        <div class="tin-team__card__content">
          <header class="tin-team__card__head">
            <img class="tin-team__card__picture" :src="`/images/team/${chief.avatar}.jpg`" alt="Tin Defi chief picture" loading="lazy" />
            <p class="tin-team__card__name">{{chief.name}}</p>
            <p class="tin-team__card__position">{{chief.position}}</p>
          </header>
          <p class="tin-team__card__formation">{{chief.formation}}</p>
        </div>
        <footer class="tin-team__card__foot">
          <div class="tin-team__card__social">
          <template v-if="Object.keys(chief.social).length">
            <a v-for="href, social in chief.social" :key="social" class="tin-team__card__social__link" :href="href" target="_blank">
              <TinIcon class="tin-team__card__social__icon" :name="`rrss/${social}`" />
            </a>
          </template>
          </div>
        </footer>
      </article>
    </div>
  </section>
</template>

<script setup>
  import { chiefs } from '@/json/chiefs'
  import TinIcon from '@/components/tin/TinIcon.vue'
</script>
