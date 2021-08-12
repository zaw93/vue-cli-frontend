<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 cold-sm-12">
          <div v-for="place in places.data" :key="place.id" class="py-3 border-bottom">
            <PlaceCardHorizontal :place="place" />
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

        <!-- Advanced Search  -->
        <div class="col-md-6 col-sm-12">
          <AdvanceSearch @filterSearch="fetchSearchResults" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceCardHorizontal from '../components/UI/PlaceCardHorizontal.vue'
import AdvanceSearch from '../components/UI/AdvanceSearch.vue'

export default {
  name: 'Places',
  components: { PlaceCardHorizontal, AdvanceSearch },
  data() {
    return {
      places: {},
      lastPage: 1
    }
  },

  methods: {
    linkGen(pageNum) {
      return {
        path: '/places',
        query: { page: pageNum }
      }
    },

    fetchSearchResults(query) {
      // let curPage = this.$route.query.page ? this.$route.query.page : 1
      // this.$store
      //   .dispatch('places/getSearchPlaces', query)
      //   .then(() => {
      //     this.places = this.$store.getters['places/places']
      //     this.lastPage = this.$store.getters['places/places'].meta.last_page
      //   })
      //   .catch(err => {
      //     if (err.response) {
      //       const { message } = err.response.data
      //       console.log(message)
      //     }
      //   })
    }
  },

  created() {
    let curPage = this.$route.query.page ? this.$route.query.page : 1

    this.$store
      .dispatch('places/getAllPlaces', curPage)
      .then(() => {
        this.places = this.$store.getters['places/places']
        this.lastPage = this.$store.getters['places/places'].meta.last_page
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
        .dispatch('places/getAllPlaces', to.query.page)
        .then(() => {
          this.places = this.$store.getters['places/places']
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

<style lang="scss">
#pagination {
  .b-pagination-pills {
    gap: 8px;

    .page-item {
      .page-link {
        width: 35px;
        height: 35px;
        border-radius: 50% !important;
        color: #212529;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;

        &:focus {
          box-shadow: none;
        }
      }
    }

    .page-item.active {
      .page-link {
        background-color: #212529;
        border: none;
        color: #fff;

        &:focus {
          box-shadow: none;
        }
      }
    }
  }
}
</style>
