<template lang="pug">
.mobile-menu-button(v-if="show", @click="$emit('toggleMenu')")
  span.material-symbols-outlined {{activeMenu ? 'close': 'menu' }}
.filler(v-if="show")
</template>

<script>
export default {
  name: "MobileMenuButton",
  props: {
    show: Boolean,
    activeMenu: Boolean,
  },
};
</script>

<style lang="sass" scoped>
.mobile-menu-button
  margin: 0 8px 0 0
  display: flex

  cursor: pointer
  span.material-symbols-outlined
    font-size: 36px
</style>
