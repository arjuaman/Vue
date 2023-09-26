<template>
  <div>
    <h3>{{title}}</h3>
    <mangas></mangas>
  </div>
</template>

<script>
import Manga from './Manga.vue'

export default {
  components: {
    'mangas': Manga
  },
  data () {
    return {
      title: "Animeverse"
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
  div {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
