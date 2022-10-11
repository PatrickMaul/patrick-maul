<template lang="pug">
#application-bar.container
  .static-content.flex-row-centered
    MobileMenuButton(:show="onMobile", :active-menu="activeMenu", @toggle-menu="$emit('toggleMenu')")
    span#brand-name Patrick Maul
    
  .extended-content(v-if="!onMobile")
    ul.nav-links.flex-row-centered
      li.nav-item(v-for="link in navLinks")
        router-link.nav-link(:to="link.to") {{ link.label }}
        hr.underline
</template>

<script>
import MobileMenuButton from "./mobile/MobileMenuButton.vue";

export default {
  name: "ApplicationBar",
  props: {
    navLinks: Array,
    activeMenu: Boolean,
  },
  components: {
    MobileMenuButton,
  },
  data() {
    return {
      onMobile: false,
    };
  },
  methods: {
    setOnMobile() {
      let width = window.innerWidth;
      // TODO: Set proper breakpoint
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
  width: 100%

  position: sticky
  top: 0

  backdrop-filter: blur(5px)
  .static-content
    width: 100%
    min-height: 48px

  .extended-content
    margin: 8px 0
    width: 100%

    ul.nav-links
      padding: 0
      margin: 0

      gap: 16px

      list-style-type: none

      li.nav-item

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
