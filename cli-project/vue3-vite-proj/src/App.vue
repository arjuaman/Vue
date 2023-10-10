<template>
  <ComponentA />
  <ComponentC />
</template>

<script> 
import {ref, watch, reactive, toRefs, computed, provide} from 'vue';
import ComponentA from './components/ComponentA.vue';
import ComponentC from './components/ComponentC.vue';

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentC
  }
}
</script>

<style scoped>
</style>