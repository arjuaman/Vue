<template>
  <div>
    <form-helper>
      <h2>This is a header</h2>
      <p>A para tag</p>
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

      }
    },
    methods: {

    }
  }
</script>