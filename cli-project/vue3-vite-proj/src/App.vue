<template>
  <teleport to="#portal-root">
    <Portal />
  </teleport>
</template>

<script>
import Portal from "./components/Portal.vue";

export default {
  name: 'App',
  components: {
    Portal
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