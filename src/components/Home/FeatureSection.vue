<template>
  <div id="feature-section" class="container-fluid py-5">
    <div class="text-center mb-5">
      <h2>Featured Places</h2>
      <p>Guests agree: these stays are highly rated for location, cleanliness, and more.</p>
    </div>
    <div class="container">
      <div class="row mb-4">
        <div v-for="place in featuredPlaces" :key="place.id" class="col-lg-3 col-md-6 col-sm-12 py-3">
          <PlaceCard :place="place" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceCard from '../UI/PlaceCard.vue'
export default {
  name: 'FeatureSection',
  components: { PlaceCard },
  computed: {
    featuredPlaces() {
      return this.$store.getters['places/featuredPlaces']
    }
  },
  created() {
    this.$store
      .dispatch('places/getFeaturedPlaces')
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
