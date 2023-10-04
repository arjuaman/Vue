<template>
  <div>{{name}}</div>
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
      name: "Welt"
    }
  },
  provide() {
    return{
      username: this.name
    }
  }
};
</script>

<style scoped>
</style>