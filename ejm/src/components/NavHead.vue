<template>
  <section class="nav-head">
    <header class="page-header">
      <h1>Em's Tech Repair</h1>
      <small>We got you c<span>&#9881;&#65039;</span>vered.</small>
    </header>
    <scrollactive
      class="action"
      :offset="offset"
      :always-track="alwaysTrack"
      :duration="duration"
      :click-to-scroll="clickToScroll"
      :bezier-easing-value="easing"
    >
      <span @click="actionToggle()">+</span>
      <ul>
        <li>
          <a href="#home" class="scrollactive-item"
            ><img class="hover-img" src="@/assets/img/home-hover.svg" alt="Home icon" />
            <img class="top-img" src="@/assets/img/home.svg" alt="Home icon" />Home</a
          >
        </li>
        <li>
          <a href="#about" class="scrollactive-item"
            ><img src="@/assets/img/user.svg" alt="About icon" />About</a
          >
        </li>
        <li>
          <a href="#services" class="scrollactive-item"
            ><img src="@/assets/img/tools.svg" alt="Skills icon" />Services</a
          >
        </li>
      </ul>
    </scrollactive>
  </section>
</template>

<script>
export default {
  name: "NavHead",
  data() {
    return {
      alwaysTrack: false,
      duration: 600,
      clickToScroll: true,
      offset: 52,
      easing: ".5,0,.35,1"
    };
  },
  methods: {
    actionToggle() {
      let action = document.querySelector(".action");
      action.classList.toggle("active");
    }
  }
};
</script>
<style lang="scss"></style>
