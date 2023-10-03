<template>
  <div>Fullname using computed: {{fullName}}</div>
  <div>Fullname using method: {{getFullName()}}</div>
  <input type="text" name="lol" id="lol" v-model="country">
</template>

<script>
export default {
  data() {
    return{
      fname: "Bruce",
      lname: "Wayne",
      country: ""
    }
  },
  methods: {
    getFullName(){
      console.log("inside methods");
      return this.fname +' '+ this.lname;
    }
  },
  computed: {
    fullName(){
      console.log("inside computed");
      return this.fname +' '+ this.lname;
    }
  }
};
</script>

<style>
</style>