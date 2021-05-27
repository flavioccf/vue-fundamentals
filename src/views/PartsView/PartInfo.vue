<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PartInfo",
  data() {
    return {
      part: {
        title: "Part Title",
        description: "PartDescription",
      },
    };
  },
  created() {
    const parts = this.$route.params.parts;
    console.log(JSON.parse(parts));
    this.part = JSON.parse(parts);
  },
});
</script>

<style scoped></style>
