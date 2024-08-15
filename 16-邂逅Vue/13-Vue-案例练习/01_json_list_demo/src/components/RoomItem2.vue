<script setup>
import {computed} from "vue";

const props = defineProps({
  list:{
    type: Array,
    default:()=>([])
  }
})
// 定义计算属性
const textTitle = computed(() => {
  console.log(props.list)
  return  props.list.forEach(item=>{item.verify_info.messages.join(" ")})
  // return props.list.verify_info.messages.join(" ")
})
</script>

<template>
  <div class="room-list">
    <!--    遍历尽量用template-->
    <template v-for="item in list" :key="item.id">
      <div class="room-item">
        <div class="item-inner">
          <div class="cover">
            <img :src="item.picture_url" alt="">
          </div>
          <div class="info">
            <div class="title">
<!--              计算属性来处理 -->

              {{item.verify_info.messages.join(" ")}}
<!--              {{textTitle}}-->
            </div>
            <div class="name">
              {{item.name}}
            </div>
            <div class="price">
              {{item.price_format + "/晚"}}
            </div>
            <div class="bottom-info">
              {{item.bottom_info.content}}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.room-list{
  display: flex;
  flex-wrap: wrap;
  margin: 20px -8px;
  .room-item{
    width: 33.33333%;

    .item-inner{
      margin:0 8px 12px;
      color: #484848;
      font-weight: 800;
    }

    img{
      width: 100%;
      border-radius: 3px;
    }

    .info{
      .title{
        margin-top: 8px;
        font-size: 12px;
      }
      .name{
        margin-top: 3px;
        font-size: 16px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price{
        margin: 3px 0;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>