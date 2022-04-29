import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/components/App.vue'
import router from '@/router/router'
import { i18n } from '@/modules/i18n'
import vClickOutside from "click-outside-vue3"

import './sass/app.scss'

import VueScrollTo from 'vue-scrollto' // https://github.com/rigor789/vue-scrollto
import { initAppear } from '@/modules/appear'

const app = createApp(App)
app.use(App)
app.use(createPinia())
app.use(router)
app.use(VueScrollTo, {
  duration: 1000,
  easing: "ease-in-out",
  offset: -80,
})
app.use(i18n)
app.use(vClickOutside)
app.mount('#app')

initAppear()