<script>
import ShowMessage from './ShowMessage.vue'
export default {
  name: "App",
  components:{
    ShowMessage,
  }
}
</script>

<template>
  <div class="app">
      <show-message title="hello world" content="你好">
        <button>hello 你好</button>
      </show-message>
    <show-message title="hello world" content="你好">
      <h2>你好</h2>
    </show-message>
    <show-message title="hello world" content="你好">
      <a href="">cysir.icu</a>
    </show-message >
    <show-message  title="hello world"  >

    </show-message>
  </div>
</template>

<style scoped>

</style>