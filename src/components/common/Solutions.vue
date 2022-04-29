<template>
  <section class="tin-solutions-component">
    <div class="tin-masonry">
      <div class="tin-masonry__items">
        <article class="tin-masonry__item" data-index="0" :class="{'is-active':filter === 0}" @click.prevent="filter = 0">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_1.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_1.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_1.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="1" :class="{'is-active':filter === 1}" @click.prevent="filter = 1">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_2.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_2.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_2.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="2" :class="{'is-active':filter === 2}" @click.prevent="filter = 2">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_3.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_3.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_3.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="3" :class="{'is-active':filter === 3}" @click.prevent="filter = 3">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_4.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_4.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_4.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="4" :class="{'is-active':filter === 4}" @click.prevent="filter = 4">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_5.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_5.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_5.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="5" :class="{'is-active':filter === 5}" @click.prevent="filter = 5">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_6.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_6.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_6.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="6" :class="{'is-active':filter === 6}" @click.prevent="filter = 6">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_7.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_7.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_7.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="7" :class="{'is-active':filter === 7}" @click.prevent="filter = 7">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_8.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_8.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_8.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="8" :class="{'is-active':filter === 8}" @click.prevent="filter = 8">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_9.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_9.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_9.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="9" :class="{'is-active':filter === 9}" @click.prevent="filter = 9">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_10.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_10.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_10.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="10" :class="{'is-active':filter === 10}" @click.prevent="filter = 10">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_11.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_11.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_11.text')}}</p>
            </div>
          </div>
        </article>
        <article class="tin-masonry__item" data-index="11" :class="{'is-active':filter === 11}" @click.prevent="filter = 11">
          <div class="tin-masonry__wrapper">
            <div class="tin-masonry__item__image">
              <img src="/images/common/solutions/item_12.svg" class="tin-masonry__item__img" loading="lazy">
            </div>
            <div class="tin-masonry__item__info">
              <p class="tin-masonry__item__title">{{t('common.solutions.item_12.title')}}</p>
              <p class="tin-masonry__item__text">{{t('common.solutions.item_12.text')}}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const { t } = useI18n()
  const filter = ref(0)

  const initMasonries = () => {
    const masonries = document.querySelectorAll('.tin-masonry');

    masonries.forEach(masonry => {
      setInterval(() => {
        const slides = masonry.querySelectorAll('.tin-masonry__item');
        const length = slides.length

        slides.forEach(slide => {
          slide.classList.remove('is-last')

          if(Number(slide.dataset.index) === 0){
            slide.classList.add('is-last')
            slide.dataset.index = length - 1
          }else{
            slide.dataset.index = slide.dataset.index - 1
          }

        })
      }, 7500)
    })

    // const slider = setInterval(() => {
    //   const slides = document.querySelectorAll('.tin-solutions-component .tin-masonry__item');
    //   const length = slides.length

    //   slides.forEach(slide => {
    //     slide.classList.remove('is-last')

    //     if(Number(slide.dataset.index) === 0){
    //       slide.classList.add('is-last')
    //       slide.dataset.index = length - 1
    //     }else{
    //       slide.dataset.index = slide.dataset.index - 1
    //     }

    //   })
    // }, 7500)
  }

  onMounted(() => {
    initMasonries()
  })
</script>
