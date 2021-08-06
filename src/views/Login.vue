<template>
  <div class="container m-5">
    <h4 class="text-center mb-5">Log Into Your Account</h4>
    <div id="login" class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card mt-0 m-5 p-5 shadow-sm">
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" v-model="email" class="form-control" id="email" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="password" />
            </div>
            <div class="mb-3 form-check d-flex align-items-center justify-content-between">
              <div>
                <input type="checkbox" v-model="remember" class="form-check-input" id="remember" />
                <label class="form-check-label" for="remember">Remember me</label>
              </div>
              <div>
                <a href="#" class="forgot">Forgot Password</a>
              </div>
            </div>
            <button class="btn btn-submit w-100">Login</button>
          </form>
          <div class="border-top mt-4 pt-4">
            <h6 class="fw-light text-center">
              Don't have an account?
              <a href="#" class="register ms-2">Register here</a>
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
      email: '',
      password: '',
      remember: null
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

  .forgot,
  .register {
    text-decoration: none;
    color: #212529;
  }
}
</style>
