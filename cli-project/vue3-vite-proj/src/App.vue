<template>
  <FetchData />
  <PostData />
</template>

<script>
import FetchData from './components/FetchData.vue';
import PostData from './components/PostData.vue';

export default {
  name: 'App',
  components: {
    FetchData,
    PostData
  },
  data(){
    return{
       
    }
  }
};
</script>

<style scoped>
</style>