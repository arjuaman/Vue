<template>
  <Article v-bind:likes=50 :type="true" />
  <Article id="my-article" title="Custom title" v-bind:likes=50 :type="true" />
  <greet id="my-greet"/>
</template>

<script>
import Greet from "./components/Greet.vue";
import Article from "./components/Article.vue";

export default {
  components: {
    greet: Greet,
    // Greet
    Article
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