<template>
  <div class="tin-navbar__item is-dropdown"
    :class="{'is-simple':simple}"
    @click="opened = !opened"
    v-click-outside="close">

    <a class="tin-navbar__item_header">
      <span v-if="props.title">{{title}}</span>
      <slot v-else name="title"></slot>
    </a>

    <div class="tin-navbar__dropdown" :class="[`is-${props.position}`, {'is-opened':opened}]">
      <slot @click="close" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    title: String,
    simple: Boolean,
    position: {
      type: String,
      default: 'center',
    }
  })

  const opened = ref(false)

  const close = () => {
    opened.value = false
  }
</script>