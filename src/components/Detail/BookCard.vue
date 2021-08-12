<template>
  <div class="book-card col-md-5 align-self-center px-5">
    <b-card class="pt-2 pb-3 px-2 shadow rounded-3">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <div>
          <span class="fs-5">{{ priceStr }} Ks</span> <span class="fw-light">/ night</span>
        </div>
        <div class="rating my-2 d-flex align-items-center fw-light">
          <svg width="15" height="15" fill="#e15a5f" viewBox="0 0 1000 1000">
            <path
              d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
            ></path>
          </svg>
          <span class="ms-1">5.0</span>
          <span class="ms-1">(3 reviews)</span>
        </div>
      </div>

      <div class="date-picker d-flex">
        <b-card class="flex-fill">
          <b-form-group label="CHECK-IN" label-for="check-in" label-align="center">
            <b-form-datepicker
              id="check-in"
              @input="checkDateValidate"
              v-model="checkin"
              :min="minDate1"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              locale="en"
              selected-variant="dark"
              nav-button-variant="dark"
              placeholder="Pick a date"
            ></b-form-datepicker>
          </b-form-group>
        </b-card>
        <b-card class="flex-fill">
          <b-form-group label="CHECK-OUT" label-for="check-out" label-align="center">
            <b-form-datepicker
              id="check-out"
              v-model="checkout"
              :min="minDate2"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              locale="en"
              selected-variant="dark"
              nav-button-variant="dark"
              placeholder="Pick a date"
            ></b-form-datepicker>
          </b-form-group>
        </b-card>
      </div>

      <div class="guest-count mb-3">
        <b-card>
          <div class="d-flex">
            <label for="guest-count" class="me-5">GUESTS</label>
            <b-form-spinbutton id="guest-count" v-model="guest" min="1" :max="guestCount" inline></b-form-spinbutton>
          </div>
        </b-card>
      </div>

      <button @click="reserveBooking" :disabled="bookingStatus" class="btn btn-reserve w-100 btn-lg">
        <div v-if="isBooked" class="spinner-border text-light" style="width: 1.5rem; height: 1.5rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else>Reserve now</div>
      </button>
      <p v-if="bookingStatus" class="mt-3 text-center fw-light">This place is currently booked now.</p>

      <div v-if="showPrice" class="mt-3">
        <div class="d-flex justify-content-between mb-2 fw-light">
          <div>{{ priceStr }} Ks x {{ duration }} {{ duration > 1 ? 'nights' : 'night' }}</div>
          <div>{{ subtotal.toLocaleString() }} Ks</div>
        </div>
        <div class="d-flex justify-content-between mb-2 fw-light">
          <div>Cleaning fee</div>
          <div>{{ cleaningFee.toLocaleString() }} Ks</div>
        </div>
        <div class="d-flex justify-content-between mb-3 fw-light">
          <div>Service fee</div>
          <div>{{ serviceFee.toLocaleString() }} Ks</div>
        </div>
        <div class="d-flex justify-content-between pt-3 fw-bold border-top">
          <div>Total</div>
          <div>{{ total.toLocaleString() }} Ks</div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['guestCount', 'price', 'placeId', 'userId', 'availability'],
  data() {
    return {
      cleaningFee: 5000,
      serviceFee: 10000,
      checkin: '',
      checkout: '',
      guest: 1,
      isBooked: false
    }
  },
  methods: {
    checkDateValidate() {
      if (this.checkin && this.checkout && this.duration <= 0) {
        this.checkout = ''
      }
    },

    reserveBooking() {
      // Check place owner and auth user is same or not
      if (this.checkin === '' || this.checkout === '') {
        this.$toast.error('You must choose both check-in and check-out date')
      } else if (!this.$store.getters.isAuthenticated) {
        this.$toast.error('You must login first', { timeout: 3000 })
        setTimeout(() => {
          this.$router.push({ name: 'Login', query: { redirect: `/places/${this.placeId}` } })
        }, 3000)
      } else if (this.userId === this.$store.getters.user.id) {
        this.$toast.error('You cannot book your own listing')
      } else if (this.userId !== this.$store.getters.user.id) {
        this.isBooked = true
        this.$store
          .dispatch('bookings/book', {
            checkin: this.checkin,
            checkout: this.checkout,
            guest_count: this.guest,
            total_price: this.total,
            user_id: this.$store.getters.user.id,
            place_id: this.placeId
          })
          .then(() => {
            this.$toast.success('Your reservation has been booked successfully', { timeout: 3000 })
            this.isBooked = false
            setTimeout(() => {
              this.$router.push({ name: 'UserTrips' })
            }, 3000)
          })
          .catch(err => {
            if (err.response) {
              const { message } = err.response.data
              console.log(message)
            }
          })
      }
    }
  },
  computed: {
    priceStr() {
      if (this.price) return this.price.toLocaleString()
    },
    bookingStatus() {
      return this.availability === 'booked'
    },
    minDate1() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      return new Date(today)
    },
    minDate2() {
      if (this.checkin) {
        const checkinDate = new Date(this.checkin)
        return new Date(checkinDate.getTime() + 24 * 3600 * 1000)
      }
      return new Date(this.minDate1.getTime() + 24 * 3600 * 1000)
    },
    duration() {
      if (this.checkin && this.checkout) {
        let date1, date2, diffInTime
        date1 = new Date(this.checkin)
        date2 = new Date(this.checkout)
        diffInTime = date2.getTime() - date1.getTime()
        return diffInTime / (24 * 3600 * 1000)
      } else {
        return 1
      }
    },
    subtotal() {
      return this.duration * this.price
    },
    total() {
      return this.subtotal + this.serviceFee + this.cleaningFee
    },
    showPrice() {
      if (this.checkin && this.checkout) return true
    }
  }
}
</script>

<style lang="scss" scoped>
.book-card {
  .date-picker {
    .form-control {
      border: none;
    }

    .form-group {
      label {
        font-size: 0.9rem;
      }
    }

    .card {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      &:first-child {
        border-top-right-radius: 0;
      }

      &:last-child {
        border-top-left-radius: 0;
      }
    }
  }

  .guest-count {
    .card {
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  .btn-reserve {
    background-color: #ff385c;
    color: #fff;

    &:hover,
    &:focus {
      background-color: #e31c5f;
      color: #fff;
      box-shadow: none;
    }

    .spinner-border {
      border-width: 0.15em;
    }

    &[disabled] {
      background-color: #b6284b;
    }
  }
}
</style>
