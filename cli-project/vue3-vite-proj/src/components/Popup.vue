<template>
    <div>
        <p>This is the popup component</p>
        <input type="text" v-model="movieName" />
        <button @click="$emit('closePopup', movieName)">Close the popup</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                movieName: ''
            }
        },
        emits: {
            closePopup(name){
                if(!name) return false
                else return true;
            }
        }
    }
</script>

<style scoped>

</style>