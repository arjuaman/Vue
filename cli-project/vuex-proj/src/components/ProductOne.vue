<template>
  <div id="ProductOne">
      <ul>
          <li v-for="product in products" :key="product.name">{{product.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "ProductOne",
  props: ["products"],
  data() {
    return {};
  },
};
</script>

<style scoped>
#ProductOne{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#ProductOne ul{
    padding: 0;
    list-style-type: none;
}
#ProductOne li{
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
