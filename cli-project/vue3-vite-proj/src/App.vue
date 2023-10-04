<template>
  <ComponentC />
</template>

<script>
import ComponentC from "./components/ComponentC.vue";

export default {
  components: {
    ComponentC
  },
  data(){
    return{
      
    }
  },
  provide: {
    username: "Welt"
  }
};
</script>

<style scoped>
</style>