import axios from 'axios'

export default {
  getMyListings({ commit }, page) {
    return axios.get('/mylistings?page=' + page).then(({ data }) => {
      commit('setMyListings', data)
    })
  },

  getMyReservations({ commit }, page) {
    return axios.get('/myreservations?page=' + page).then(({ data }) => {
      commit('setMyReservations', data)
    })
  },

  deleteMyListing({ commit }, id) {
    return axios.delete('/places/' + id)
  }
}
