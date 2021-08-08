import axios from 'axios'

export default {
  publish({ commit }, payload) {
    return axios.post('/places', payload).then(({ data }) => {
      console.log(data)
      commit('setPlaceDetail', data)
    })
  },

  getPlaceDetail({ commit }, id) {
    return axios.get(`/places/${id}`).then(({ data }) => {
      console.log(data)
      commit('setPlaceDetail', data)
    })
  },

  getAllPlaces({ commit }) {
    return axios.get('/places').then(({ data }) => {
      console.log(data)
      commit('setPlaces', data)
    })
  },

  getFeaturedPlaces({commit}) {
    return axios.get('/feature-places').then(({data}) => {
      console.log(data)
      commit('setFeaturedPlaces', data)
    })
  }
}
