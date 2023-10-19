<template>
  <div id="ProductThree">
      <ul>
          <li v-for="product in products" :key="product.name">{{product.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "ProductThree",
  props: ["products"],
  data() {
    return {};
  },
};
</script>

<style scoped>
#ProductThree{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#ProductThree ul{
    padding: 0;
    list-style-type: none;
}
#ProductThree li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
