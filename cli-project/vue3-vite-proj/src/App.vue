<template>
  <div>Count is: {{var1}}</div>
  <button @click="varFunc">Increment Count</button>
</template>

<script> 
import useCounter from './composables/useCounter.js'

export default {
  name: 'App',
  setup(){
    const [var1, varFunc] = useCounter();
    console.log(var1, varFunc);

    return{
      var1,
      varFunc
    }
  }
}
</script>

<style scoped>
</style>