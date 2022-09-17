<template lang="pug">
.app
  ApplicationBar
  main
    router-view
</template>

<script>
import ApplicationBar from "./components/core/ApplicationBar.vue";

export default {
  name: "App",
  components: {
    ApplicationBar,
  },
};
</script>
