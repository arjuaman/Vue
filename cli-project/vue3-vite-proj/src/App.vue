<template>
  <input type="text" v-model="movie">
  <Child :movieName="movie" />
</template>

<script> 
import {ref, watch, reactive, toRefs, computed, provide, onMounted} from 'vue';
import Child from './components/Child.vue'

export default {
  name: 'App',
  components: {
    Child
  },
  setup(){
    const movie = ref("");
    
    return{
      movie
    }
  }
}
</script>

<style scoped>
</style>