<template>
  <div>
    <div class="header">
      <span @click="open = !open">{{ open ? "Collapse" : "Extend" }}</span>
    </div>
    <slot v-if="open"></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CollapsibleSection",
  data() {
    return { open: true };
  },
});
</script>

<style scoped>
.header {
  background: gray;
  padding: 3px;
  cursor: pointer;
}
</style>
