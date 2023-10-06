<template>
  <input type="text" ref="inputRef">
  <FetchData />
</template>

<script>
import FetchData from "./FetchData.vue";
export default {
    components: {
        FetchData
    },
    mounted(){
        this.$refs.inputRef.focus();
    }
};
</script>

<style scoped>
</style>