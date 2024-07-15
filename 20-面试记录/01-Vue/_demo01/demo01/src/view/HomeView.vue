<script>
import List from "@/components/List.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {List},
  data() {
    return {
      str: 123,
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this.$el, this.$data);

  },
  async created() {
    console.log('create', this.$el, this.$data)
    // setTimeout(()=>{
    //   console.log(document.getElementById('doom'))
    // })
    // this.$nextTick(res=>{
    //   console.log(res,document.getElementById('doom'),this.$refs)
    // })
    this.getData()
    let res = await axios({
      url: "https://jsonplaceholder.typicode.com/photos",
    })
    console.log(res)

  },
  beforeMount() {
    console.log('beforeMount', this.$el, this.$data);
  },
  mounted() {
    console.log('mounted', this.$el, this.$data)
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed')
  },
  methods:{
    getData(){
      axios({
        url: "https://jsonplaceholder.typicode.com/photos",
      }).then(res=>{
        console.log(res)
      })
    }
  }
};

</script>

<template>
  <div>
    <h1>HELLO</h1>
    <div class="home" id="doom">
      <List/>
    </div>
  </div>

</template>

<style scoped>
  .home{
    width: 300px;
    height: 300px;
    background-color: aquamarine;
  }
</style>