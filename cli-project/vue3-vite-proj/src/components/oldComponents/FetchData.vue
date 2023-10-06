<template>
  <div>
    <!-- <button @click="fetch">Fetch Data</button> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "fetchData",
  data() {
    return {
      data: "",
    };
  },
  created(){
      this.fetch();
  },
  methods: {
    fetch() {
      axios
        .get(
          "https://react-sending-data-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
        )
        .then((res) => {
          console.log(res.data);
          this.data = res.data;
        })
        .catch((e) => {
          alert(e.message);
        });
    },
  },
};
</script>

<style scoped>
</style>