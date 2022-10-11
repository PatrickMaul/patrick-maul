<template lang="pug">
.app
  ApplicationBar
  main
    router-view
</template>

<script>
import ApplicationBar from "./components/ApplicationBar.vue";

export default {
  name: "App",
  components: {
    ApplicationBar,
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined')

*
  box-sizing: border-box
  font-family: 'Roboto', sans-serif
  color: #EEEEEE

body
  margin: 0

  background-color: #111111
</style>
