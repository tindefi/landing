<template>
  <section class="tin-team">
    <div class="tin-team__items">
      <article v-for="member, i in team" :key="i" class="tin-team__card is-short">
        <div class="tin-team__card__content">
          <header class="tin-team__card__head">
            <img class="tin-team__card__picture" :src="`/images/team/${member.avatar}.jpg`" alt="Tindefi team member picture" loading="lazy" />
            <p class="tin-team__card__name">{{member.name}}</p>
          </header>
          <p class="tin-team__card__formation">{{member.position}}</p>
        </div>
        <footer class="tin-team__card__foot">
          <div class="tin-team__card__social">
            <template v-if="Object.keys(member.social).length">
              <a v-for="href, social in member.social" :key="social" class="tin-team__card__social__link" :href="href" target="_blank">
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
  import { team } from '@/json/team'
  import TinIcon from '@/components/tin/TinIcon.vue'
</script>