<template>
  <div>
    <h2 class="title">{{ $route.params.part }}</h2>
    {{ description }}
    <div v-for="(part, idx) in parts" :key="idx">
      <h4>{{ part.title }}</h4>
      <div>{{ part.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import availableParts from "@/api/parts";

export default Vue.extend({
  name: "RobotPart",
  data() {
    return {};
  },
  computed: {
    parts() {
      const allParts: any = availableParts;
      return allParts[this.$route.params.part];
    },
    description() {
      let desc = "";
      switch (this.$route.params.part) {
        case "arms":
          desc =
            "The arms are how your robot will interact with the world. They come in a variety of shapes and functions.";
          break;
        case "heads":
          desc =
            "The head is where the brain of your robot will reside. Heads have different capabilities so be sure to choose the one that fits your needs.";
          break;
        case "bases":
          desc =
            "The Base is critical to the mobility of your robot. Be sure to choose a base that will work well with the terrain where your robot needs to operate.";
          break;
        case "torsos":
          desc =
            "The torso is the central part of your robot that holds everything together. Choosing the right torso will help ensure your robot functions well with the parts you choose.";
          break;
        default:
          desc = "Test";
          break;
      }
      return desc;
    },
  },
});
</script>

<style scoped>
.title {
  text-transform: capitalize;
}
</style>
