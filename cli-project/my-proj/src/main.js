import Vue from 'vue'
import App from './App.vue'
import Manga from './Manga.vue'

Vue.component("mangas", Manga);

new Vue({
  el: '#app',
  render: h => h(App)
})
