<template>
  <div>
      <!-- <form-one></form-one>
      <form-two></form-two> -->
      <!-- <component is="form-one"></component> -->
      <component v-bind:is="showComp"></component>
      <button v-on:click="showComp = 'form-one'">Show form 1</button>
      <button v-on:click="showComp = 'form-two'">Show form 2</button>
  </div>
</template>

<script>
// Imports
import FormOne from './components/FormOne.vue'
import FormTwo from './components/FormTwo.vue'

export default {
  components: {
      'form-one': FormOne,
      'form-two': FormTwo,
  },
  data () {
      return {
        showComp: "form-one"
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