<script>
export default {
  name: "Home",
  beforeUnmount() {
    console.log('beforeUnmount--home');
  },
  unmounted() {
    console.log('unmounted ----home')
  }
}
</script>

<template>
<div class="home">
  <h1>这是home</h1>
</div>
</template>

<style scoped>

</style>