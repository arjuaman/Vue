<template>
  <h2>Component A</h2>
  <div>This source is also providing count: {{count}} using ref(), named 'counter1', but it won't display in target because it's a sibling</div>
</template>

<script>
import {ref, provide} from 'vue';
export default {
  name: 'ComponentA',
  setup(){
    const count = ref(0);
    provide('counter', count);
    return{
      count
    }
  }
}
</script>

<style scoped>
</style>