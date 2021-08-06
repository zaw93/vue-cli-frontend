<template>
  <div>
    <div id="hero-section">
      <section class="hero">
        <div class="absCenter">
          <h1 class="text-white text-center mb-5">Find Best Places To Stay During Your Vacations</h1>
          <!-- <b-button size="lg" variant="light">Explore now</b-button> -->

          <div class="search-area">
            <form @click.prevent="" class="search-form">
              <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 col-xs-6 col-pad">
                  <div class="form-group">
                    <b-form-input v-model="text" placeholder="Enter Keyword"></b-form-input>
                  </div>
                </div>
                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-6 col-pad">
                  <div class="form-group">
                    <b-form-select v-model="selected" :options="types"></b-form-select>
                  </div>
                </div>
                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-6 col-pad">
                  <div class="form-group">
                    <b-form-select v-model="selected" :options="locations"></b-form-select>
                  </div>
                </div>
                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-6 col-pad">
                  <div class="form-group">
                    <b-form-select v-model="selected" :options="bedrooms"></b-form-select>
                  </div>
                </div>
                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-6 col-pad">
                  <div class="form-group">
                    <b-button class="submit" type="submit">Search</b-button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>

    <div id="feature-section" class="container-fluid py-5">
      <div class="text-center mb-5">
        <h2>Featured Places</h2>
        <p>Guests agree: these stays are highly rated for location, cleanliness, and more.</p>
      </div>
      <div class="container">
        <div class="row mb-4">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <PlaceCard />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <PlaceCard />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <PlaceCard />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <PlaceCard />
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <PlaceCard />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <PlaceCard />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <PlaceCard />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <PlaceCard />
          </div>
        </div>
      </div>
    </div>

    <div id="popular-place-section" class="mb-5">
      <PopularPlaces />
    </div>

    <div id="host-section" class="container mb-5">
      <div class="absLeft text-white">
        <h2 class="title">Try hosting</h2>
        <p class="text">
          <span class="d-block">Earn extra income and unlock new</span>
          <span class="d-block">opportunities by sharing your space.</span>
        </p>
        <b-button class="mt-4" size="lg" variant="light">Host now</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceCard from '../components/PlaceCard.vue'
import PopularPlaces from '../components/PopularPlaces.vue'

export default {
  name: 'Home',
  components: {
    PlaceCard,
    PopularPlaces
  },
  data() {
    return {
      text: '',
      selected: null,
      types: [
        { value: null, text: 'Type' },
        { value: 1, text: 'Entire Place' },
        { value: 2, text: 'Private Room' },
        { value: 3, text: 'Shared Room' }
      ],
      locations: [
        { value: null, text: 'Location' },
        { value: 1, text: 'Yangon' },
        { value: 2, text: 'Mandalay' },
        { value: 3, text: 'Bago' },
        { value: 4, text: 'Naypyitaw' }
      ],
      bedrooms: [
        { value: null, text: 'Bed Room' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' }
      ]
    }
  }
}
</script>

<style lang="scss">
#hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('../assets/img/bg-property.jpg');
  background-size: cover;
  background-position: 50% 50%;
}

.navbar-light .navbar-nav .nav-link {
  color: #000 !important;
}

.hero {
  min-height: 80vh;
  position: relative;

  div.absCenter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 3rem;
    }

    .search-area {
      .row {
        --bs-gutter-x: 0;
      }

      .form-group {
        height: 60px;

        .form-control,
        .custom-select,
        .submit {
          height: 100%;
          width: 100%;
          border-radius: 0;
          border: 0.5px solid #ced4da;
        }

        .form-control {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }

        .submit {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
          background-color: #ff385c;

          &:hover,
          &:focus {
            background-color: #e31c5f;
            box-shadow: none;
          }
        }
      }
    }
  }
}

#host-section {
  min-height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('../assets/img/hosting.webp');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;

  .absLeft {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-10%, -50%);

    .title {
      font-size: 3rem;
    }

    .text {
      font-size: 1.3rem;
      line-height: 1.2;
    }
  }
}

#popular-place-section {
  background: #f6f6f6;
}
</style>
