<template>
  <div>
    <input v-model="movieNamePre">
  </div>
  <CustomInput v-model="movieName"/>
</template>

<script>
import CustomInput from "./components/CustomInput.vue";

export default {
  components: {
    CustomInput
  },
  data(){
    return{
      movieNamePre: '',
      movieName: ''
    }
  }
};
</script>

<style scoped>
</style>