<template>
  <div class="container py-5">
    <div v-if="showData" class="row">
      <div class="col-lg-10 offset-lg-1 mb-4 bg-white p-3 border-bottom shadow-sm rounded-3">
        <div class="row">
          <div class="col-8 ps-5">
            Users' Reservations
          </div>
          <div class="col-2 text-center">
            User
          </div>
          <div class="col-2 text-center">
            Actions
          </div>
        </div>
      </div>

      <!-- ListCard Start  -->
      <div
        v-for="reservation in myReservations.data"
        :key="reservation.id"
        class="col-lg-10 offset-lg-1 mb-4 bg-white p-3 shadow-sm rounded-3"
      >
        <ReservationCard @statusUpdated="fetchMyReservations" :reservation="reservation" />
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
      <h3 class="fw-normal mb-3">Nobody has reserved any of your listings yet.</h3>
      <p class="fw-light mb-5">Publish your properties to make extra income</p>
      <router-link to="/dashboard/create-new-listing">
        <b-button variant="dark">Create Listing</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ReservationCard from '../components/UI/ReservationCard.vue'

export default {
  name: 'UserReservations',
  components: { ReservationCard },
  data() {
    return {
      myReservations: {},
      lastPage: 1
    }
  },

  methods: {
    linkGen(pageNum) {
      return {
        path: '/dashboard/reservations',
        query: { page: pageNum }
      }
    },

    fetchMyReservations() {
      let curPage = this.$route.query.page ? this.$route.query.page : 1

      this.$store
        .dispatch('dashboard/getMyReservations', curPage)
        .then(() => {
          this.myReservations = this.$store.getters['dashboard/myReservations']
          this.lastPage = this.$store.getters['dashboard/myReservations'].meta.last_page
        })
        .catch(err => {
          if (err.response) {
            const { message } = err.response.data
            console.log(message)
          }
        })
    }
  },

  computed: {
    showData() {
      if (this.myReservations.data) {
        return this.myReservations.data.length > 0
      }
    }
  },

  created() {
    this.fetchMyReservations()
  },

  watch: {
    $route(to, from) {
      this.$store
        .dispatch('dashboard/getMyReservations', to.query.page)
        .then(() => {
          this.myReservations = this.$store.getters['dashboard/myReservations']
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
