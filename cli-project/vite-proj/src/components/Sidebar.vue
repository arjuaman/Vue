<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://img.bleacherreport.net/img/images/photos/002/264/320/163895079_crop_exact.jpg?w=1200&h=1200&q=75"
        title="David Villa"
        subtitle="poacher@barca.com"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-star"
        title="Barca Trophies"
        value="barcaTrophies"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-image"
        title="Spain Trophies"
        value="spainTrophies"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
