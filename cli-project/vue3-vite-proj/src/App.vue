<template>
  <div>Count is: {{count}}</div>
  <button @click="increment">Increment</button>

  <div>Reactive count is: {{state.rcount}}</div>
  <button @click="rIncrement">Reactive Increment</button>
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

    const state = reactive({
      rcount: '0'
    })

    function rIncrement(){
      state.rcount++;
    }

    return{
      count,
      increment,
      state,
      rIncrement
    }
  }
}
</script>

<style scoped>
</style>