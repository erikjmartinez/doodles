<template>
  <div id="app">
    <i-container class="container">
      <i-row>
        <i-column class="divider" sm="6">
          <h1>Markdown</h1>
          <i-textarea v-model="text" rows="20" placeholder="Enter markdown here..." />
        </i-column>
        <i-column sm="6">
          <h1>Formatted Text</h1>
          <vue-markdown :source="text"></vue-markdown>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "App",
  components: {
    VueMarkdown
  },
  data() {
    return {
      text: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 40px;
}
.divider {
  border-right: 1px solid #000;
}
</style>
