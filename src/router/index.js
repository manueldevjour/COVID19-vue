import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/About.vue"
import Country from '../views/Country.vue'
import Worldwide from '../views/Worldwide.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/country',
    name: 'country',
    component: Country,
    props: true
  },
  {
    path: '/worldwide',
    name: 'Worldwide',
    component: Worldwide
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
