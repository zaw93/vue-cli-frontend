export default {
  setPlaceDetail(state, payload) {
    state.place = payload.data
  },

  setPlaces(state, payload) {
    state.places = payload.data
  },

  setFeaturedPlaces(state, payload) {
    state.featuredPlaces = payload.data
  }
}
