<template>
  <div class="container py-5">
    <div v-if="showData" class="row">
      <div class="col-lg-10 offset-lg-1 mb-4 bg-white p-3 border-bottom shadow-sm rounded-3">
        <div class="row">
          <div class="col-8 ps-5">
            My Listings
          </div>
          <div class="col-2 text-center">
            Published at
          </div>
          <div class="col-2 text-center">
            Actions
          </div>
        </div>
      </div>

      <!-- ListCard Start  -->
      <div
        v-for="place in myListings.data"
        :key="place.id"
        class="col-lg-10 offset-lg-1 mb-4 bg-white p-3 shadow-sm rounded-3"
      >
        <div class="row">
          <div class="col-8">
            <PlaceCardHorizontal :place="place" />
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
            <div>{{ place.published_date }}</div>
          </div>
          <div class="col-2 d-flex flex-column justify-content-evenly p-3">
            <button class="btn btn-info"><b-icon icon="pencil-square" aria-hidden="true"></b-icon> Edit</button>
            <button @click="deleteListing(place.id)" class="btn btn-outline-danger">
              <b-icon icon="trash" aria-hidden="true"></b-icon> Delete
            </button>
            <button class="btn btn-outline-dark"><b-icon icon="eye-slash" aria-hidden="true"></b-icon> Hide</button>
          </div>
        </div>
      </div>
      <!-- ListCard End  -->

      <div id="pagination" class="my-5 d-flex justify-content-center">
        <b-pagination-nav
          :link-gen="linkGen"
          :number-of-pages="lastPage"
          :limit="lastPage"
          hide-goto-end-buttons
          hide-ellipsis
          pills
          use-router
        ></b-pagination-nav>
      </div>
    </div>

    <div v-if="!showData" class="m-5 p-5 text-center">
      <h3 class="fw-normal mb-3">You haven't published any listings yet.</h3>
      <p class="fw-light mb-5">Publish your first listing to make extra income.</p>
      <router-link to="/dashboard/create-new-listing">
        <b-button variant="dark">Create Listing</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import PlaceCardHorizontal from '../components/UI/PlaceCardHorizontal.vue'

export default {
  name: 'UserListings',
  components: { PlaceCardHorizontal },
  data() {
    return {
      myListings: {},
      lastPage: 1
    }
  },

  computed: {
    showData() {
      if (this.myListings.data) {
        return this.myListings.data.length > 0
      }
    }
  },

  methods: {
    linkGen(pageNum) {
      return {
        path: '/dashboard/my-listings',
        query: { page: pageNum }
      }
    },

    fetchMyListings() {
      let curPage = this.$route.query.page ? this.$route.query.page : 1

      this.$store
        .dispatch('dashboard/getMyListings', curPage)
        .then(() => {
          this.myListings = this.$store.getters['dashboard/myListings']
          this.lastPage = this.$store.getters['dashboard/myListings'].meta.last_page
        })
        .catch(err => {
          if (err.response) {
            const { message } = err.response.data
            console.log(message)
          }
        })
    },

    deleteListing(id) {
      this.$store
        .dispatch('dashboard/deleteMyListing', id)
        .then(res => {
          if (res.status === 204) {
            this.$toast.success('You have successfully deleted your listing')
            this.fetchMyListings()
          }
        })
        .catch(err => {
          if (err) {
            this.$toast.error('There was an error deleting. Try again later')
          }
        })
    }
  },

  created() {
    this.fetchMyListings()
  },

  watch: {
    $route(to, from) {
      this.$store
        .dispatch('dashboard/getMyListings', to.query.page)
        .then(() => {
          this.myListings = this.$store.getters['dashboard/myListings']
        })
        .catch(err => {
          if (err.response) {
            const { message } = err.response.data
            console.log(message)
          }
        })
    }
  }
}
</script>

<style lang="scss"></style>
