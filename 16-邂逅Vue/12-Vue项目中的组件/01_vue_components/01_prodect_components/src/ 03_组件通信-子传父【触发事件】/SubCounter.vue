<script>
export default {
  name: "SubCounter",
  methods:{
    subClick(count){
      this.$emit('subClick',count);
    }
  }
}
</script>

<template>
  <div class="sub">
    <button @click="subClick(1)">-1</button>
    <button @click="subClick(5)">-5</button>
    <button @click="subClick(1000)">-1000</button>
  </div>

</template>

<style scoped>

</style>