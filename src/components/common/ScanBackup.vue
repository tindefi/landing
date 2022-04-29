<template>
  <section class="tin-scan-backup-component">
    <div class="tin-masonry is-reversed">
      <div class="tin-masonry__items">
        <article class="tin-masonry__item" data-index="0" :class="{'is-active':filter === 0}" @click.prevent="filter = 0">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_1.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_1.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_1.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="1" :class="{'is-active':filter === 1}" @click.prevent="filter = 1">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_2.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_2.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_2.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="2" :class="{'is-active':filter === 2}" @click.prevent="filter = 2">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_3.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_3.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_3.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="3" :class="{'is-active':filter === 3}" @click.prevent="filter = 3">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_4.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_4.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_4.text')"></p>
            </div>
          </div>
        </article>
        <!-- <article class="tin-masonry__item" data-index="4" :class="{'is-active':filter === 4}" @click.prevent="filter = 4">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_4.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_5.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_5.text')"></p>
            </div>
          </div>
        </article> -->
        <article class="tin-masonry__item" data-index="4" :class="{'is-active':filter === 4}" @click.prevent="filter = 4">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_5.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_15.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_15.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="5" :class="{'is-active':filter === 5}" @click.prevent="filter = 5">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_6.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_6.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_6.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="6" :class="{'is-active':filter === 6}" @click.prevent="filter = 6">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_7.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_7.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_7.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="7" :class="{'is-active':filter === 7}" @click.prevent="filter = 7">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_8.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_8.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_8.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="8" :class="{'is-active':filter === 8}" @click.prevent="filter = 8">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_9.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_9.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_9.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="9" :class="{'is-active':filter === 9}" @click.prevent="filter = 9">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_10.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_10.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_10.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="10" :class="{'is-active':filter === 10}" @click.prevent="filter = 10">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_11.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_11.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_11.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="11" :class="{'is-active':filter === 11}" @click.prevent="filter = 11">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_12.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_12.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_12.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="12" :class="{'is-active':filter === 12}" @click.prevent="filter = 12">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_13.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_13.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_13.text')"></p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="13" :class="{'is-active':filter === 13}" @click.prevent="filter = 13">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_14.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_14.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_14.text')"></p>
            </div>
          </div>
        </article>
        <!-- <article class="tin-masonry__item" data-index="14" :class="{'is-active':filter === 14}" @click.prevent="filter = 14">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_15.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_15.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_15.text')"></p>
            </div>
          </div>
        </article> -->
        <article class="tin-masonry__item" data-index="14" :class="{'is-active':filter === 14}" @click.prevent="filter = 14">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/scan-backup/item_15.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.scan-backup.item_16.title')}}</p>
              <p class="tin-masonry__item__text" v-html="t('common.scan-backup.item_16.text')"></p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  const { t } = useI18n()
  const filter = ref(0)
</script>
