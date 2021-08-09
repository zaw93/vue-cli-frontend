import axios from 'axios'

export default {
  book({ commit }, payload) {
    return axios.post('/bookings', payload).then(({ data }) => {
      commit('setBookingDetail', data)
    })
  }
}
