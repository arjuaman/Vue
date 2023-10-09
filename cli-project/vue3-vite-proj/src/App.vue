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
    alert(cName.value);
    alert(cName.rawValue);
    return{
      cName
    }
  }
}
</script>

<style scoped>
</style>