<template>
  <div>Name is: {{name}}</div>
  <div v-pre>Name is: {{name}}</div>
  <div>
    <p>Inside child, Name is: {{name}}</p>
  </div>
  <div v-pre>
    <p>Inside child, Name is: {{name}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return{
      name: 'App',
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>