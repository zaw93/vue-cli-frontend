<template>
  <div class="p-5 pt-0 mx-5">
    <b-card>
      <h4 class="text-center mb-4">Filters</h4>

      <div class="mx-3">
        <div>
          <b-form-group label-for="types" label="Type of Place" label-size="lg" class="border-bottom pb-3">
            <b-form-checkbox-group id="types" v-model="types" :options="typeOptions"></b-form-checkbox-group>
          </b-form-group>
        </div>

        <div class="location border-bottom py-3">
          <b-form-group label-for="city" label="Location" label-size="lg">
            <b-form-select id="city" v-model="city" :options="cityOptions"></b-form-select>
          </b-form-group>
        </div>

        <div class="rooms border-bottom py-3">
          <label class="rooms-label">Rooms and beds</label>
          <b-form-group label-for="bedroom" label="Bedrooms" class="pb-3">
            <b-form-spinbutton id="bedroom" v-model="bedroom" min="1" max="5" inline></b-form-spinbutton>
          </b-form-group>
          <b-form-group label-for="bed" label="Beds" class="pb-3">
            <b-form-spinbutton id="bed" v-model="bed" min="1" max="5" inline></b-form-spinbutton>
          </b-form-group>
          <b-form-group label-for="bath" label="Bathrooms" class="pb-3">
            <b-form-spinbutton id="bath" v-model="bath" min="1" max="5" inline></b-form-spinbutton>
          </b-form-group>
          <b-form-group label-for="guest" label="Guests" class="pb-3">
            <b-form-spinbutton id="guest" v-model="guest" min="1" max="10" inline></b-form-spinbutton>
          </b-form-group>
        </div>

        <div>
          <b-form-group label-for="amenities" label="Amenities" label-size="lg" class="border-bottom py-3">
            <b-form-checkbox-group id="amenities" v-model="amenities" :options="amenityOptions"></b-form-checkbox-group>
          </b-form-group>
        </div>

        <b-button @click="filterSearch" variant="dark" class="w-100 my-3">Show results</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [], // Must be an array reference!
      typeOptions: [
        { text: 'Entire place', value: 1 },
        { text: 'Private room', value: 2 },
        { text: 'Shared room', value: 3 }
      ],
      city: null,
      cityOptions: [
        { value: null, text: 'Choose a city' },
        { value: 'Yangon', text: 'Yangon' },
        { value: 'Bago', text: 'Bago' },
        { value: 'Mandalay', text: 'Mandalay' },
        { value: 'Monywa', text: 'Monywa' },
        { value: 'Taunggyi', text: 'Taunggyi' },
        { value: 'Naypyitaw', text: 'Naypyitaw' }
      ],
      amenities: [],
      amenityOptions: [
        { text: 'Breakfast', value: 1 },
        { text: 'Kitchen', value: 2 },
        { text: 'Microwave', value: 3 },
        { text: 'Bathtub', value: 4 },
        { text: 'Hair dryer', value: 5 },
        { text: 'Iron', value: 6 },
        { text: 'Refrigerator', value: 7 },
        { text: 'Washer', value: 8 },
        { text: 'Air conditioning', value: 9 },
        { text: 'Wifi', value: 10 },
        { text: 'TV', value: 11 }
      ],
      bedroom: 1,
      bed: 1,
      bath: 1,
      guest: 1
    }
  },
  methods: {
    filterSearch() {
      let query = {
        types: this.types,
        city: this.city,
        bedroom: this.bedroom,
        bed: this.bed,
        bath: this.bath,
        guest: this.guest,
        amenities: this.amenities
      }

      this.$router.push({ path: '/places', query: query })

      this.$emit('filterSearch', query)
    }
  }
}
</script>

<style lang="scss">
#types,
#amenities {
  .custom-checkbox {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding-bottom: 10px;
  }
}

.location {
  .custom-select {
    width: 100%;
    min-height: 35px;
    padding: 5px;
    background-color: #fdfdfd;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
}

.rooms {
  .rooms-label {
    font-size: 1.25rem;
    padding: 10px 0;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
}
</style>
