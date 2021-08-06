import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoomDetail from '../views/RoomDetail.vue'
import Place from '../views/Place.vue'
import Listing from '../views/Listing.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rooms',
    name: 'RoomDetail',
    component: RoomDetail
  },
  {
    path: '/places',
    name: 'Place',
    component: Place
  },
  {
    path: '/dashboard/listing',
    name: 'Listing',
    component: Listing
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

export default router
