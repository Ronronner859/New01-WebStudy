import {reactive, ref} from "vue";

export default function useScrollPosition() {
    const scrollX  = ref(0)
    const scrollY = ref(0)

    const scrollPosition = reactive({
        x : 0,
        y : 0,
    })

    document.addEventListener('scroll',()=>{
        scrollPosition.x = window.scrollX
        scrollPosition.y = window.scrollY
    })


    return {
        scrollPosition,
    }

}
