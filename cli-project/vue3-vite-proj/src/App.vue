<template>
  <input type="text" v-model="fname">
  <input type="text" v-model="lname">
</template>

<script> 
import {ref, watch, reactive, toRefs, computed} from 'vue';

export default {
  name: 'App',
  setup(){
    const fname = ref('');
    const lname = ref('');
    watch([fname, lname],(newVal, oldVal)=>{
      console.log("new value is: ",newVal[0]);
      console.log("old value is: ",oldVal[0]);
      console.log("new value is: ",newVal[1]);
      console.log("old value is: ",oldVal[1]);
    },
    {
      immediate: true
    })
    return{
      fname,
      lname
    }
  }
}
</script>

<style scoped>
</style>