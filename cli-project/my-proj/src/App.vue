<template>
  <div>
      <app-header></app-header>
      <router-view></router-view>
  </div>
</template>

<script>
// Imports
import ShowBlogs from './components/ShowBlogs.vue';
import TheOtherBlog from './components/TheOtherBlog.vue';
import Header from './components/Header.vue';
import SingleBlog from './components/SingleBlog.vue';

export default {
  components: {
      'show-blogs': ShowBlogs,
      'other-blog': TheOtherBlog,
      'app-header' : Header,
      'single-blog' : SingleBlog
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
.router-link-active{
  color: red;
}
/* .router-link-exact-active{
  color: red;
} */
</style>