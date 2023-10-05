<template>
  <NameList>
    <template v-slot:forNamedSlots>  
    </template>

    <template v-slot:default="slotPropsXYZ">
      <h2>Movie name is: {{slotPropsXYZ.movie}}</h2>
      <h3>Rating is: {{slotPropsXYZ.rating}}</h3>
      <p>Starring: {{slotPropsXYZ.char}}</p>
    </template>

    <template v-slot:trying="input">
      {{input.data}}
    </template>
  </NameList>
</template>

<script>
import NameList from "./components/NameList.vue";

export default {
  components: {
    NameList
  }
};
</script>

<style scoped>
</style>