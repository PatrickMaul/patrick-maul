<template lang="pug">
.burger-menu(v-if="show", @click="$emit('toggleMenu')")
  span.material-symbols-outlined menu
.filler(v-if="show")
</template>

<script>
export default {
  name: "MobileMenuButton",
  props: {
    show: Boolean,
  },
};
</script>

<style lang="sass" scoped>
.burger-menu
  margin: 0 8px 0 0
  display: flex

  cursor: pointer
  span.material-symbols-outlined
    font-size: 36px
.filler
  flex: 1
</style>
