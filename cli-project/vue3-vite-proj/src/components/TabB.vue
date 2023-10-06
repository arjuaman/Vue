<template>
  <div>Tab B Content</div>
  <div @mouseover="increment">Tab B counter: {{ count }}</div>
</template>

<script>
import CounterMixin from '../mixins/counterMixin';
export default {
  name: 'TabB',
  mixins: [CounterMixin]
}
</script>

<style scoped>
</style>