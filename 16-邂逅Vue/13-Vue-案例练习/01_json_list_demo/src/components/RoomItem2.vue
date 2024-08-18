<script setup>
import {computed} from "vue";

const props = defineProps({
  itemData:{
    type: Object,
    default:()=>({})
  }
})

// 定义计算属性
const textTitle = computed(() => {
  return props.itemData.verify_info.messages.join(" ")
})
// 整合
const textDescription = computed(() => {
  return {
    textTitle:props.itemData.verify_info.messages.join(" "),
    textColor:props.itemData.verify_info.text_color
  }
})
console.log(props.itemData.bottom_info)
const textBottom = computed(() => {
  return {
    conts:props.itemData.bottom_info.content,
    style:{
      color:props.itemData.bottom_info.content_color,
      fontSize:props.itemData.bottom_info.font_size + "px"
    }
  }
})

// console.log(textTitle.value)
</script>

<template>
  <div class="room-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.picture_url" alt="">
      </div>
      <div class="info">
        <div class="title" :style="{color:textDescription.textColor}">
          <!--              计算属性来处理 -->
          {{textDescription.textTitle}}
        </div>
        <div class="name">
          {{itemData.name}}
        </div>
        <div class="price">
          {{itemData.price_format + "/晚"}}
        </div>
        <div class="bottom-info" :style="textBottom.style">
          {{textBottom.conts}}
<!--          {{textBottom.content}}-->
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

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

</style>