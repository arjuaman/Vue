<template>
  <h3 v-bind:style="{
    'background-color': 'green'
  }">Object based: This is a success without base</h3>
  <h3 v-bind:style="baseStyle">This is base</h3>
  <h3 v-bind:style="[baseStyle, successStyle]">Array based: This is a success with base</h3>
  <h3 v-bind:style="[baseStyle, failStyle]">Array based: This is a fail with base</h3>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      baseStyle: {
        color: 'orange',
        fontSize: '40px'
      },
      successStyle: {
        backgroundColor: 'green'
      },
      failStyle: {
        backgroundColor: 'red'
      }
    }
  }
}
</script>

<style>

</style>