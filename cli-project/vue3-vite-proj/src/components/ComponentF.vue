<template>
  <h2>Component F</h2>
  <div>This is the target, getting: {{data}} from C</div>
  <div>This is the target, getting: {{data1}} from A</div>
  <button @click="increment">Increment from child</button>
</template>

<script>
import {inject} from 'vue';

export default {
  name: 'ComponentF',
  setup(){
    const data = inject('counter', '!Error in getting!');
    const data1 = inject('counter1', '!Error in getting!');
    const increment = inject('increase', "!Couldn't get function!");
    return{
      data,
      data1,
      increment
    }
  }
}
</script>

<style scoped>
</style>