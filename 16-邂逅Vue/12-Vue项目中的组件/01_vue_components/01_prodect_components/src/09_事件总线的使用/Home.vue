<script>
import HomeBanner from "./HomeBanner.vue";
import eventBus from "./utils/event-bus";
export default {
  name: "Home",
  components: {HomeBanner},
  created() {
    eventBus.on("cyEvent", (name,age,height)=>{
      console.log("11",name,age,height);
    });
  }
}
</script>

<template>
  <div class="home">
    <home-banner></home-banner>
    <h1>这是Home</h1>

  </div>
</template>

<style scoped>

</style>