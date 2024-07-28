<script>
import {inject} from "vue";

export default {
  name: "Home",
  setup(){
    const name = inject("name")
    const age = inject("age")

    return{
      name,
      age
    }
  }
}
</script>

<template>
 <h1>{{name}}---{{age}}</h1>
</template>

<style scoped>

</style>