<template>
  <!-- <h2 v-for="name in heroes" :key="name" v-if="name==='Logan'">{{name}}</h2> -->
  <template v-for="name in heroes" :key="name">
    <h2 v-if="name==='Logan'">
      {{name}}
    </h2>
  </template>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      heroes: ["Clark","Dent","Logan"],
      ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ],
      actors: [
        {
          name: 'Bale',
          movies: ['Batman', 'Prestige']
        },
        {
          name: 'cBale',
          movies: ['cBatman', 'cPrestige']
        },
        {
          name: 'dBale',
          movies: ['dBatman', 'dPrestige']
        }
      ],
      myInfo: {
        name: "Arju",
        age: 90,
        occ: "Megabot"
      }
    }
  }
}
</script>

<style>

</style>