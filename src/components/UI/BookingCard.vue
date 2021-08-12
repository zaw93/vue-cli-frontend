<template>
  <div class="row">
    <div class="col-7">
      <div class="booking-box d-flex">
        <div class="booking-thumbnail">
          <router-link :to="/places/ + booking.place_id">
            <img :src="booking.place_photo" alt="property-box" />
          </router-link>
        </div>

        <div class="detail fw-light pe-3">
          <div class="detail-info">
            <router-link :to="/places/ + booking.place_id" class="title">
              <div class="mb-1 fw-normal">{{ booking.place_title }}</div>
            </router-link>
            <div class="location mb-2">{{ booking.place_city }}, {{ booking.place_state }}</div>
            <div class="divider mb-2"></div>
          </div>

          <div class="duration mb-3">
            <b-icon icon="calendar2-check-fill"></b-icon>
            <span class="mx-2">{{ booking.checkin }}</span>
            <span>→</span>
            <span class="mx-2">{{ booking.checkout }}</span>
          </div>

          <div class="d-flex justify-content-between mb-3">
            <div class="guest">
              <b-icon icon="people-fill"> </b-icon>
              <span class="ms-2 fw-bold">{{ booking.guest_count }}</span>
            </div>

            <div class="price fw-bold">{{ booking.total_price.toLocaleString() }} Ks</div>
          </div>

          <div class="d-flex justify-content-between">
            <div class="status">
              <span v-if="booking.status === 0" class="badge bg-warning">Pending</span>
              <span v-if="booking.status === 1" class="badge bg-success">Approved</span>
              <span v-if="booking.status === 2" class="badge bg-danger">Declined</span>
            </div>

            <router-link v-if="booking.status === 1" :to="`/dashboard/my-receipt?id=${booking.id}`" class="receipt"
              >View receipt</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="col-2 d-flex align-items-center justify-content-center">
      <div>{{ booking.booked_date }}</div>
    </div>

    <div class="col-3 d-flex flex-column align-items-center">
      <b-avatar class="mb-3" :src="booking.host_photo" size="4rem"></b-avatar>

      <div class="text-center">{{ booking.host_name }}</div>
      <div class="text-center">{{ booking.host_phone }}</div>
      <div class="text-center">{{ booking.host_email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingCard',
  props: ['booking']
}
</script>

<style lang="scss" scoped>
.booking-box {
  column-gap: 2rem;

  .booking-thumbnail {
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

  .receipt {
    color: #ff385c;
    font-weight: 300;

    &:hover {
      color: #e31c5f;
    }
  }
}
</style>
