<template>
  <section class="tin-home-component">
    <section class="hero-section">
      <div class="hero-section__title appear fade-down">
        <h1 class="text-gradient-1" v-html="t('pages.home.hero.title')"></h1>
      </div>
      <div class="hero-section__buttons appear fade-down delay-100">
        <!-- <a :href="`/downloads/business-plan-1-${locale}.pdf`" target="_blank" class="tin-button">{{t('pages.home.hero.buttons.business')}}</a>
        <a :href="`/downloads/pitch-deck-1-${locale}.pdf`" target="_blank" class="tin-button">{{t('pages.home.hero.buttons.pitch')}}</a> -->
        <router-link class="tin-button is-success big-shadow hero-section__join-button" to="/ico">{{t('navbar.join-ico')}}</router-link>
      </div>
      <!-- <a href="#video" v-smooth-scroll class="hero-section__scroll"> -->
      <div v-scroll-to="'.video-section'" class="hero-section__scroll">
        <span class="hero-section__scroll__text appear fade-down delay-200">{{t('pages.home.hero.scroll')}}</span>
        <span class="hero-section__scroll__icon appear fade-down delay-200">&darr;</span>
      </div>
    </section>

    <section class="video-section container">
      <div class="video-section__container">
        <video v-if="locale === 'es'" class="video-section__video" tabindex="0" autobuffer="autobuffer" preload="preload" controls autoplay muted>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/intro-es.mp4" />
          <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
        </video>
        <video v-else-if="locale === 'en'" class="video-section__video" tabindex="0" autobuffer="autobuffer" preload="preload" controls autoplay muted>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/intro-en.mp4" />
          <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
        </video>
        <video v-else class="video-section__video" tabindex="0" autobuffer="autobuffer" preload="preload" controls autoplay muted>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/intro-en.mp4" />
          <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
        </video>
      </div>
    </section>

    <section class="mission-section">
      <div class="mission-section__wrapper container">
        <div class="mission-section__column smartphone-column">
          <div class="mission-section__column__container">
            <div class="mission-section__background"></div>
            <div class="smartphone-container">
              <img class="mission-section__img__coin appear fade-in fade-down" src="/images/home/tin1.png" alt="Tin Defi Ethereum coin" loading="lazy" />
              <img class="mission-section__img__coin appear fade-in fade-down" src="/images/home/tin2.png" alt="Tin Defi Ethereum coin" loading="lazy" />
              <img class="mission-section__img__coin appear fade-in fade-down" src="/images/home/tin3.png" alt="Tin Defi Ethereum coin" loading="lazy" />
              <img class="smartphone-container__tins appear fade-in" src="/images/tins-cake.svg" alt="Tin Defi CAKE content" loading="lazy" />
              <img class="mission-section__img appear fade-in" src="/images/smartphones/iphone-pro-tin.svg" alt="Tin Defi iPhone PRO shape" loading="lazy" />
            </div>
          </div>
        </div>

        <div class="mission-section__column">
          <div class="mission-section__column__container">
            <img class="mission-section__logo" src="/tindefi-logo.svg" alt="Logo Tin Defi" loading="lazy" />
            <h4 class="mission-section__title text-gradient-1"><strong>{{t('pages.home.mission.title')}}</strong></h4>
            <p class="mission-section__text">{{t('pages.home.mission.text')}}</p>
            <div class="mission-section__buttons">
              <img src="/images/smartphones/appstore.svg" alt="Download Tin Defi Apple App Store" loading="lazy" />
              <img src="/images/smartphones/googleplay.svg" alt="Download Tin Defi Androd Google Play" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="quote-section container">
      <h2 class="quote-section__title text-gradient-1">{{t('pages.home.quote.title')}}</h2>
      <p class="quote-section__author">{{t('pages.home.quote.author')}}</p>
    </section>

    <section class="tin-features container">
      <div class="tin-features__background">
        <div class="smartphone-container appear fade-in fade-down">
          <div class="smartphone-container__radial-background"></div>
          <div class="smartphone-container__background"></div>
          <!-- <img class="smartphone-container__tins" src="/images/tins-bayc.svg" alt="tindefi BAYC content" loading="lazy" /> -->
          <!-- <img class="smartphone-container__img" src="/images/smartphones/android-tin.svg" alt="Tin Defi Android shape" loading="lazy" /> -->
          <img class="smartphone-container__img" src="/images/android-tin.svg" alt="Tin Defi Android shape" loading="lazy" />
        </div>
        <div class="tin-features__radial-gradient"></div>
      </div>


      <div class="tin-features__items" :class="{'is-in-viewport':featuresInViewport}">
        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.tins.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.tins.text')"></div>
        </div>

        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.discover.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.discover.text')"></div>
        </div>

        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.study.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.study.text')"></div>
        </div>

        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.trade.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.trade.text')"></div>
        </div>

        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.vc.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.vc.text')"></div>
        </div>

        <!-- RIGHT ZONE -->

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.transmit.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.transmit.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.opine.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.opine.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.collab.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.collab.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.follow.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.follow.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.viral.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.viral.text')"></div>
        </div>
      </div>
    </section>

    <section class="chat-section container">
      <div class="chat-section__header">
        <h2 class="chat-section__title text-gradient-1" v-html="t('pages.home.chat.title')"></h2>
        <p class="chat-section__text">{{t('pages.home.chat.text')}}</p>
      </div>

      <div class="chat-section__items">
        <div class="chat-section__item">
          <video class="chat-section__item__video" tabindex="0" autobuffer="autobuffer" preload="preload" autoplay muted loop>
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/chats_1.mp4" />
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
          </video>
          <div class="chat-section__item__info">
            <div class="chat-section__item__title">
              <h3 class="is-simple has-text-white">{{t('pages.home.chat.cards.secure.title')}}</h3>
            </div>
            <p class="chat-section__item__text">{{t('pages.home.chat.cards.secure.text')}}</p>
          </div>
        </div>
        <div class="chat-section__item">
          <video class="chat-section__item__video" tabindex="0" autobuffer="autobuffer" preload="preload" autoplay muted loop>
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/chats_2.mp4" />
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
          </video>
          <div class="chat-section__item__info">
            <div class="chat-section__item__title">
              <h3 class="is-simple has-text-white">{{t('pages.home.chat.cards.hurry.title')}}</h3>
            </div>
            <p class="chat-section__item__text">{{t('pages.home.chat.cards.hurry.text')}}</p>
          </div>
        </div>
        <div class="chat-section__item">
          <video class="chat-section__item__video" tabindex="0" autobuffer="autobuffer" preload="preload" autoplay muted loop>
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/chats_3.mp4" />
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
          </video>
          <div class="chat-section__item__info">
            <div class="chat-section__item__title">
              <h3 class="is-simple has-text-white">{{t('pages.home.chat.cards.cryptum.title')}}</h3>
            </div>
            <p class="chat-section__item__text">{{t('pages.home.chat.cards.cryptum.text')}}</p>
          </div>
        </div>
        <div class="chat-section__item">
          <video class="chat-section__item__video" tabindex="0" autobuffer="autobuffer" preload="preload" autoplay muted loop>
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/chats_4.mp4" />
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
          </video>
          <div class="chat-section__item__info">
            <div class="chat-section__item__title">
              <h3 class="is-simple has-text-white">{{t('pages.home.chat.cards.heavy.title')}}</h3>
            </div>
            <p class="chat-section__item__text">{{t('pages.home.chat.cards.heavy.text')}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="tin-features container">
      <div class="tin-features__background">
        <div class="smartphone-container appear fade-in fade-down">
          <video class="" tabindex="0" autobuffer="autobuffer" preload="preload" autoplay muted loop>
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/experiences.mp4" />
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
          </video>
        </div>
        <div class="tin-features__radial-gradient"></div>
      </div>


      <div class="tin-features__items" :class="{'is-in-viewport':featuresInViewport}">
        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.tins.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.tins.text')"></div>
        </div>

        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.discover.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.discover.text')"></div>
        </div>

        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.study.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.study.text')"></div>
        </div>

        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.trade.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.trade.text')"></div>
        </div>

        <div class="tin-features__item">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.vc.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.vc.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.transmit.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.transmit.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.opine.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.opine.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.collab.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.collab.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.follow.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.follow.text')"></div>
        </div>

        <div class="tin-features__item is-right">
          <div class="tin-features__item__header">
            <p class="tin-features__item__title fz-4 fw-700 has-text-light">{{t('pages.home.features.viral.title')}}</p>
          </div>
          <div class="tin-features__item__text fz-2 fw-600 has-text-lighter" v-html="t('pages.home.features.viral.text')"></div>
        </div>
      </div>
    </section> -->

    <section class="experiences-section container">
      <div class="experiences-section__header">
        <h2 class="experiences-section__title text-gradient-1" v-html="t('pages.home.experiences.title')"></h2>
        <p class="experiences-section__text">{{t('pages.home.experiences.text')}}</p>
      </div>
    </section>

    <section class="profile-section container">
      <div class="profile-section__video-container">
        <div class="profile-section__video-wrapper" :class="{'is-in-viewport':profileInViewport}">
          <video class="profile-section__video" tabindex="0" autobuffer="autobuffer" preload="preload" autoplay muted loop>
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/experiences.mp4" />
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
          </video>
        </div>
      </div>
      <div class="profile-section__wrapper">
        <div class="profile-section__items">
          <article class="profile-section__item">
            <div class="profile-section__item__container appear fade-in">
              <h4 class="profile-section__item__title">{{t('pages.home.profile.items.projects.title')}}</h4>
              <h2 class="profile-section__item__text" v-html="t('pages.home.profile.items.projects.text')"></h2>
            </div>
          </article>

          <article class="profile-section__item">
            <div class="profile-section__item__container appear fade-in">
              <h4 class="profile-section__item__title">{{t('pages.home.profile.items.influencers.title')}}</h4>
              <h2 class="profile-section__item__text" v-html="t('pages.home.profile.items.influencers.text')"></h2>
            </div>
          </article>

          <article class="profile-section__item">
            <div class="profile-section__item__container appear fade-in">
              <h4 class="profile-section__item__title">{{t('pages.home.profile.items.user.title')}}</h4>
              <h2 class="profile-section__item__text" v-html="t('pages.home.profile.items.user.text')"></h2>
            </div>
          </article>

          <article class="profile-section__item">
            <div class="profile-section__item__container appear fade-in">
              <h4 class="profile-section__item__title">{{t('pages.home.profile.items.vc.title')}}</h4>
              <h2 class="profile-section__item__text" v-html="t('pages.home.profile.items.vc.text')"></h2>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="tin-lives container">
      <div class="tin-lives__wrapper">
        <div class="tin-lives__video-container appear fade-in fade-down delay-300">
          <video class="tin-lives__video" tabindex="0" autobuffer="autobuffer" preload="preload" autoplay muted loop>
            <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="/videos/home/lives.webm" />
            <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="/videos/home/lives.mp4" />
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
          </video>
        </div>
        <div class="tin-lives__messages">
          <div class="tin-lives__message">
            <h1 class="tin-lives__message__title text-gradient-6 appear fade-right">{{t('pages.home.lives.title')}}</h1>
            <p class="tin-lives__message__text appear fade-right delay-200">{{t('pages.home.lives.text')}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="profit-section container">
      <h2 class="profit-section__title text-gradient-1">{{t('pages.home.profit.title')}}</h2>
      <Profit />
    </section>

    <section class="solutions-section container">
      <h2 class="solutions-section__title text-gradient-1" v-html="t('pages.home.solutions.title')"></h2>
      <Solutions />
    </section>

    <section class="scan-section container">
      <h2 class="scan-section__title text-gradient-1" v-html="t('pages.home.scan.title')"></h2>
      <ScanBackup />
    </section>

    <section class="chief-section container">
      <h2 class="chief-section__title text-gradient-1">{{t('pages.home.chief.title')}}</h2>
      <Chiefs />
    </section>

    <section class="team-section container">
      <h2 class="team-section__title text-gradient-1">{{t('pages.home.team.title')}}</h2>
      <Team />
    </section>

    <section class="advisor-section container">
      <h2 class="advisor-section__title text-gradient-1">{{t('pages.home.advisor.title')}}</h2>
      <Advisors />
    </section>

    <section class="partners-section container">
      <h2 class="partners-section__title text-gradient-1">{{t('pages.home.partners.title')}}</h2>
      <Partners />
    </section>
  </section>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { isInViewport } from '@/modules/utils'
  import { scrollPlay } from '@/modules/video'
  import { sketch } from '@/modules/sketch'
  import { appear } from '@/modules/appear'

  import Profit from '@/components/common/Profit.vue'
  import Solutions from '@/components/common/Solutions.vue'
  import ScanBackup from '@/components/common/ScanBackup.vue'
  import Chiefs from '@/components/common/Chiefs.vue'
  import Team from '@/components/common/Team.vue'
  import Advisors from '@/components/common/Advisors.vue'
  import Partners from '@/components/common/Partners.vue'

  const { t, locale } = useI18n()

  const featuresInViewport = ref(false);
  const profileInViewport = ref(false);

  const handleScroll = (event) => {
    const features = document.querySelector('.tin-features')
    featuresInViewport.value = isInViewport(features).visible

    const profile = document.querySelector('.profile-section')
    profileInViewport.value = isInViewport(profile, 300).inside || isInViewport(profile, 300).full

    var viewportOffset = profile.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;
  }

  onMounted(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    sketch(document.querySelector('.hero-section'))
    // scrollPlay('.profile-section__video', '.profile-section__video-container', 700)
  })
</script>

<style scoped></style>
