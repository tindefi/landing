<template>
  <section class="tin-about-page">
    <section class="video-section">
      <article class="video-section__container">
        <video class="video-section__video" tabindex="0" autobuffer="autobuffer" preload="preload" autoplay muted loop poster="/images/about/video.webp">
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/about.mp4" />
          <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
        </video>
      </article>
    </section>

    <section class="about-section container">
      <h1 class="about-section__title fz-2 fw-600 text-gradient-5">{{t('pages.about.title')}}</h1>

      <div class="about-section__container">
        <p class="about-section__text">{{t('pages.about.text_1')}}</p>
        <p class="about-section__text">{{t('pages.about.text_2')}}</p>
        <p class="about-section__text">{{t('pages.about.text_3')}}</p>
        <p class="about-section__text">{{t('pages.about.text_4')}}</p>
        <p class="about-section__text">{{t('pages.about.text_5')}}</p>
      </div>
    </section>

    <section class="unique-section container">
      <h2 class="unique-section__title fw-600 text-gradient-1" v-html="t('pages.about.unique.title')"></h2>
      <div class="unique-section__carousel">
        <Values />
      </div>
    </section>

    <section class="advantages-section container">
      <h2 class="advantages-section__title fw-600 text-gradient-1">{{t('pages.about.advantages.title')}}</h2>
      <div class="advantages-section__carousel">
        <Utils />
      </div>
    </section>

    <section class="chief-section container">
      <h2 class="chief-section__title text-gradient-1">{{t('pages.about.chiefs.title')}}</h2>
      <Chiefs />
    </section>

    <section class="team-section container">
      <h2 class="team-section__title text-gradient-1">{{t('pages.about.team.title')}}</h2>
      <Team />
    </section>
  </section>
</template>

<script setup>
  import Utils from '@/components/common/Utils.vue'
  import Chiefs from '@/components/common/Chiefs.vue'
  import Team from '@/components/common/Team.vue'
  import Values from '@/components/common/Values.vue'

  const { t } = useI18n()
</script>