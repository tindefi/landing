<template>
  <section class="tin-countdown" :class="[`is-${props.size}`, {'has-dots':dots}]">
    <div class="tin-countdown__container">
      <div class="tin-countdown__item tin-countdown__days">
        <span class="tin-countdown__item__value" v-html="countdown.days"></span>
        <span v-if="labels" class="tin-countdown__item__label">{{t('forms.day', 2)}}</span>
      </div>
      <div class="tin-countdown__item tin-countdown__hours">
        <span class="tin-countdown__item__value" v-html="countdown.hours"></span>
        <span v-if="labels" class="tin-countdown__item__label">{{t('forms.hour', 2)}}</span>
      </div>
      <div class="tin-countdown__item tin-countdown__minutes">
        <span class="tin-countdown__item__value" v-html="countdown.minutes"></span>
        <span v-if="labels" class="tin-countdown__item__label">{{t('forms.minute', 2)}}</span>
      </div>
      <div class="tin-countdown__item tin-countdown__seconds">
        <span class="tin-countdown__item__value" v-html="countdown.seconds"></span>
        <span v-if="labels" class="tin-countdown__item__label">{{t('forms.second', 2)}}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const { t } = useI18n()

  const props = defineProps({
    target: {
      type: String,
      required: true
    },
    labels: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'small'
    },
    dots: Boolean,
    wrap: Boolean,
  })

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const deadline = new Date(props.target).getTime()

  const countdown = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const initInterval = () => {
    const interval = setInterval(function() {
      const now = new Date().getTime()
      const distance = deadline - now

      const days = String(Math.floor(distance / (day))).padStart(2, "0")
      const hours = String(Math.floor((distance % (day)) / (hour))).padStart(2, "0")
      const minutes = String(Math.floor((distance % (hour)) / (minute))).padStart(2, "0")
      const seconds = String(Math.floor((distance % (minute)) / second)).padStart(2, "0")

      countdown.value.days = props.wrap ? days.split('').reduce((acc, cur) => acc += `<span class="tin-countdown__item__digit">${cur}</span>`, '') : days
      countdown.value.hours = props.wrap ? hours.split('').reduce((acc, cur) => acc += `<span class="tin-countdown__item__digit">${cur}</span>`, '') : hours
      countdown.value.minutes = props.wrap ? minutes.split('').reduce((acc, cur) => acc += `<span class="tin-countdown__item__digit">${cur}</span>`, '') : minutes
      countdown.value.seconds = props.wrap ? seconds.split('').reduce((acc, cur) => acc += `<span class="tin-countdown__item__digit">${cur}</span>`, '') : seconds

      //do something later when date is reached
      if (distance < 0){
        document.getElementById("countdown").style.display = "none"
        clearInterval(interval)
      }
    }, 0)
  }

  onMounted(() => {
    initInterval();
  })

</script>
