export default {
    data(){
        return {
            message:"hello world"
        }
    },
    created() {
        console.log('message', this.message)
    }
}