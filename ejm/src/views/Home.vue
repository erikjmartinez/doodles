<template>
  <div class="component-container">
    <about class="about-component"></about>
    <services class="services-component"></services>
  </div>
</template>

<script>
const Services = () => import("@/views/Services.vue");
const About = () => import("@/views/About.vue");

export default {
  name: "Home",
  components: {
    Services,
    About
  }
};
</script>
