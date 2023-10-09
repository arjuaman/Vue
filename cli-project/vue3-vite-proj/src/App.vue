<template>
  <input type="text" v-model="fname">
  <input type="text" v-model="lname">
  <div>First name is: {{fname}}</div>
  <div>Last name is: {{lname}}</div>
  <div>Full name is: {{combo}}</div>
</template>

<script> 
import {ref, reactive, toRefs, computed} from 'vue';

export default {
  name: 'App',
  setup(){
    const state = reactive({
      fname: '',
      lname: ''
    })

    let combo = computed(function(){
      return `${state.fname} ${state.lname}`
    });

    return{
      ...toRefs(state),
      combo
    }
  }
}
</script>

<style scoped>
</style>