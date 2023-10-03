<template>
  <ul>
    <li v-for="i in heroes" v-bind:key="i">{{i}}</li>
  </ul>
  <!-- <div> -->
    <div v-for="i in ninjas" v-bind:key="i.name">{{i.name}} {{i.age}}</div>
  <!-- </div> -->
  <div>
    <div v-for="person in actors" v-bind:key="person.name">
      {{person.name}}
      <p v-for="j in person.movies" v-bind:key="j">{{j}}</p>
    </div>
  </div>
  <h3 v-for="(val, key, ind) in myInfo" :key="val">{{val}} {{key}} {{ind}}</h3>
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