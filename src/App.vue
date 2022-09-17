<template lang="pug">
.app
  main
    router-view
</template>

<script>
export default {
  name: "App",
  methods: {
    test(x) {
      return x + 1;
    },
  },
};
</script>

<style lang="sass">
*
  box-sizing: border-box

body
  margin: 0
</style>
