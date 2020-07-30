<template>
  <section class="services-section">
    <h1>What we offer.</h1>
    <div class="grid">
      <div class="repair">
        <h2>
          Repairs on most
          <span v-for="(repair, index) in repairs" :key="repair">
            <span v-if="index == repairs.length - 1"> and </span> {{ repair
            }}<span v-if="index != repairs.length - 1">,</span
            ><span v-if="index == repairs.length - 1">.</span> </span
          >This includes, but not limited to, broken screens, batteries, etc.
        </h2>
      </div>

      <div class="upgrade">
        <h2>
          Currently we only offer upgrades on
          <span v-for="(upgrade, index) in upgrades" :key="upgrade">
            {{ upgrade }}<span v-if="index != upgrades.length - 1">,</span
            ><span v-if="index == upgrades.length - 1">.</span>
          </span>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      repairs: ["Androids", "iPods", "iPads", "Tablets", "Game Consoles", "Laptops"],
      upgrades: ["Laptops"]
    };
  }
};
</script>

<style>
.services-section {
  /* height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center; */
  /* padding: 0 10vw; */
  padding: 0.5em 1em;
  width: 75%;
  margin: 0 auto;
}
</style>
