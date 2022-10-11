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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined')

*
  box-sizing: border-box
  font-family: 'Roboto', sans-serif
  color: #EEEEEE

body
  margin: 0

  background-color: #111111

.container
  padding: 8px 16px


.nav-link
  position: relative

  color: inherit
  text-decoration: none
  text-transform: uppercase
</style>
