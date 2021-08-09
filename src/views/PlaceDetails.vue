<template>
  <div>
    <div class="container py-5">
      <h2>{{ place.title }}</h2>
      <div class="rating my-2 d-flex align-items-center fw-light">
        <svg width="15" height="15" fill="#e15a5f" viewBox="0 0 1000 1000">
          <path
            d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
          ></path>
        </svg>
        <span class="ms-1">5.0</span>
        <span class="ms-1">(3 reviews)</span>
        <span class="ms-2">.</span>
        <span class="ms-2">{{ place.city }}, {{ place.state }}</span>
      </div>

      <div class="gallery">
        <div v-for="(photo, index) in place.photos" :key="photo" class="gallery-img" :class="`gallery-img-${index}`">
          <img :src="photo" alt="" />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-7">
          <div class="room-info d-flex justify-content-between align-items-center border-bottom pb-4">
            <div>
              <h4>{{ roomTitleByHost }}</h4>
              <div class="fw-light">
                <span class="me-2">{{ place.guest_count }} guests</span>
                <span class="me-2">.</span>
                <span class="me-2">{{ place.bedroom }} bedrooms</span>
                <span class="me-2">.</span>
                <span class="me-2">{{ place.bed }} beds</span>
                <span class="me-2">.</span>
                <span class="me-2">{{ place.bath }} baths</span>
              </div>
            </div>
            <div>
              <img src="https://ui-avatars.com/api/?name=John+Doe" class="rounded-circle" alt="" />
            </div>
          </div>

          <div class="room-description py-5 border-bottom">
            <h4>About this space</h4>
            <p>
              {{ place.description }}
            </p>
          </div>

          <div class="room-amenities py-5">
            <h4 class="mb-4">What this place offers</h4>
            <div class="row">
              <div class="col-lg-4">
                <div class="d-flex align-items-center mb-3">
                  <svg viewBox="0 0 32 32" class="me-4" style="height: 24px; width: 24px; fill: currentcolor;">
                    <path
                      d="M2 31a1 1 0 0 1-1-1 9 9 0 0 1 17.945-1H21c.736 0 1.428-.265 1.971-.739a2.99 2.99 0 0 0 1.022-2.06L24 26V14H13v6h-2v-7a1 1 0 0 1 .883-.993L12 12h13a1 1 0 0 1 .993.883L26 13v2h4a1 1 0 0 1 .993.883L31 16v9a1 1 0 0 1-.883.993L30 26h-4a4.99 4.99 0 0 1-1.714 3.768 4.982 4.982 0 0 1-3.025 1.225L21 31zm3.85-6.637a7.003 7.003 0 0 0-2.693 4.154l-.058.301-.028.182h4.103zM10 23c-.823 0-1.612.142-2.346.403L9.254 29h1.491l1.6-5.598a6.968 6.968 0 0 0-1.854-.385l-.25-.013zm4.151 1.363L12.825 29h4.103l-.027-.182a6.999 6.999 0 0 0-2.75-4.455zM29 17h-3v7h3zM19.994 1c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183C16.61 8.998 16.198 9.908 16.058 11h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88C17.632 3.6 17.993 2.607 17.994.998zm5 0c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183C21.61 8.998 21.198 9.908 21.058 11h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88C22.632 3.6 22.993 2.607 22.994.998z"
                    ></path>
                  </svg>
                  <span :class="checkBreakfast">Breakfast</span>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <svg
                    viewBox="0 0 32 32"
                    class="me-4"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                  >
                    <path
                      d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"
                    ></path>
                  </svg>
                  <span :class="checkKitchen">Kitchen</span>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <svg
                    viewBox="0 0 32 32"
                    class="me-4"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                  >
                    <path
                      d="M29 3a2 2 0 0 1 1.995 1.85L31 5v22a2 2 0 0 1-1.85 1.995L29 29H3a2 2 0 0 1-1.995-1.85L1 27V5a2 2 0 0 1 1.85-1.995L3 3zm0 2H3v22h26zm-6 2v18H5V7zm-2 2H7v14l3 .001a4.975 4.975 0 0 1-.992-2.721L9 20v-3h10v3a4.978 4.978 0 0 1-1 3.001L21 23zm-4 10h-6v1a3 3 0 0 0 2.65 2.98l.174.015L14 23a3 3 0 0 0 2.995-2.824L17 20zm9-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                  <span :class="checkMicrowave">Microwave</span>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <svg
                    viewBox="0 0 32 32"
                    class="me-4"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                  >
                    <path
                      d="M9.5 2a4.5 4.5 0 0 1 3.527 7.295c.609.215 1.173.55 1.66.988l.191.182L17.414 13H31v2h-2v14a2 2 0 0 1-1.85 1.995L27 31H5a2 2 0 0 1-1.995-1.85L3 29V15H1v-2h2.1a5.009 5.009 0 0 1 2.955-3.608A4.5 4.5 0 0 1 9.5 2zm7.085 13H5v14h22V15h-7.586l3.293 3.294-1.414 1.414zM9.5 4a2.5 2.5 0 0 0-1 4.792V11H8a3.001 3.001 0 0 0-2.83 2h9.415l-1.121-1.121a3 3 0 0 0-1.923-.872L11.343 11H10.5V8.792A2.5 2.5 0 0 0 9.5 4zm15.486-3a6.957 6.957 0 0 1-1.803 4.07l-.445.463A8.971 8.971 0 0 0 20.354 11H18.35a10.975 10.975 0 0 1 3.202-7.118A4.961 4.961 0 0 0 22.974 1zm2.007 0h2.004a10.96 10.96 0 0 1-3.202 7.124A4.974 4.974 0 0 0 24.373 11h-2.012a6.97 6.97 0 0 1 1.804-4.064l.444-.462A8.958 8.958 0 0 0 26.993.999z"
                    ></path>
                  </svg>
                  <span :class="checkBathtub">Bathtub</span>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="d-flex align-items-center mb-3">
                  <svg
                    viewBox="0 0 32 32"
                    class="me-4"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                  >
                    <path
                      d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    ></path>
                  </svg>
                  <span :class="checkHairDryer">Hair dryer</span>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <svg
                    viewBox="0 0 32 32"
                    class="me-4"
                    style="display: block; height: 24px; width: 24px; fill: currentcolor;"
                  >
                    <path
                      d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.027 3l.308.004a12.493 12.493 0 0 1 11.817 9.48l.07.3 1.73 7.782.027.144a2 2 0 0 1-1.83 2.285L28 23H2.247l-.15-.005a2 2 0 0 1-1.844-1.838L.247 21v-7l.004-.217a5 5 0 0 1 4.773-4.778L5.247 9h9V5h-14V3zm11.528 16H2.245l.002 2H28zM16.247 5.002V11h-11l-.177.005a3 3 0 0 0-2.818 2.819L2.247 14l-.001 3H27.11l-.84-3.783-.067-.28a10.494 10.494 0 0 0-9.596-7.921l-.292-.012z"
                    ></path>
                  </svg>
                  <span :class="checkIron">Iron</span>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <svg viewBox="0 0 32 32" class="me-4" style="height: 24px; width: 24px; fill: currentcolor;">
                    <path
                      d="M25 1a2 2 0 0 1 1.995 1.85L27 3v26a2 2 0 0 1-1.85 1.995L25 31H7a2 2 0 0 1-1.995-1.85L5 29V3a2 2 0 0 1 1.85-1.995L7 1zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                  <span :class="checkRefrigerator">Refrigerator</span>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <svg viewBox="0 0 32 32" class="me-4" style="height: 24px; width: 24px; fill: currentcolor;">
                    <path
                      d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm0 2H4v24h24zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-5.841 7.5c-.342 0-.68.024-1.014.073a7 7 0 0 0 13.107 4.58 8.976 8.976 0 0 1-6.91-2.374l-.236-.23a6.966 6.966 0 0 0-4.947-2.049zM16 9a6.997 6.997 0 0 0-6.066 3.504l.225-.004c2.262 0 4.444.844 6.124 2.407l.237.229a6.979 6.979 0 0 0 4.948 2.05c.493 0 .98-.05 1.456-.151A7 7 0 0 0 16 9zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                  <span :class="checkWasher">Washer</span>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="d-flex align-items-center mb-3">
                  <svg viewBox="0 0 32 32" class="me-4" style="height: 24px; width: 24px; fill: currentcolor;">
                    <path
                      d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"
                    ></path>
                  </svg>
                  <span :class="checkAircon">Air conditioning</span>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <svg viewBox="0 0 32 32" class="me-4" style="height: 24px; width: 24px; fill: currentcolor;">
                    <path
                      d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"
                    ></path>
                  </svg>
                  <span :class="checkWifi">Wifi</span>
                </div>

                <div class="d-flex align-items-center mb-3">
                  <svg viewBox="0 0 32 32" class="me-4" style="height: 24px; width: 24px; fill: currentcolor;">
                    <path
                      d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
                    ></path>
                  </svg>
                  <span :class="checkTv">TV</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BookCard :place-id="place.id" :guest-count="place.guest_count" :price="place.price" />
      </div>

      <div class="reviews border-top">
        <div class="mt-5 d-flex align-items-center fw-light">
          <svg width="20" height="20" fill="#e15a5f" viewBox="0 0 1000 1000">
            <path
              d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
            ></path>
          </svg>
          <span class="ms-2 fs-5">5.0</span>
          <span class="ms-2 fw-bold">.</span>
          <span class="ms-2 fs-5">(3 reviews)</span>
        </div>

        <div class="row">
          <div class="col-md-6 col-sm-12 mt-4">
            <ReviewCard />
          </div>

          <div class="col-md-6 col-sm-12 mt-4">
            <ReviewCard />
          </div>

          <div class="col-md-6 col-sm-12 mt-4">
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '../components/Detail/BookCard.vue'
import ReviewCard from '../components/Detail/ReviewCard.vue'

