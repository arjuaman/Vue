<template>
  <div>
    <label for="">Enter first name: </label>
    <input type="text" v-model="fname">
  </div>
  <div>
    <label for="">Enter last name: </label>
    <input type="text" v-model="lname">
  </div>
  <div>
    <label for="">Enter hero name: </label>
    <input type="text" v-model="options.hero">
  </div>
</template>

<script> 
import {ref, watch, reactive, toRefs, computed} from 'vue';

export default {
  name: 'App',
  setup(){
    const state = reactive({
      fname: '',
      lname: '',
      options: {
        hero: ''
      }
    })

    watch(()=> JSON.parse(JSON.stringify(state.options)),
      function(newval, oldval){
        console.log("New value is: ",newval);
        console.log("Old value is: ",oldval);
    },
    {deep: true})

    return{
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
</style>