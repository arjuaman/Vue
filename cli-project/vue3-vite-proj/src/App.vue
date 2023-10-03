<template>
  <h3 v-once>{{name}}</h3>
  <button v-on:click="changeName">Change 1st</button>
  <button v-on:click="changeName2">CHange 2nd</button>
</template>

<script>
export default {
  data() {
    return{
      name: 'App',
    }
  },
  methods: {
    changeName(){
      this.name = "Robin";
    },
    methods: {
      changeName2() {
        this.name = "Hawk";
      }
    },
  },
}
</script>

<style>

</style>