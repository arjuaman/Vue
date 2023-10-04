<template>
  <div>Movie is: {{movie}}</div>
  <input type="text" v-model="movie" />
</template>

<script>
export default {
  data() {
    return{
      movie: 'Batman'
    }
  },
  methods: {
    
  },
  computed: {
    
  },
  watch: {
    movie: {
      handler(newval, oldval){
        console.log("Movie is: ",newval);
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>