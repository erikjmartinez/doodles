<template>
  <div id="app">
    <main>
      <nav-head></nav-head>
      <router-view />
    </main>
  </div>
</template>
<script>
import NavHead from "@/components/NavHead.vue";

export default {
  components: {
    NavHead
  }
};
</script>
