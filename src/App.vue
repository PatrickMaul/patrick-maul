<template lang="pug">
.app
  ApplicationBar(:nav-links="navLinks", :active-menu="activeMobileMenu", @toggle-menu="activeMobileMenu = !activeMobileMenu")
  MobileMenu(:show="activeMobileMenu", :nav-links="navLinks", @close-menu="activeMobileMenu = false")
  main.container
    router-view
</template>

<script>
import ApplicationBar from "./components/ApplicationBar.vue";
import MobileMenu from "./components/mobile/MobileMenu.vue";

export default {
  name: "App",
  components: {
    ApplicationBar,
    MobileMenu,
  },
  data() {
    return {
      activeMobileMenu: false,
      navLinks: [
        {
          label: "Home",
          to: "/",
        },
        {
          label: "Projects",
          to: "/projects",
        },
      ],
    };
  },
};
</script>

<style lang="sass">
*
  box-sizing: border-box
  font-family: $app-font
  color: $app-color

body
  margin: 0
  background-color: $app-bg
</style>
