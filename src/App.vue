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
  components: { Header, Footer },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout
    }
  },
  created() {
    this.$store.dispatch('tryLogin')
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue !== oldValue) {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  background: #fbfbfb;
  color: #535353;
}
</style>
