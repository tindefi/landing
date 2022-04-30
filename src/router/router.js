import { createRouter, createWebHistory } from 'vue-router'
import { appear } from '@/modules/appear'

import Home from '@/components/pages/Home.vue'
import Ico from '@/components/pages/Ico.vue'
import Faq from '@/components/pages/Faq.vue'
import FaqItem from '@/components/pages/FaqItem.vue'
import About from '@/components/pages/About.vue'
import Services from '@/components/pages/Services.vue'
import NotFound from '@/components/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ico',
    name: 'ico',
    component: Ico
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/faq/:item',
    name: 'faq.item',
    component: FaqItem
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/:pathMatch(.*)*',
    beforeEnter: (to, from, next) => { next('/404') }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    appear()
    if(savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

})

export default router