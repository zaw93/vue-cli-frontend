<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  background: #fbfbfb;
  color: #535353;
}
</style>
