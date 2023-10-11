<template>
  <h2>Component C</h2>
  <div>This source is providing count: {{count}} using ref(), named 'counter', and F is it's grandchild</div>
  <button @click="increase">Increment</button>
  <ComponentE />
</template>

<script>
import {ref, watch, reactive, toRefs, computed, provide} from 'vue';
import ComponentE from './ComponentE.vue'
export default {
  name: 'ComponentC',
  components: {
    ComponentE,
  },
  setup(){
    const count = ref(0);
    function increase(){
      return count.value++;
    }
    provide('counter', count);
    provide('increase', increase);
    return{
      count,
      increase
    }
  }
}
</script>

<style scoped>
</style>