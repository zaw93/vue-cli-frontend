<template>
  <div id="host-section" class="container mb-5">
    <div class="absLeft text-white">
      <h2 class="title">Try hosting</h2>
      <p class="text">
        <span class="d-block">Earn extra income and unlock new</span>
        <span class="d-block">opportunities by sharing your space.</span>
      </p>
      <b-button class="mt-4" size="lg" variant="light">Host now</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HostSection'
}
</script>

<style lang="scss" scoped>
#host-section {
  min-height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('../../assets/img/hosting.webp');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;

  .absLeft {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-10%, -50%);

    .title {
      font-size: 3rem;
    }

    .text {
      font-size: 1.3rem;
      line-height: 1.2;
    }
  }
}
</style>
