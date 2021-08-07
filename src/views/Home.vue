<template>
  <div>
    <HeroSection />

    <FeatureSection />

    <PopularPlaceSection />

    <HostSection />
  </div>
</template>

<script>
import HeroSection from '../components/Home/HeroSection.vue'
import FeatureSection from '../components/Home/FeatureSection.vue'
import PopularPlaceSection from '../components/Home/PopularPlaceSection.vue'
import HostSection from '../components/Home/HostSection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    FeatureSection,
    PopularPlaceSection,
    HostSection
  }
}
</script>

<style lang="scss"></style>
