<template lang="pug">
#application-bar
  .static-content
    MobileMenuButton(:show="onMobile", @toggle-menu="true")
    span#brand-name Patrick Maul
    
  .extended-content(v-if="!onMobile")
    ul.nav-links
      li.nav-item(v-for="link in navLinks")
        router-link.link(:to="link.to") {{ link.label }}
        hr.underline
</template>

<script>
import MobileMenuButton from "./MobileMenuButton.vue";

export default {
  name: "ApplicationBar",
  components: {
    MobileMenuButton,
  },
  data() {
    return {
      onMobile: false,
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
  methods: {
    setOnMobile() {
      let width = window.innerWidth;
      if (width < 500) this.onMobile = true;
      else this.onMobile = false;
    },
  },
  mounted() {
    this.setOnMobile();
    window.onresize = this.setOnMobile;
  },
};
</script>

<style lang="sass" scoped>
#application-bar
  padding: 8px 16px
  width: 100%

  position: sticky
  top: 0

  backdrop-filter: blur(5px)

  span#brand-name
    font-size: 1.6rem

  .static-content
    width: 100%
    min-height: 48px

    display: flex
    flex-direction: row
    flex-wrap: nowrap
    align-items: center

  .extended-content
    margin-top: 8px
    margin-bottom: 8px
    width: 100%

    ul.nav-links
      padding: 0
      margin: 0

      display: flex
      flex-direction: row
      flex-wrap: nowrap
      align-items: center
      gap: 16px

      list-style-type: none

      li.nav-item
        .link
          position: relative

          color: inherit
          text-decoration: none
          text-transform: uppercase

        hr.underline
          margin: 0
          height: 2px
          width: 0px

          border: none
          border-radius: 3px

          background-color: #EEEEEE

          transition: all 0.5s ease-in-out

        &:hover hr.underline
            width: 100%
</style>
