<template lang="pug">
.mobile-menu(:class="activeClass")
  .nav-links.container
    .nav-item(v-for="link in navLinks")
      router-link.nav-link(:to="link.to", @click="$emit('closeMenu')") {{ link.label }}
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    show: Boolean,
    navLinks: Array,
  },
  computed: {
    activeClass() {
      if (this.show) return "active";
      else return "";
    },
  },
};
</script>

<style lang="sass" scoped>
@keyframes openMenu
  0%
    width: 0px
    height: 0px
    padding: 0px
  100%
    width: 100%
    height: 100%
    padding: 0px 16px

.mobile-menu
  height: 0px
  width: 0px
  padding: 0px
  overflow: hidden

  position: absolute

  background: $app-bg

  &.active
    animation: openMenu 0.3s
    animation-fill-mode: forwards

  .nav-links
    display: flex
    flex-direction: column
    gap: 16px
    .nav-item
      margin: 0 auto 0 auto
      width: max-content
</style>
