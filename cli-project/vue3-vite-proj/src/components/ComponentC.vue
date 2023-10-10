<template>
  <h2>Component C</h2>
  <div>This source is providing count: {{count}} using ref(), named 'counter', and F is it's grandchild</div>
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
    provide('counter', count);
    return{
      count
    }
  }
}
</script>

<style scoped>
</style>