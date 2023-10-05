<template>
  <button @click="current = 'TabA'">Tab A</button>
  <button @click="current = 'TabB'">Tab B</button>
  <button @click="current = 'TabC'">Tab C</button>

  <keep-alive>
    <component :is="current"/>
  </keep-alive>
  
</template>

<script>
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import TabC from "./components/TabC.vue";

export default {
  name: 'App',
  components: {
    TabA,
    TabB,
    TabC
  },
  data(){
    return{
      current: 'TabA'
    }
  }
};
</script>

<style scoped>
</style>