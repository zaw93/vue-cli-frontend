import axios from 'axios'

export default {
  book({ commit }, payload) {
    return axios.post('/bookings', payload).then(({ data }) => {
      commit('setBookingDetail', data)
    })
  },

  getMyBookings({ commit }, page) {
    return axios.get('/bookings?page=' + page).then(({ data }) => {
      commit('setMyBookings', data)
    })
  }
}
