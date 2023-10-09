<template>
  <div>{{name}}</div>
</template>

<script> 
import {reactive, toRefs} from 'vue';
export default {
  name: 'App',
  setup(){
    let state = reactive({
      name: "Tanjiro"
    });

    setTimeout(()=>{
      state.name = "Kid"
    }, 2000);

    return toRefs(state);
  }
}
</script>

<style scoped>
</style>