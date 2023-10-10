<template>
  <div>
    <label for="">Enter first name: </label>
    <input type="text" v-model="fname">
  </div>
  <div>
    <label for="">Enter last name: </label>
    <input type="text" v-model="lname">
  </div>
</template>

<script> 
import {ref, watch, reactive, toRefs, computed} from 'vue';

export default {
  name: 'App',
  setup(){
    const state = reactive({
      fname: '',
      lname: ''
    })

    watch(state,function(newval, oldval){
      console.log("New value is: ",newval.fname);
      console.log("New value is: ",newval.lname);
      console.log("Old value is: ",oldval.fname);
      console.log("Old value is: ",oldval.lname);
    })

    return{
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
</style>