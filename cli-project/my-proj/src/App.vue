<template>
  <div>
      <show-blogs></show-blogs>
      <other-blog></other-blog>
  </div>
</template>

<script>
// Imports
import ShowBlogs from './components/ShowBlogs.vue';
import TheOtherBlog from './components/TheOtherBlog.vue';

export default {
  components: {
      'show-blogs': ShowBlogs,
      'other-blog': TheOtherBlog
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