<template>
  <div class="book-card col-md-5 align-self-center px-5">
    <b-card class="shadow-sm">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <div><span class="fs-5">$45</span> <span class="fw-light">/ night</span></div>
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
              v-model="checkin"
              :min="min"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              locale="en"
              placeholder="Pick a date"
            ></b-form-datepicker>
          </b-form-group>
        </b-card>
        <b-card class="flex-fill">
          <b-form-group label="CHECK-OUT" label-for="check-out" label-align="center">
            <b-form-datepicker
              id="check-out"
              v-model="checkout"
              :min="min"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              locale="en"
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

      <button class="btn btn-reserve w-100 btn-lg">Reserve</button>

      <div class="mt-3">
        <div class="d-flex justify-content-between mb-2 fw-light">
          <div>$45 x 5 nights</div>
          <div>$225</div>
        </div>
        <div class="d-flex justify-content-between mb-2 fw-light">
          <div>Cleaning fee</div>
          <div>$20</div>
        </div>
        <div class="d-flex justify-content-between mb-3 fw-light">
          <div>Service fee</div>
          <div>$30</div>
        </div>
        <div class="d-flex justify-content-between pt-3 mb-3 fw-bold border-top">
          <div>Total</div>
          <div>$275</div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['guestCount'],
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)

    return {
      checkin: '',
      checkout: '',
      guest: 1,
      min: minDate
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
  }
}
</style>
