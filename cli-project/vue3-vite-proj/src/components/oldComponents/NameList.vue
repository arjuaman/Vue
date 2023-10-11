<template>
  <slot name="forNamedSlots">This is default value if no value passed in between from parent</slot>
  <div v-for="i in movies" :key="i.name">
    <slot :movie="i.name" :rating="i.rating" :char="i.char"></slot>
  </div>
  <h4>
      <slot name="trying" :data="animal"></slot>
  </h4>
</template>

<script>
export default {
  data() {
    return {
      animal: 'cheetah',
      movies: [
        { name: "batman", rating: 10, char: "Bruce" },
        { name: "superman", rating: 8.5, char: "Clark" },
        { name: "wonder woman", rating: 9, char: "Diana" },
      ],
    };
  },
};
</script>

<style scoped>
</style>