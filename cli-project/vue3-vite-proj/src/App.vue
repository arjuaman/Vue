<template>
  <TabA />
  <TabB />
</template>

<script>
import TabA from './components/TabA.vue';
import TabB from './components/TabB.vue';

export default {
  name: 'App',
  components: {
    TabA,
    TabB
  },
  data(){
    return{
       
    }
  }
};
</script>

<style scoped>
</style>