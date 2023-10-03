<template>
  <h3>Name is: {{myInfo.name}}</h3>
  <button @click="changeName">Change name</button>
  <button @click="changeName($event), changeAge(6, $event)">Change name and number</button>
  <h3>Age is: {{myInfo.age}}</h3>
  <button @click="changeAge(6, $event)">Change age by adding 5</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      num: 5,
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
  },
  methods: {
    changeName(e) {
      console.log(e);
      let x = Math.floor(Math.random()*3);
      this.myInfo.name = this.heroes[x];
    },
    changeAge(val, e){
      console.log(e);
      this.myInfo.age = this.num + this.myInfo.age + val;
    }
  },
}
</script>

<style>

</style>