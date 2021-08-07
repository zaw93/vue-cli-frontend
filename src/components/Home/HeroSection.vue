<template>
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
                  <b-form-input v-model="keyword" placeholder="Enter Keyword"></b-form-input>
                </div>
              </div>
              <div class="col-lg-2 col-md-12 col-sm-12 col-xs-6 col-pad">
                <div class="form-group">
                  <b-form-select v-model="type" :options="types"></b-form-select>
                </div>
              </div>
              <div class="col-lg-2 col-md-12 col-sm-12 col-xs-6 col-pad">
                <div class="form-group">
                  <b-form-select v-model="location" :options="locations"></b-form-select>
                </div>
              </div>
              <div class="col-lg-2 col-md-12 col-sm-12 col-xs-6 col-pad">
                <div class="form-group">
                  <b-form-select v-model="bedroom" :options="bedrooms"></b-form-select>
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
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      keyword: '',
      type: null,
      types: [
        { value: null, text: 'Type' },
        { value: 1, text: 'Entire Place' },
        { value: 2, text: 'Private Room' },
        { value: 3, text: 'Shared Room' }
      ],
      location: null,
      locations: [
        { value: null, text: 'Location' },
        { value: 1, text: 'Yangon' },
        { value: 2, text: 'Mandalay' },
        { value: 3, text: 'Bago' },
        { value: 4, text: 'Naypyitaw' }
      ],
      bedroom: null,
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

<style lang="scss" scoped>
#hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('../../assets/img/bg-property.jpg');
  background-size: cover;
  background-position: 50% 50%;
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
</style>
