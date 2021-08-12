<template>
  <div class="container m-5 p-5">
    <button @click="submit" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  methods: {
    submit() {
      this.$toast.success('success toast')
    }
  }
}
</script>
