import axios from 'axios'

export default {
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
  },

  getSearchPlaces({ commit }, query) {
    return axios.post('/search', query).then(({ data }) => {
      commit('setPlaces', data)
    })
  }
}
