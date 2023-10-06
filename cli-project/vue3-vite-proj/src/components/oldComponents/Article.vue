<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-bind="$attrs">Article Component</div>
    <div>Likes: {{likes}}</div>
    <div>Published? {{type}}</div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    title: {
        type: String,
        required: true,
        default: "Principles of relativity"
    },
    likes: Number,
    type: Boolean
  },
  inheritAttrs: false
};
</script>

<style scoped>
</style>