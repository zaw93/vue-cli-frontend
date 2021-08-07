<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 cold-sm-12">
          <div class="py-3 border-bottom">
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
          </div>
          <div class="py-3 border-bottom">
            <PlaceCardHorizontal />
          </div>

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
  }
}
</script>
