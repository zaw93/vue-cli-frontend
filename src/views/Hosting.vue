<template>
  <div class="container p-5">
    <h4 class="text-center fw-light mb-5">Hi, {{ username }}! Let's get you ready to become a host.</h4>

    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <b-card class="my-3 px-5 py-2 shadow-sm">
          <form-wizard
            @on-complete="publish"
            title="Enter your place informations correctly"
            subtitle=""
            step-size="sm"
            color="#ff385c"
            finish-button-text="Publish"
          >
            <!-- First Step  -->
            <tab-content class="mt-4" title="Your place info">
              <!-- First Row  -->
              <div class="row mb-5">
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

              <!-- Second Row  -->
              <div class="row mb-5">
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
            </tab-content>

            <!-- Second Step -->
            <tab-content class="mt-4" title="Your place details">
              <!-- First Row  -->
              <div class="row mb-5">
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
                      <b-form-select
                        id="availability"
                        v-model="availability"
                        :options="availableOptions"
                        disabled
                      ></b-form-select>
                    </b-form-group>
                  </div>
                </div>
              </div>

              <!-- Second Row  -->
              <div class="row mb-5">
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
            </tab-content>

            <!-- Third Step -->
            <tab-content class="mt-4" title="What your place offers">
              <!-- First Row  -->
              <div class="row mb-5">
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

              <!-- Second Row  -->
              <div class="row mb-5">
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
            </tab-content>

            <!-- Final Step -->
            <tab-content class="mt-4" title="Upload your photos">
              <div class="row mb-4">
                <div class="col-12">
                  <vue-dropzone
                    ref="myVueDropzone"
                    id="dropzone"
                    :options="dropzoneOptions"
                    @vdropzone-success-multiple="uploadSuccess"
                    @vdropzone-error="uploadError"
                    @vdropzone-sending="sendFormData"
                  ></vue-dropzone>
                </div>
              </div>
            </tab-content>
          </form-wizard>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'Hosting',
  components: {
    FormWizard,
    TabContent,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'http://localhost:8000/api/places',
        paramName: 'photos',
        uploadMultiple: true,
        parallelUploads: 5,
        autoProcessQueue: false,
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        addRemoveLinks: true,
        maxFilesize: 1,
        maxFiles: 5,
        acceptedFiles: '.jpg, .jpeg, .png, .webp',
        dictDefaultMessage: "Drag n' Drop your place photos here to upload",
        headers: { Authorization: 'Bearer ' + this.$store.getters.token }
      },

      title: '',
      type: null,
      typeOptions: [
        { text: 'Choose a type', value: null },
        { text: 'Entire place', value: 1 },
        { text: 'Private room', value: 2 },
        { text: 'Shared room', value: 3 }
      ],
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
    publish() {
      this.$refs.myVueDropzone.processQueue()
    },

    sendFormData(files, xhr, formData) {
      formData.append('title', this.title)
      formData.append('price', this.price)
      formData.append('city', this.city)
      formData.append('state', this.state)
      formData.append('country', this.country)
      formData.append('address', this.address)
      formData.append('availability', this.availability)
      formData.append('user_id', this.$store.getters.user.id)
      formData.append('type_id', this.type)
      formData.append('guest_count', this.guest)
      formData.append('bedroom', this.bedroom)
      formData.append('bed', this.bed)
      formData.append('bath', this.bath)
      formData.append('description', this.description)
      formData.append('amenities', JSON.stringify(this.amenities))
    },

    uploadSuccess(files, response) {
      this.$store.commit('places/setPlaceDetail', response)
      this.$toast.success('Your listing has published successfully', { timeout: 3000 })
      setTimeout(() => {
        this.$router.push({ name: 'UserListings' })
      }, 3000)
    },

    uploadError(file, err, xhr) {
      const { message } = err
      this.$toast.error(message)
    }
  },
  computed: {
    username() {
      return this.$store.getters.user.name
    }
  }
}
</script>

<style lang="scss">
.form-group {
  label {
    margin-bottom: 10px !important;
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

    &[disabled='disabled'] {
      background-color: #e9ecef;
    }
  }
}

.vue-dropzone {
  border: 2px dashed #e5e5e5;
}
</style>
