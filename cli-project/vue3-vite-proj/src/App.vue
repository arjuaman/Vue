<template>
  <h1>Movie review</h1>
  <p v-bind:class="hitOrNot && 'theme'">Batman</p>
  <p v-bind:class="hitOrNot ? 'consolation': 'theme' ">Batman</p>
  <p v-bind:class="hitOrNot && 'theme'">Batman</p>
  <p v-bind:class="[hitOrNot && 'theme',marvel?'marvel':'dc']">Spiderman</p>
  <p v-bind:class="{
    'theme': hitOrNot,
    'dc': marvel,
    'marvel': !marvel
  }">Yellow Panther</p>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      hitOrNot: true,
      marvel: true,
      dc: true
    }
  }
}
</script>

<style>
.theme{
  color: green;
}
.consolation{
  color: red;
}
.marvel{
  font-family:fantasy;
}
.dc{
  font-size: large;
}
</style>