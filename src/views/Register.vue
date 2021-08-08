<template>
  <div class="container m-5">
    <h4 class="text-center mb-5">Create An Account</h4>
    <div id="login" class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card mt-0 m-5 p-5 shadow-sm">
          <form @submit.prevent="signup">
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

            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="password" />
            </div>

            <div class="mb-3">
              <label for="password_confirmation" class="form-label">Confirm Password</label>
              <input type="password" v-model="password_confirmation" class="form-control" id="password_confirmation" />
            </div>

            <button type="submit" class="btn btn-submit w-100">Register</button>
          </form>
          <div class="border-top mt-4 pt-4">
            <h6 class="fw-light text-center">
              Already have an account?
              <router-link to="/login" class="login ms-2">Login here</router-link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      phone: '',
      birthdate: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    signup() {
      this.$store
        .dispatch('signup', {
          name: this.name,
          phone: this.phone,
          birthdate: this.birthdate,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(() => this.$router.push({ name: 'Home' }))
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

<style lang="scss" scoped>
#login {
  font-weight: 300;

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

  .login {
    text-decoration: none;
    color: #212529;
  }
}
</style>
