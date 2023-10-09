<template>
  <div>{{oName}}</div>
  <div>{{cName}}</div>

  <div>{{state.fname}} {{state.genre}}</div>
  <div>{{statement1}}</div>
  <div>{{statement2}}</div>
</template>

<script> 
import { ref, reactive } from "vue";

export default {
  name: 'App',
  data(){
    return{
       oName: "Harriet"
    }
  },
  setup(){
    const cName = ref("Achilles");
    // alert(cName.value);
    // alert(cName.rawValue);

    const state = reactive({
      fname: "Troy",
      genre: "History"
    })

    const statement1 = `${cName} was the protagonist as well as antagonist in the ${state.genre} drama ${state.fname}`;
    const statement2 = `${cName.value} was the protagonist as well as antagonist in the ${state.genre} drama ${state.fname}`;

    return{
      cName,
      state,
      statement1,
      statement2
    }
  }
}
</script>

<style scoped>
</style>