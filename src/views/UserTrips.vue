<template>
  <div class="container py-5">
    <div v-if="showData" class="row">
      <div class="col-lg-10 offset-lg-1 mb-4 bg-white p-3 border-bottom shadow-sm rounded-3">
        <div class="row">
          <div class="col-7 ps-5">
            My Trips
          </div>
          <div class="col-2 text-center">
            Booked at
          </div>
          <div class="col-3 text-center">
            Host
          </div>
        </div>
      </div>

      <div
        v-for="booking in myBookings.data"
        :key="booking.id"
        class="col-lg-10 offset-lg-1 mb-4 bg-white p-3 shadow-sm rounded-3"
      >
        <BookingCard :booking="booking" />
      </div>

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
      <h3 class="fw-normal mb-3">There is no trips you have booked yet!</h3>
      <p class="fw-light mb-5">Try looking for nice places to plan your vacation.</p>
      <router-link to="/places">
        <b-button variant="dark">Explore Places</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import BookingCard from '../components/UI/BookingCard.vue'

export default {
  name: 'UserTrips',
  components: { BookingCard },
  data() {
    return {
      myBookings: {},
      lastPage: 1
    }
  },

  methods: {
    linkGen(pageNum) {
      return {
        path: '/dashboard/my-trips',
        query: { page: pageNum }
      }
    }
  },

  computed: {
    showData() {
      if (this.myBookings.data) {
        return this.myBookings.data.length > 0
      }
    }
  },

  created() {
    let curPage = this.$route.query.page ? this.$route.query.page : 1

    this.$store
      .dispatch('bookings/getMyBookings', curPage)
      .then(() => {
        this.myBookings = this.$store.getters['bookings/myBookings']
        this.lastPage = this.$store.getters['bookings/myBookings'].meta.last_page
      })
      .catch(err => {
        if (err.response) {
          const { message } = err.response.data
          console.log(message)
        }
      })
  },

  watch: {
    $route(to, from) {
      this.$store
        .dispatch('bookings/getMyBookings', to.query.page)
        .then(() => {
          this.myBookings = this.$store.getters['bookings/myBookings']
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
