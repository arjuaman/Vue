<template>
  <h1>{{greet}} {{ name }}</h1>
  <p>Welcome to {{ city }}</p>
  <p v-text="city"></p>
  <!-- <p v-text="city">Welcome to {{ city }}</p> -->
  <p v-text="nemesis"></p>
  <p v-html="nemesis"></p>
  <a v-bind:href="url">Google</a>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      greet: "Hey",
      name: "Arju",
      city: "Gotham",
      nemesis: "<b>Joker</b>",
      url: "https://www.google.com"
    }
  }
}
</script>
