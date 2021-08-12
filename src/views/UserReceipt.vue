<template>
  <div class="container p-5">
    <b-card class="mt-4 p-3 rounded-3">
      <div class="d-flex justify-content-between">
        <h3>Customer Receipt</h3>
        <button class="btn btn-print">Print Receipt</button>
      </div>

      <div class="mt-5">
        <div class="d-flex justify-content-between">
          <div>
            <div class="fw-light">Confirmation Code</div>
            <div class="fw-bold">#{{ receipt.confirmation_code }}</div>
          </div>
          <div>
            <div class="fw-light">Reservation Date</div>
            <div class="fw-bold">{{ receipt.booked_date }}</div>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="row receipt-info">
        <div class="col-md-3">
          <h6>Name</h6>
          <p>{{ receipt.user_name }}</p>
        </div>
        <div class="col-md-3">
          <h6>Travel Destination</h6>
          <p>{{ receipt.place_city }}, {{ receipt.place_state }}</p>
        </div>
        <div class="col-md-3">
          <h6>Duration</h6>
          <p>{{ duration }} nights</p>
        </div>
        <div class="col-md-3">
          <h6>Accommodation Type</h6>
          <p>{{ accommodationType }}</p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="row receipt-address">
        <div class="col-md-3">
          <h6>Accommodation Address</h6>
          <p>{{ receipt.place_address }}</p>
        </div>
        <div class="col-md-3">
          <h6>Accommodation Host</h6>
          <p>{{ receipt.host_name }}</p>
        </div>
        <div class="col-md-3">
          <h6>Check In</h6>
          <p>{{ receipt.checkin }}<span>2PM</span></p>
        </div>
        <div class="col-md-3">
          <h6>Check Out</h6>
          <p>{{ receipt.checkout }}<span>10AM</span></p>
        </div>
      </div>

      <div class="divider"></div>

      <h4 class="fw-normal mt-4 mb-3">Reservation Charges</h4>

      <table class="table table-bordered">
        <tbody>
          <tr>
            <td>{{ pricePerNight }} Ks x {{ duration }} nights</td>
            <td>{{ subTotal }} Ks</td>
          </tr>
          <tr>
            <td>Cleaning Fee</td>
            <td>5,000 Ks</td>
          </tr>
          <tr>
            <td>Service Fee</td>
            <td>10,000 Ks</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{{ total }} Ks</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-bordered">
        <tbody>
          <tr>
            <td>Payment Received: Tue, Aug 10th, 2021</td>
            <td>{{ total }} Ks</td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      receipt: {}
    }
  },

  computed: {
    pricePerNight() {
      if (this.receipt.place_price) return this.receipt.place_price.toLocaleString()
    },

    subTotal() {
      if (this.receipt.place_price) {
        let sub = this.receipt.place_price * this.duration
        return sub.toLocaleString()
      }
    },

    total() {
      if (this.receipt.total_price) return this.receipt.total_price.toLocaleString()
    },

    duration() {
      if (this.receipt.checkin && this.receipt.checkout) {
        let date1, date2, diffInTime
        date1 = new Date(this.receipt.checkin)
        date2 = new Date(this.receipt.checkout)
        diffInTime = date2.getTime() - date1.getTime()
        return diffInTime / (24 * 3600 * 1000)
      }
    },

    accommodationType() {
      if (this.receipt.place_type) {
        const arr = this.receipt.place_type.split('_')

        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }

        return arr.join(' ')
      }
    }
  },

  created() {
    let id = this.$route.query.id

    axios
      .get('/bookings/' + id)
      .then(res => {
        if (res.status === 200) {
          this.receipt = res.data.data
        }
      })
      .catch(err => console.log(err))
  }
}
</script>

<style lang="scss" scoped>
.btn-print {
  border: 1px solid #ff385c;
  color: #ff385c;

  &:hover,
  &:focus {
    background-color: #e31c5f;
    color: #fff;
    box-shadow: none;
  }
}

table {
  table-layout: fixed;
}

.receipt-info,
.receipt-address {
  p {
    line-height: 1;
    font-weight: 300;

    span {
      display: block;
      margin-top: 0.5rem;
    }
  }
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #cccccc;
  margin: 1.5rem 0 1rem;
}
</style>
