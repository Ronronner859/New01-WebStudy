import {ref,watch} from "vue";

export default function useTitle(titleValue){
    // document.title = titleValue

//     定义ref引用数据
    const title = ref(titleValue)

    // 监听title的改变
    watch(title, (newValue) => {
        document.title = newValue
    },{
        immediate: true,
        deep:true
    })

    return title
}