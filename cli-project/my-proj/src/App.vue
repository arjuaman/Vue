<template>
  <div>
      <show-blogs></show-blogs>
  </div>
</template>

<script>
// Imports
import ShowBlogs from './components/ShowBlogs.vue';

export default {
  components: {
      'show-blogs': ShowBlogs
  },
  data () {
      return {

      }
  },
  methods: {

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>