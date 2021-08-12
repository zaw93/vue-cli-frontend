export default {
  setBookingDetail(state, payload) {
    state.booking = payload.data
  },

  setMyBookings(state, payload) {
    state.myBookings = payload
  }
}
