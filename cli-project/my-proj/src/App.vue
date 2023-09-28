<template>
  <div>
      <!-- <form-one></form-one>
      <form-two></form-two> -->
      <component is="form-one"></component>
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