<template>
  <div>Current volume is: {{volume}}</div>
  <button @click="volume+=2">increase volume</button>
  <button @click="volume-=2">decrease volume</button>
</template>

<script>
export default {
  data() {
    return{
      volume: 0
    }
  },
  methods: {
    
  },
  computed: {
    
  },
  watch: {
    volume(newval, oldval){
      if(newval>oldval && newval===16){
        console.log("VOlume high");
      }
    }
  }
};
</script>

<style>
</style>