export default {
  name: 'PlaceDetails',
  props: ['id'],
  components: { BookCard, ReviewCard },
  data() {
    return {
      place: {}
    }
  },
  computed: {
    roomTitleByHost() {
      if (this.place.type === 'entire_place') {
        return `Entire rental place hosted by ${this.place.user.name}`
      } else if (this.place.type === 'private_room') {
        return `Private room hosted by ${this.place.user.name}`
      } else if (this.place.type === 'shared_room') {
        return `Shared room hosted by ${this.place.user.name}`
      }
    },
    checkBreakfast() {
      if (this.place.amenities && !this.place.amenities.includes('Breakfast')) return 'text-decoration-line-through'
    },
    checkKitchen() {
      if (this.place.amenities && !this.place.amenities.includes('Kitchen')) return 'text-decoration-line-through'
    },
    checkMicrowave() {
      if (this.place.amenities && !this.place.amenities.includes('Microwave')) return 'text-decoration-line-through'
    },
    checkBathtub() {
      if (this.place.amenities && !this.place.amenities.includes('Bathtub')) return 'text-decoration-line-through'
    },
    checkHairDryer() {
      if (this.place.amenities && !this.place.amenities.includes('Hair dryer')) return 'text-decoration-line-through'
    },
    checkIron() {
      if (this.place.amenities && !this.place.amenities.includes('Iron')) return 'text-decoration-line-through'
    },
    checkRefrigerator() {
      if (this.place.amenities && !this.place.amenities.includes('Refrigerator')) return 'text-decoration-line-through'
    },
    checkWasher() {
      if (this.place.amenities && !this.place.amenities.includes('Washer')) return 'text-decoration-line-through'
    },
    checkAircon() {
      if (this.place.amenities && !this.place.amenities.includes('Air conditioning'))
        return 'text-decoration-line-through'
    },
    checkWifi() {
      if (this.place.amenities && !this.place.amenities.includes('WIFI')) return 'text-decoration-line-through'
    },
    checkTv() {
      if (this.place.amenities && !this.place.amenities.includes('TV')) return 'text-decoration-line-through'
    }
  },
  created() {
    this.$store
      .dispatch('places/getPlaceDetail', this.id)
      .then(() => {
        this.place = this.$store.getters['places/place']
      })
      .catch(err => {
        if (err.response) {
          const { message } = err.response.data
          console.log(message)
        }
      })
  }
}
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 250px 250px;
  grid-gap: 10px;

  .gallery-img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .gallery-img-1 {
    grid-column: 1 / 3;
    grid-row: 1 / -1;
  }
}

.room-description {
  p {
    line-height: 1.6;
    font-weight: 300;
  }
}
</style>
