import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlaceDetails from '../views/PlaceDetails.vue'
import Places from '../views/Places.vue'
import Listing from '../views/Listing.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/places/:id',
    name: 'PlaceDetails',
    component: PlaceDetails,
    props: true
  },
  {
    path: '/places',
    name: 'Places',
    component: Places
  },
  {
    path: '/dashboard/listing',
    name: 'Listing',
    component: Listing,
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }
    } else {
      return { x: 0, y: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach(function(to, from, next) {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
