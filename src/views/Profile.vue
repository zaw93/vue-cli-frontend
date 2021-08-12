<template>
  <div class="container mt-5 p-5">
    <div class="row">
      <div class="col-lg-4 px-5">
        <div class="d-flex flex-column align-items-center border rounded-3">
          <ProfileUpload @selected="handleUpload" :profile-image="profileImage" />

          <div class="divider my-4"></div>

          <div class="identify text-left">
            <b-icon icon="check2-square"></b-icon>
            <h5 class="fw-normal mt-3">Identity verification</h5>
            <p class="fw-light">Show others you’re really you with the identity verification badge.</p>
            <b-button variant="outline-dark" class="">Get the badge</b-button>
          </div>

          <div class="divider my-4"></div>

          <div class="confirm mb-5">
            <h4 class="fw-normal mb-3">{{ name }} Confirmed</h4>
            <div v-if="phone" class="d-flex align-items-center">
              <b-icon icon="check2" font-scale="1.5"></b-icon>
              <span class="fw-light ms-2">Phone number</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8 px-5">
        <h3 class="fw-light">Profile Details</h3>
        <p class="joined fw-light">Joined on 2021</p>

        <form @submit.prevent="updateProfile">
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" v-model="name" class="form-control" id="name" />
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">Your Phone</label>
            <div class="input-group">
              <span class="input-group-text">+95</span>
              <input type="text" v-model="phone" id="phone" class="form-control" />
            </div>
          </div>

          <div class="mb-3">
            <label for="birthdate" class="form-label">Your Birthdate</label>
            <b-form-datepicker
              id="birthdate"
              placeholder="DD-MM-YYYY"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              v-model="birthdate"
              class="mb-2"
            ></b-form-datepicker>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" v-model="email" class="form-control" id="email" />
          </div>

          <b-button type="submit" variant="dark" class="mt-3">Send Changes</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileUpload from '../components/UI/ProfileUpload.vue'

export default {
  components: { ProfileUpload },
  data() {
    return {
      name: '',
      phone: '',
      birthdate: '',
      email: '',
      file: null
    }
  },
  computed: {
    profileImage() {
      if (this.$store.getters.user) {
        return this.$store.getters.user.photo
      }
      return ''
    }
  },

  created() {
    const user = this.$store.getters.user

    this.setInputProfile(user)
  },

  methods: {
    handleUpload(files) {
      this.file = files[0]

      let data = new FormData()
      if (this.file) {
        data.append('photo', this.file)

        this.$store.dispatch('updateProfilePhoto', data).then(() => {
          this.$toast.success('You have successfully updated your profile photo')
        })
      }
    },

    updateProfile() {
      this.$store
        .dispatch('updateProfile', {
          name: this.name,
          phone: this.phone,
          birthdate: this.birthdate,
          email: this.email
        })
        .then(() => {
          this.$toast.success('You have successfully updated your profile information')

          const user = this.$store.getters.user

          this.setInputProfile(user)
        })
        .catch(err => {
          if (err.respones) {
            const { message } = err.respones.message
            this.$toast.error(message)
          }
        })
    },

    setInputProfile(user) {
      if (user) {
        this.name = user.name
        this.phone = user.phone
        this.birthdate = user.birthdate
        this.email = user.email
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .divider {
    width: 80%;
    height: 1px;
    background-color: #cccccc;
  }

  .identify,
  .confirm {
    width: 80%;
  }

  .joined {
    color: #7e7e7e;
  }
}
</style>
