<template>
  <div class="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/01_组件的嵌套使用/components/AppHeader.vue";
import AppContent from "@/01_组件的嵌套使用/components/AppContent.vue";
import AppFooter from "@/01_组件的嵌套使用/components/AppFooter.vue";
export default {
  name: 'App',
  components:{
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>

<style>

</style>
