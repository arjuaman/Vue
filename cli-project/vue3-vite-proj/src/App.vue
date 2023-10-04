<template>
  <div>Movie is: {{movieInfo.name}}</div>
  <input type="text" v-model="movieInfo.name" />
  <input type="text" v-model="movieInfo.hit" />
</template>

<script>
export default {
  data() {
    return{
      movieInfo: {
        name: '',
        hit: ''
      }
    }
  },
  methods: {
    changeName(){
      this.movieInfo.name = 'superman'
    }
  },
  computed: {
    
  },
  watch: {
    movieInfo: {
      handler(newval, oldval){
        console.log("Movie is: ",newval.name, " and hit: ",newval.hit);
      },
      deep: true
    }
  }
};
</script>

<style>
</style>