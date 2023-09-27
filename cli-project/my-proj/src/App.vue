<template>
  <div>
    <form-helper>
      <h2 slot="title">{{creator}} is the GOAT</h2>
      <p slot="text">A para tag</p>
    </form-helper>
  </div>
</template>

<script>
  import FormHelper from './components/FormHelper.vue';

  export default {
    components: {
      'form-helper': FormHelper,
    },
    data() {
      return {
        creator: "Oda Sensei"
      }
    },
    methods: {

    }
  }
</script>