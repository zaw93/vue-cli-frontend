import axios from 'axios'

export default {
  publish({ commit }, payload) {
    return axios.post('/places', payload).then(({ data }) => {
      commit('setPlaceDetail', data)
    })
  },

  getPlaceDetail({ commit }, id) {
    return axios.get(`/places/${id}`).then(({ data }) => {
      commit('setPlaceDetail', data)
    })
  },

  getAllPlaces({ commit }, page) {
    return axios.get('/places?page=' + page).then(({ data }) => {
      commit('setPlaces', data)
    })
  },

  getFeaturedPlaces({ commit }) {
    return axios.get('/feature-places').then(({ data }) => {
      commit('setFeaturedPlaces', data)
    })
  }
}
