<template>
  <div>Fullname using computed: {{fullName}}</div>
  <div>Fullname using method: {{getFullName()}}</div>
  <input type="text" name="lol" id="lol" v-model="country">

  <button @click="changeName">Change Name</button>

  <div v-for="i in expensiveItems" :key="i.id">{{i.name}} {{i.price}}</div>
</template>

<script>
export default {
  data() {
    return{
      fname: "Bruce",
      lname: "Wayne",
      country: "",
      items: [
        {id: 1, price: 50, name: "gg"},
        {id: 2, price: 150, name: "ff"},
        {id: 3, price: 250, name: "rr"}
      ]
    }
  },
  methods: {
    getFullName(){
      console.log("inside methods");
      return this.fname +' '+ this.lname;
    },
    changeName(){
      this.fullName = "Seele Bronya"
    }
  },
  computed: {
    fullName: {
      get(){
        console.log("inside computed");
        return this.fname +' '+ this.lname;
      },
      set(value){
        const name = value.split(' ');
        this.fname = name[0];
        this.lname = name[1];
      }
    },
    expensiveItems(){
      return this.items.filter(item => item.price>100);
    }
  }
};
</script>

<style>
</style>