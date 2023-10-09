<template>
  <div>{{name}}</div>
  <div>{{reactive_name}}</div>
</template>

<script> 
import {ref} from 'vue';
export default {
  name: 'App',
  setup(){
    let name= "Achilles";
    let reactive_name = ref("Achilles");
    setTimeout(()=>{
      name = "Heron";
      reactive_name.value = "Heron"
      console.log(name, reactive_name);
    },2000);
    return{
      name,
      reactive_name
    }
  }
}
</script>

<style scoped>
</style>