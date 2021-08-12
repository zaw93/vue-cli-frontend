import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import authModule from './auth/index.js'
import placesModule from './places/index.js'
import bookingsModule from './bookings/index.js'
import dashboardModule from './dashboard/index.js'

Vue.use(Vuex)

// axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.baseURL = 'https://api.zawzawmyatnyein.me/api'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth: authModule,
    places: placesModule,
    bookings: bookingsModule,
    dashboard: dashboardModule
  }
})
