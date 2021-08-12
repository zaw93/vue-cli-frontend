import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlaceDetails from '../views/PlaceDetails.vue'
import Places from '../views/Places.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Hosting from '../views/Hosting.vue'
import UserListings from '../views/UserListings.vue'
import UserReservations from '../views/UserReservations.vue'
import UserReceipt from '../views/UserReceipt.vue'
import UserTrips from '../views/UserTrips.vue'
import Profile from '../views/Profile.vue'
import Account from '../views/Account.vue'
import Test from '../views/Test.vue'
import NotFound from '../components/UI/NotFound.vue'

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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requireAuth: true },
    children: [
      {
        path: 'my-profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'my-account',
        name: 'Account',
        component: Account
      },
      {
        path: 'my-trips',
        name: 'UserTrips',
        component: UserTrips
      },
      {
        path: 'reservations',
        name: 'UserReservations',
        component: UserReservations
      },
      {
        path: 'my-receipt',
        name: 'UserReceipt',
        component: UserReceipt
      },
      {
        path: 'my-listings',
        name: 'UserListings',
        component: UserListings
      },
      {
        path: 'create-new-listing',
        name: 'Hosting',
        component: Hosting
      }
    ]
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
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  { path: '/:notFound(.*)', component: NotFound }
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
