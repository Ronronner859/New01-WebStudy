<script>
export default {
  name: "Home",
  // methods:{
  //   showHomeFoo(){
  //     console.log('111')
  //   }
  // }
  setup(){
    function showHomeFoo(){
      console.log('111')
    }

    return {
      showHomeFoo
    }
  }
}
</script>

<template>
<div class="home">
  <h2>home</h2>

</div>
</template>

<style scoped>

</style>