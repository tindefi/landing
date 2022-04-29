<template>
  <section class="tin-carousel">
    <div class="tin-carousel__items">
      <div class="tin-carousel__item is-active" data-index="0" @click.prevent="slideTo(0)">
        <div class="tin-carousel__item__container">
          <div class="tin-carousel__item__content has-text-lighter">
            <img class="tin-carousel__item__image" src="/images/common/utils/item_1.svg" alt="Tin Defi utils">
            <h3 class="tin-carousel__item__title">{{t('common.utils.item_1.title')}}</h3>
            <p>{{t('common.utils.item_1.text')}}</p>
          </div>
        </div>
      </div>

      <div class="tin-carousel__item is-next" data-index="1" @click.prevent="slideTo(1)">
        <div class="tin-carousel__item__container">
          <div class="tin-carousel__item__content has-text-lighter">
            <img class="tin-carousel__item__image" src="/images/common/utils/item_2.svg" alt="Tin Defi utils">
            <h3 class="tin-carousel__item__title">{{t('common.utils.item_2.title')}}</h3>
            <p>{{t('common.utils.item_2.text')}}</p>
          </div>
        </div>
      </div>

      <div class="tin-carousel__item is-hidden" data-index="2" @click.prevent="slideTo(2)">
        <div class="tin-carousel__item__container">
          <div class="tin-carousel__item__content has-text-lighter">
            <img class="tin-carousel__item__image" src="/images/common/utils/item_3.svg" alt="Tin Defi utils">
            <h3 class="tin-carousel__item__title">{{t('common.utils.item_3.title')}}</h3>
            <p>{{t('common.utils.item_3.text')}}</p>
          </div>
        </div>
      </div>

      <div class="tin-carousel__item is-hidden" data-index="3" @click.prevent="slideTo(3)">
        <div class="tin-carousel__item__container">
          <div class="tin-carousel__item__content has-text-lighter">
            <img class="tin-carousel__item__image" src="/images/common/utils/item_4.svg" alt="Tin Defi utils">
            <h3 class="tin-carousel__item__title">{{t('common.utils.item_4.title')}}</h3>
            <p>{{t('common.utils.item_4.text')}}</p>
          </div>
        </div>
      </div>

      <div class="tin-carousel__item is-prev" data-index="4" @click.prevent="slideTo(4)">
        <div class="tin-carousel__item__container">
          <div class="tin-carousel__item__content has-text-lighter">
            <img class="tin-carousel__item__image" src="/images/common/utils/item_5.svg" alt="Tin Defi utils">
            <h3 class="tin-carousel__item__title">{{t('common.utils.item_5.title')}}</h3>
            <p>{{t('common.utils.item_5.text')}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import TinIcon from '@/components/tin/TinIcon.vue'

  const { t } = useI18n()

  const slide = (event) => {
    const el = event.target
    if(!el.classList.contains('tin-carousel__item')) return

    const index = [...el.parentElement.children].indexOf(el)
    console.info(event, el, index)
  }

  const slideTo = (index) => {
    const el = document.querySelector(`.tin-carousel__item[data-index="${index}"]`)
    if(!el) return

    const slides = document.querySelectorAll('.tin-carousel__item')
    const length = slides.length
    const prev = index == 0 ? length - 1 : index - 1
    const next = index == length - 1 ? 0 : index + 1

    slides.forEach(slide => {
      slide.classList.remove('is-prev', 'is-active', 'is-next', 'is-hidden')

      if(![index, prev, next].includes(Number(slide.dataset.index))) slide.classList.add('is-hidden')
      if(slide.dataset.index == prev) slide.classList.add('is-prev')
      if(slide.dataset.index == index) slide.classList.add('is-active')
      if(slide.dataset.index == next) slide.classList.add('is-next')
    })
  }
</script>