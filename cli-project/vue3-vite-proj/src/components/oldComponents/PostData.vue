<template>
  <div>
    <input type="text" v-model="formData.author">
    <input type="text" v-model="formData.content">
    <input type="text" v-model="formData.title">
    <button @click="send">Post Data</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "postData",
  data() {
    return {
      formData: {
          author: '',
          content: '',
          title: ''
      }
    };
  },
  methods: {
    send() {
      axios
        .post("https://react-sending-data-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json", this.formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
};
</script>

<style scoped>
</style>