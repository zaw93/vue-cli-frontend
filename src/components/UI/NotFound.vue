<template>
  <div class="container p-5 m-5">
    <div class="row mx-5">
      <div class="notfound col-md-6">
        <h1>Oops!</h1>
        <h3>We can't seem to find the page you're looking for.</h3>
        <p>Error code: 404</p>
        <router-link :to="{ name: 'Home' }">
          <button class="btn btn-outline-secondary">Return to home</button>
        </router-link>
      </div>
      <div class="col-md-6 mt-sm-5 mt-md-0">
        <img src="@/assets/img/404.gif" alt="404" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notfound {
  flex: 1;

  h1 {
    font-size: 8rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2.3rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  p {
    color: #767676;
    margin-bottom: 2rem;
  }
}
</style>
