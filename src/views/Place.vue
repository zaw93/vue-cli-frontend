<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 cold-sm-12">
          <div v-for="place in places" :key="place.id" class="py-3 border-bottom">
            <PlaceCardHorizontal :place="place" />
          </div>
          <!-- <div class="py-3 border-bottom">
            <PlaceCardHorizontal />
          </div>
          <div class="py-3 border-bottom">
            <PlaceCardHorizontal />
          </div>
          <div class="py-3 border-bottom">
            <PlaceCardHorizontal />
          </div>
          <div class="py-3 border-bottom">
            <PlaceCardHorizontal />
          </div> -->

          <div>
            <pagination :data="placesData"></pagination>
          </div>
        </div>

        <!-- Advanced Search  -->
        <div class="col-md-6 col-sm-12">
          <AdvanceSearch />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceCardHorizontal from '../components/UI/PlaceCardHorizontal.vue'
import AdvanceSearch from '../components/UI/AdvanceSearch.vue'

export default {
  name: 'Place',
  components: { PlaceCardHorizontal, AdvanceSearch },
  data() {
    return {
      placesData: {}
    }
  },
  computed: {
    places() {
      return this.$store.getters['places/places']
    }
  },
  created() {
    this.$store
      .dispatch('places/getAllPlaces')
      .then(() => console.log('success'))
      .catch(err => {
        if (err.response) {
          const { message } = err.response.data
          console.log(message)
        }
      })
  }
}
</script>
