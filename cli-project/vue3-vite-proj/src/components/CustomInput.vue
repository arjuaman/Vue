<template>
    <input type="text" v-bind:value="modelValue" v-on:input="$emit('update:modelValue',$event.target.value)">
</template>

<script>
    export default {
        props:{
            modelValue: String
        }
    }
</script>

<style scoped>
input{
    background-color: aquamarine;
    padding: 2px 2px;
    margin: 2px;
}
input:focus{
    background-color: bisque;
}
</style>