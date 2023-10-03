<template>
  <p v-if="num === 0">This is zero</p>
  <p v-else-if="num < 0">Negative number</p>
  <p v-else-if="num > 0">Positive number</p>
  <p v-else>Not a number</p>

  <p v-show="num === 0">This is zero</p>
  <p v-show="num !== 0">This is non-zero</p>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      num: "p"
    }
  }
}
</script>

<style>

</style>