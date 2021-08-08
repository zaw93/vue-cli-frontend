import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoomDetail from '../views/RoomDetail.vue'
import Place from '../views/Place.vue'
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
    name: 'RoomDetail',
    component: RoomDetail,
    props: true
  },
  {
    path: '/places',
    name: 'Place',
    component: Place
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
  routes
})

router.beforeEach(function(to, from, next) {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
