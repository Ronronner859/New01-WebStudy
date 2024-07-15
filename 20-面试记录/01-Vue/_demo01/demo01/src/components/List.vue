<script>

export default {
  name: "List",
  beforeCreate() {
    console.log("子为；",'beforeCreate');
  },
  created(){
    console.log("子为；",'create')
  },
  beforeMount(){
    console.log("子为；",'beforeMount');
  },
  mounted(){
    console.log("子为；",'mounted')
  },
  beforeUpdate() {
    console.log("子为；",'beforeUpdate');
  },
  updated() {
    console.log("子为；",'updated')
  },
  beforeDestroy() {
    console.log("子为；",'beforeDestroy');
  },
  destroyed() {
    console.log("子为；",'destroyed')
  },
}
</script>

<template>
  <div>
    <h1>list</h1>
  </div>
</template>

<style scoped>

</style>