<template>
  <input type="text" ref="inputRef">
</template>

<script> 
import {ref, watch, reactive, toRefs, computed, provide, onMounted} from 'vue';

export default {
  name: 'App',
  setup(){
    const inputRef = ref(null);
    onMounted(()=>{
      inputRef.value.focus();
    })

    return{
      inputRef
    }
  }
}
</script>

<style scoped>
</style>