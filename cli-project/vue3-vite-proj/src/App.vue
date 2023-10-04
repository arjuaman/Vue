<template>
  <!-- <greet></greet> -->
  <greet name="Clara" title="title"/>
  <greet name="Clara" v-bind:title="title"/>
  <greet name="Seele"/>
  <greet name="Bronya"/>
  <!-- <Greet /> -->
</template>

<script>
import Greet from "./components/Greet.vue";

export default {
  components: {
    greet: Greet,
    // Greet
  },
  data(){
    return{
      title: "HSR"
    }
  }
};
</script>

<style scoped>
</style>