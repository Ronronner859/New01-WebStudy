import {onMounted, ref} from "vue";

export default function useCounter(){
    const  counter = ref(0)
    const addCounter = function (){
        counter.value++
    }
    const subCounter = function (){
        counter.value--
    }
    onMounted(()=>{
        setTimeout(()=>{
            counter.value = 1000
        },1000)
    })

    return {
        counter,
        addCounter,
        subCounter
    }
}