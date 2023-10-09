<template>
  <input type="text" v-model="fname">
  <input type="text" v-model="lname">
  <input type="text" v-model="full">
  <div>First name is: {{fname}}</div>
  <div>Last name is: {{lname}}</div>
  <div>Full name is: {{full}}</div>
</template>

<script> 
import {ref, reactive, toRefs} from 'vue';

export default {
  name: 'App',
  setup(){
    const state = reactive({
      fname: '',
      lname: '',
      full: ''
    })

    return{
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
</style>