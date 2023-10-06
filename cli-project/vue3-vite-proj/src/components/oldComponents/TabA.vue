<template>
  <div>Tab A Content</div>
  <div @mouseover="increment">Tab A counter: {{ count }}</div>
</template>

<script>
import CounterMixin from "../mixins/counterMixin";
export default {
  name: "TabA",
  
  mixins: [CounterMixin],
};
</script>

<style scoped>
</style>