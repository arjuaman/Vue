<template>
  <div>Received from parent: {{ f1 }}</div>
  <button @click="sendEvent">Send to Parent</button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Child",
  props: ["movieName"],
  setup(props, context) {
    const f1 = computed(() => {
      return props.movieName;
    });
    function sendEvent(){
        context.emit('sayHelloTo','Dong');
    }
    return {
      f1,
      sendEvent
    };
  },
  emits: ['sayHelloTo']
};
</script>

<style scoped>
</style>