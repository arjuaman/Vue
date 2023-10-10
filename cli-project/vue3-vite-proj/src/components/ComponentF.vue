<template>
  <h2>Component F</h2>
  <div>This is the target, getting: {{data}} from C</div>
  <div>This is the target, getting: {{data1}} from A</div>
</template>

<script>
import {inject} from 'vue';

export default {
  name: 'ComponentF',
  setup(){
    const data = inject('counter', '!Error in getting!');
    const data1 = inject('counter1', '!Error in getting!');
    return{
      data,
      data1
    }
  }
}
</script>

<style scoped>
</style>