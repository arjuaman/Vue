<template>
  <v-app>
    <Sidebar @color-current="onSelection" />
    <v-main> 
      <Gallery :isWithColor="isColored"/>
    </v-main>
  </v-app>
</template>

<script>
import Gallery from './components/Gallery.vue'
import Sidebar from './components/Sidebar.vue'
import { ref } from 'vue' 

export default {
  name: 'App',
  components: {
    Sidebar,
    Gallery,
  },
  setup(){
    const isColored = ref(true)

    const onSelection = (args) => {
      isColored.value = args;
    }

    return {
      isColored,
      onSelection
    }
  }
}
</script>
