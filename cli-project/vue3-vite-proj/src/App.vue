<template>
  <div>Count is: {{count}}</div>
  <button @click="increment">Increment</button>
</template>

<script> 
import {ref, reactive, toRefs} from 'vue';

export default {
  name: 'App',
  setup(){
    let count = ref(0);

    function increment(){
      count.value++;
    }

    return{
      count,
      increment
    }
  }
}
</script>

<style scoped>
</style>