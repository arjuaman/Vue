<template>
  <div>
      <app-header></app-header>
      <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
      <hr>
      <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
      <app-footer></app-footer>
  </div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-ninjas': Ninjas
  },
  data () {
      return {
        ninjas: [
                {name: 'JJK', speciality: 'Satoru Gojo', show: false},
                {name: 'Naruto', speciality: 'Headband', show: false},
                {name: 'One Piece', speciality: 'Straw Hat', show: false},
                {name: 'Bleach', speciality: 'Bankai', show: false},
                {name: 'Fullmetal Alchemist', speciality: 'Alchemy', show: false},
                {name: 'Genshin', speciality: 'Paimon', show: false}
            ]
      }
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>