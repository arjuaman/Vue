<template>
  <div>{{oName}}</div>
  <div>{{cName}}</div>
</template>

<script> 
import { ref } from "vue";

export default {
  name: 'App',
  data(){
    return{
       oName: "Harriet"
    }
  },
  setup(){
    const cName = ref("Achilles");
    console.log(cName);
    return{
      cName
    }
  }
}
</script>

<style scoped>
</style>