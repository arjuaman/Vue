<template>
  <h1>{{greet}} {{ name }}</h1>
  <p>Welcome to {{ city }}</p>
  <p v-text="city"></p>
  <!-- <p v-text="city">Welcome to {{ city }}</p> -->
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      greet: "Hey",
      name: "Arju",
      city: "Gotham"
    }
  }
}
</script>
