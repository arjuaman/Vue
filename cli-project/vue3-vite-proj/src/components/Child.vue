<template>
  <div>Received from parent: {{ f1 }}</div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Child",
  props: ["movieName"],
  setup(props) {
    const f1 = computed(() => {
      return props.movieName;
    });
    return {
      f1,
    };
  },
};
</script>

<style scoped>
</style>