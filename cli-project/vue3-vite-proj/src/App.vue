<template>
  <input type="text" v-model="fname">
  
</template>

<script> 
import {ref, watch, reactive, toRefs, computed} from 'vue';

export default {
  name: 'App',
  setup(){
    const fname = ref('');
    watch(fname,(newVal, oldVal)=>{
      console.log("new value is: ",newVal);
      console.log("old value is: ",oldVal);
    })
    return{
      fname
    }
  }
}
</script>

<style scoped>
</style>