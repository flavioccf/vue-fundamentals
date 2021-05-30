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
import availableParts from "@/api/parts";

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
      this.part = JSON.parse(parts);
    } else {
      const availablePart: any = availableParts;
      this.part = availablePart[this.partType][this.id];
    }
  },
});
</script>

<style scoped></style>
