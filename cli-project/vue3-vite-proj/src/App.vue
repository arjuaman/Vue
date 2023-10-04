<template>
  <div>This is the parent component</div>
  <button @click="showPopup = true">Show popup</button>
  <Popup v-show="showPopup" @closePopup="toggleVisibility" />
</template>

<script>
import Popup from "./components/Popup.vue";

export default {
  components: {
    Popup
  },
  data(){
    return{
      showPopup: false
    }
  },
  methods: {
    toggleVisibility(){
      this.showPopup = false;
    }
  }
};
</script>

<style scoped>
</style>