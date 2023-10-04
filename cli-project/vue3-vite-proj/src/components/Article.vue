<template>
  <h1>{{ title }}</h1>
  <div>Article Component</div>
  <div>Likes: {{likes}}</div>
  <div>Published? {{type}}</div>
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
};
</script>

<style scoped>
</style>