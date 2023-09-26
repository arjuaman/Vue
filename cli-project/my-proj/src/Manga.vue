<template>
    <div>
        <ul>
            <li v-for="i in anime">{{i}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                anime: ["JJK", "Bleach", "Pedro"]
            }
        }
    }
</script>

<style scoped>
    div {
      font-family: 'Times New Roman', Times, serif;
    }
  </style>