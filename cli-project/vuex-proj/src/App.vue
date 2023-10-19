<template>
  <div id="app">
    <ProductOne :products="products"></ProductOne>
    <ProductThree :products="products"></ProductThree>
  </div>
</template>

<script>
import ProductOne from "./components/ProductOne.vue";
import ProductThree from "./components/ProductThree.vue";

export default {
  name: 'app',
  components: {
    ProductOne,
    ProductThree,
  },
  data () {
    return {
      products: [
        {name: "Merry", price: 20},
        {name: "Perry", price: 40},
        {name: "Terry", price: 30},
        {name: "Jerry", price: 50},
      ]
    }
  }
}
</script>

<style>

</style>
