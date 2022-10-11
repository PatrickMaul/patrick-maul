<template lang="pug">
#home
  .hero
    span i'm a hero
</template>

<script>
export default {
  name: "Home",
  mounted() {
    const applicationBarHeight = document
      .getElementById("application-bar")
      .getBoundingClientRect().height;
    console.log(applicationBarHeight);

    const hero = document.getElementById("home");
    let homeContainerPadding = 16;

    hero.querySelector(".hero").style.height =
      window.innerHeight - applicationBarHeight - homeContainerPadding + "px";
  },
};
</script>

<style lang="sass" scoped>
.hero
  display: flex

  span
    margin: auto
</style>
