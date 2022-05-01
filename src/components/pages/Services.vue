<template>
  <section class="tin-services-page">
    <section class="services-section container">
      <h1 class="services-section__title fz-2 fw-700 text-gradient-8">{{t('pages.services.premium.title')}}</h1>

      <section class="tin-services">
        <div class="tin-services__items gtc-2">
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/p_item_1.svg" loading="lazy" />
            <p class="tin-services__item__title fz-3 fw-500 has-text-lighter">{{t('pages.services.premium.items.investors.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.premium.items.investors.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/p_item_2.svg" loading="lazy" />
            <p class="tin-services__item__title fz-3 fw-500 has-text-lighter">{{t('pages.services.premium.items.projects.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.premium.items.projects.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/p_item_3.svg" loading="lazy" />
            <p class="tin-services__item__title fz-3 fw-500 has-text-lighter">{{t('pages.services.premium.items.influencers.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.premium.items.influencers.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/p_item_4.svg" loading="lazy" />
            <p class="tin-services__item__title fz-3 fw-500 has-text-lighter">{{t('pages.services.premium.items.vc.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.premium.items.vc.html')"></div>
          </article>
        </div>
      </section>

      <p class="services-section__title fz-2 fw-600 has-text-lighter">{{t('pages.services.income.title')}}</p>

      <section class="tin-services">
        <div class="tin-services__items gtc-3">
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/i_item_1.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.income.items.content.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.income.items.content.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/i_item_2.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.income.items.views.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.income.items.views.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/i_item_3.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.income.items.subscriptions.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.income.items.subscriptions.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/i_item_4.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.income.items.collaborations.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.income.items.collaborations.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/i_item_5.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.income.items.defi.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.income.items.defi.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/i_item_6.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.income.items.security.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.income.items.security.html')"></div>
          </article>
        </div>
      </section>

      <p class="services-section__title fz-2 fw-600 has-text-lighter">{{t('pages.services.difference.title')}}</p>

      <section class="tin-services">
        <div class="tin-services__items gtc-3">
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/d_item_1.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.difference.items.projects.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.difference.items.projects.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/d_item_2.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.difference.items.users.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.difference.items.users.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/d_item_3.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.difference.items.influencers.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.difference.items.influencers.html')"></div>
          </article>
        </div>
      </section>

      <p class="services-section__title fz-2 fw-600 has-text-lighter">{{t('pages.services.exposition.title')}}</p>

      <section class="tin-services">
        <div class="tin-services__items gtc-3">
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/e_item_1.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.exposition.items.influencers.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.exposition.items.influencers.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/e_item_2.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.exposition.items.projects.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.exposition.items.projects.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/e_item_3.svg" loading="lazy" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.exposition.items.vc.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.exposition.items.vc.html')"></div>
          </article>
        </div>
      </section>

      <p class="services-section__title fz-2 fw-600 has-text-lighter">{{t('pages.services.onchain.title')}}</p>

      <section class="tin-services">
        <div class="tin-services__items gtc-3">
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/o_item_1.svg" loading="lazy" style="width: 50%;" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.onchain.items.stats.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.onchain.items.stats.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/o_item_2.svg" loading="lazy" style="width: 50%;" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.onchain.items.metrics.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.onchain.items.metrics.html')"></div>
          </article>
          <article class="tin-services__item">
            <img class="tin-services__item__img" src="/images/services/o_item_3.svg" loading="lazy" style="width: 50%;" />
            <p class="tin-services__item__title fz-4 fw-700 has-text-lighter">{{t('pages.services.onchain.items.monitoring.title')}}</p>
            <div class="tin-services__item__content" v-html="t('pages.services.onchain.items.monitoring.html')"></div>
          </article>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
  const { t } = useI18n()
</script>
