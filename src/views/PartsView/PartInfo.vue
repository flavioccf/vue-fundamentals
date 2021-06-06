<template>
  <div>
    {{ id }}
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
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
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
    if (parts) {
      console.log("im here");
      this.part = JSON.parse(parts);
    } else {
      console.log("running here");
      this.$store.dispatch("getParts");
      const availablePart: any = this.$store.state.parts;
      this.part = availablePart[this.partType][this.id];
    }
  },
});
</script>

<style scoped></style>
