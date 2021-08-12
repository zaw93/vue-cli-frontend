<template>
  <div class="row">
    <div class="col-8">
      <div class="reservation-box d-flex">
        <div class="reservation-thumbnail">
          <router-link :to="/places/ + reservation.place_id">
            <img :src="reservation.place_photo" alt="property-box" />
          </router-link>
        </div>

        <div class="detail fw-light pe-3">
          <div class="detail-info">
            <router-link :to="/places/ + reservation.place_id" class="title">
              <div class="mb-1 fw-normal">{{ reservation.place_title }}</div>
            </router-link>
            <div class="location mb-2">{{ reservation.place_city }}, {{ reservation.place_state }}</div>
            <div class="divider mb-2"></div>
          </div>

          <div class="duration mb-3">
            <b-icon icon="calendar2-check-fill"></b-icon>
            <span class="mx-2">{{ reservation.checkin }}</span>
            <span>→</span>
            <span class="mx-2">{{ reservation.checkout }}</span>
          </div>

          <div class="d-flex justify-content-between mb-3">
            <div class="guest">
              <b-icon icon="people-fill"> </b-icon>
              <span class="ms-2 fw-bold">{{ reservation.guest_count }}</span>
            </div>

            <div class="price fw-bold">{{ reservation.total_price.toLocaleString() }} Ks</div>
          </div>

          <div class="d-flex justify-content-between">
            <div class="status">
              <span v-if="reservation.status === 0" class="badge bg-warning">Pending</span>
              <span v-if="reservation.status === 1" class="badge bg-success">Approved</span>
              <span v-if="reservation.status === 2" class="badge bg-danger">Declined</span>
            </div>
            <div class="reserve-date">
              Reserved on <span class="fw-bold">{{ reservation.booked_date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-2 d-flex flex-column align-items-center p-3">
      <b-avatar class="mb-3" :src="reservation.user_photo" size="4rem"></b-avatar>

      <div class="text-center">{{ reservation.user_name }}</div>
      <div class="text-center">{{ reservation.user_phone }}</div>
      <div class="text-center">{{ reservation.user_email }}</div>
    </div>

    <div v-if="reservation.status !== 1" class="col-2 d-flex flex-column justify-content-evenly align-items-center p-3">
      <button :disabled="approveBtnDisable" @click="approve(reservation.id, 1)" class="btn btn-info">
        <b-icon icon="check-circle" aria-hidden="true"></b-icon> Approve
      </button>
      <button :disabled="declineBtnDisable" @click="decline(reservation.id, 2)" class="btn btn-outline-danger">
        <b-icon icon="x-circle" aria-hidden="true"></b-icon> Decline
      </button>
    </div>

    <div v-if="reservation.status === 1" class="col-2 d-flex justify-content-center align-items-center p-3">
      <router-link :to="`/dashboard/my-receipt?id=${reservation.id}`" class="receipt">View receipt</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ReservationCard',
  props: ['reservation'],
  methods: {
    approve(id, status) {
      axios
        .put('/bookings/' + id, {
          status: status
        })
        .then(res => {
          if (res.status === 200) this.$toast.success('You have apprroved this reservation successfully')
          this.$emit('statusUpdated')
        })
        .catch(err => {
          const { message } = err.response.data
          console.log(message)
        })
    },
    decline(id, status) {
      axios
        .put('/bookings/' + id, {
          status: status
        })
        .then(res => {
          if (res.status === 200) this.$toast.warning('You have declined this reservation')
          this.$emit('statusUpdated')
        })
        .catch(err => {
          const { message } = err.response.data
          console.log(message)
        })
    }
  },

  computed: {
    approveBtnDisable() {
      return this.reservation.status === 1
    },
    declineBtnDisable() {
      return this.reservation.status === 1 || this.reservation.status === 2
    }
  }
}
</script>

<style lang="scss" scoped>
.reservation-box {
  column-gap: 2rem;

  .reservation-thumbnail {
    width: 300px;
    height: 200px;

    img {
      border-radius: 5px;
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .detail {
    flex: 1;

    .title {
      text-decoration: none;
      color: inherit;
    }

    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .divider {
      width: 50px;
      height: 1px;
      background-color: #cccccc;
    }
  }

  .status {
    .badge {
      font-size: 0.9rem;
    }
  }
}

.receipt {
  color: #ff385c;
  font-weight: 300;

  &:hover {
    color: #e31c5f;
  }
}
</style>
