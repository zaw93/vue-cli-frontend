<template>
  <div id="feature-section" class="container-fluid py-5">
    <div class="text-center mb-5">
      <h2>Featured Places</h2>
      <p>Guests agree: these stays are highly rated for location, cleanliness, and more.</p>
    </div>
    <div class="container">
      <div class="row mb-4">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <PlaceCard />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <PlaceCard />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <PlaceCard />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <PlaceCard />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <PlaceCard />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <PlaceCard />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <PlaceCard />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <PlaceCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceCard from '../UI/PlaceCard.vue'
export default {
  name: 'FeatureSection',
  components: { PlaceCard }
}
</script>
