<template>
  <div class="container">
    <h4 class="text-center mt-5">Publish your property</h4>
    <b-card class="m-5 p-3">
      <b-form @submit.prevent="onSubmit">
        <div class="row mb-4">
          <div class="col-md-4 col-sm-12">
            <div class="title">
              <b-form-group label-for="title" label="Title">
                <b-form-input id="title" v-model="title" placeholder="Enter title" required></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="type">
              <b-form-group label-for="type" label="Type of Place">
                <b-form-select id="type" v-model="type" :options="typeOptions"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="price">
              <b-form-group label-for="price" label="Price per night">
                <b-form-input id="price" v-model="price" placeholder="Enter Price" required></b-form-input>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4 col-sm-12">
            <div class="city">
              <b-form-group label-for="city" label="City">
                <b-form-input id="city" v-model="city" placeholder="Enter City" required></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="state">
              <b-form-group label-for="state" label="State">
                <b-form-input id="state" v-model="state" placeholder="Enter State" required></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="country">
              <b-form-group label-for="country" label="Country">
                <b-form-input id="country" v-model="country" disabled required></b-form-input>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-8 col-sm-12">
            <div class="address">
              <b-form-group label-for="address" label="Address">
                <b-form-input id="address" v-model="address" placeholder="Enter Address" required></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="availability">
              <b-form-group label-for="availability" label="Availability">
                <b-form-select id="availability" v-model="availability" :options="availableOptions"></b-form-select>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-3 col-sm-12">
            <div class="guest">
              <b-form-group label-for="guest" label="Guests">
                <b-form-select id="guest" v-model="guest" :options="guestCount"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="bedroom">
              <b-form-group label-for="bedroom" label="Bedrooms">
                <b-form-select id="bedroom" v-model="bedroom" :options="bedroomCount"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="bed">
              <b-form-group label-for="bed" label="Beds">
                <b-form-select id="bed" v-model="bed" :options="bedCount"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="bath">
              <b-form-group label-for="bath" label="Bathrooms">
                <b-form-select id="bath" v-model="bath" :options="bathCount"></b-form-select>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-12">
            <div class="description">
              <b-form-group label-for="description" label="Detail Description">
                <b-form-textarea
                  id="description"
                  v-model="description"
                  placeholder="Enter detail description about your place ..."
                  rows="3"
                ></b-form-textarea>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <label class="mb-2">Amenities</label>
          <div class="col-md-3 col-sm-6">
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="1" id="breakfast" />
              <label class="form-check-label" for="breakfast">Breakfast</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="2" id="kitchen" />
              <label class="form-check-label" for="kitchen">Kitchen</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="3" id="microwave" />
              <label class="form-check-label" for="microwave">Microwave</label>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="4" id="bathtub" />
              <label class="form-check-label" for="bathtub">Bathtub</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="5" id="hairdryer" />
              <label class="form-check-label" for="hairdryer">Hair Dryer</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="6" id="iron" />
              <label class="form-check-label" for="iron">Iron</label>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="7" id="refrigerator" />
              <label class="form-check-label" for="refrigerator">Refrigerator</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="8" id="washer" />
              <label class="form-check-label" for="washer">Washer</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="9" id="aircon" />
              <label class="form-check-label" for="aircon">Air conditioning</label>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="10" id="wifi" />
              <label class="form-check-label" for="wifi">WIFI</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" v-model="amenities" type="checkbox" value="11" id="tv" />
              <label class="form-check-label" for="tv">TV</label>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-12">
            <b-form-group label-for="photos" label="Upload your place photos">
              <b-form-file v-model="photos" placeholder="" id="photos" multiple></b-form-file>
            </b-form-group>
          </div>
        </div>

        <div class="mt-5 mb-3 d-flex justify-content-center">
          <button class="btn btn-submit w-25 btn-lg">Publish</button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Listing',
  data() {
    return {
      title: '',
      price: '',
      city: '',
      state: '',
      country: 'Myanmar',
      address: '',
      availability: 'available',
      availableOptions: [
        { text: 'available', value: 'available' },
        { text: 'booked', value: 'booked' }
      ],
      type: null,
      typeOptions: [
        { text: 'Choose a type', value: null },
        { text: 'Entire place', value: 1 },
        { text: 'Private room', value: 2 },
        { text: 'Shared room', value: 3 }
      ],
      guest: 1,
      guestCount: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: '6', value: 6 },
        { text: '7', value: 7 },
        { text: '8', value: 8 },
        { text: '9', value: 9 },
        { text: '10', value: 10 }
      ],
      bedroom: 1,
      bedroomCount: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 }
      ],
      bed: 1,
      bedCount: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 }
      ],
      bath: 1,
      bathCount: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 }
      ],
      description: '',
      amenities: [],
      photos: []
    }
  },
  methods: {
    onSubmit(event) {
      console.log('form submitted')
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  label {
    margin-bottom: 10px;
  }
}

.type,
.guest,
.bedroom,
.bed,
.bath,
.availability {
  .custom-select {
    display: block;
    width: 100%;
    padding: 0.55rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    // -webkit-appearance: none;
    // -moz-appearance: none;
    // appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
}

.btn-submit {
  background-color: #ff385c;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #e31c5f;
    color: #fff;
    box-shadow: none;
  }
}
</style>
