<script>
export default {
  name: "HomeBanner",
  inject:["name","age","message"]
}
</script>

<template>
  <div class="banner">
    <h1>homeBanner:bb</h1>
    <h2>{{name}}---{{age}}----{{message}}</h2>
  </div>
</template>

<style scoped>

</style>