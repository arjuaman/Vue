<template>
  <h2>Component F</h2>
  <div>This is the target, getting: {{data}}</div>
</template>

<script>
import {inject} from 'vue';

export default {
  name: 'ComponentF',
  setup(){
    const data = inject('counter', '!Error in getting!');
    return{
      data
    }
  }
}
</script>

<style scoped>
</style>