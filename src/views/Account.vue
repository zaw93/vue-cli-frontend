<template>
  <div class="container mt-5 p-5">
    <div class="row">
      <div class="col-md-8 px-5">
        <h3 class="fw-normal mb-5">Login & Security</h3>
        <div class="alert alert-info d-flex" role="alert">
          <b-icon icon="exclamation-circle" font-scale="1.5" class="mt-2"></b-icon>
          <div class="ms-3">
            <div>After successful password update, you will be automatically logout.</div>
            <div>Please login again with your updated password.</div>
          </div>
        </div>

        <form @submit.prevent="updatePassword" class="mt-5">
          <div class="mb-3">
            <label for="password" class="form-label">Current Password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="************" />
          </div>

          <div class="mb-3">
            <label for="newpassword" class="form-label">New Password</label>
            <input type="password" v-model="new_password" class="form-control" id="newpassword" />
          </div>

          <div class="mb-3">
            <label for="newpassword_confirmation" class="form-label">Confirm Password</label>
            <input
              type="password"
              v-model="new_password_confirmation"
              class="form-control"
              id="newpassword_confirmation"
            />
          </div>

          <b-button type="submit" variant="dark" class="mt-3 py-2">Update password</b-button>
        </form>
      </div>

      <div class="col-lg-4 px-5">
        <div class="border rounded-3 py-4 px-3">
          <b-icon icon="shield-check" font-scale="2"></b-icon>
          <h5 class="mt-4">Let's make your account more secure</h5>
          <p class="fw-bold mt-3">Your account security: <span>Low</span></p>
          <p class="fw-light">
            We’re always working on ways to increase safety in our community. That’s why we look at every account to
            make sure it’s as secure as possible.
          </p>

          <div class="divider mt-4"></div>

          <b-button variant="dark" class="mt-4 py-2">Improve</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      new_password: '',
      new_password_confirmation: ''
    }
  },

  methods: {
    updatePassword() {
      if (this.password === '' || this.new_password === '' || this.new_password_confirmation === '') {
        return this.$toast.error('Your must enter all input fields')
      }

      if (this.password === this.new_password) {
        return this.$toast.error('Your current password and new password must be different')
      }

      if (this.new_password !== this.new_password_confirmation) {
        return this.$toast.error('Your confirm password does not match')
      }

      this.$store
        .dispatch('updatePassword', {
          password: this.password,
          new_password: this.new_password,
          new_password_confirmation: this.new_password_confirmation
        })
        .then(res => {
          if (res.status === 200) {
            const { message } = res.data
            this.$toast.success(message, { timeout: 3000 })
            setTimeout(() => {
              this.$store.dispatch('autoLogout')
            }, 3500)
          }
        })
        .catch(err => {
          if (err) this.$toast.error('Your current password is invalid')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  span {
    color: #7e7e7e;
  }

  .divider {
    width: 5rem;
    height: 1px;
    background-color: #cccccc;
  }
}
</style>
