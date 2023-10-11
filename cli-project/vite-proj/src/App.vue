<template>
  <v-app>
    <Sidebar />
    <v-main> 
      <Gallery />
    </v-main>
  </v-app>
</template>

<script>
import Gallery from './components/Gallery.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',

  components: {
    Sidebar,
    Gallery,
  },

  data: () => ({
    //
  }),
}
</script>
