export default {
  setPlaceDetail(state, payload) {
    state.place = payload.data
  },

  setPlaces(state, payload) {
    state.places = payload
  },

  setFeaturedPlaces(state, payload) {
    state.featuredPlaces = payload.data
  }
}
