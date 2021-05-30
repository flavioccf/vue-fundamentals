<template>
  <div class="content">
    <CollapsibleSection>
      <div class="preview">
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src" />
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left" />
            <img :src="selectedRobot.torso.src" />
            <img :src="selectedRobot.rightArm.src" class="rotate-right" />
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src" />
          </div>
        </div>
      </div>
    </CollapsibleSection>
    <div class="top-row">
      <!-- <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
      </div> -->
      <PartSelector
        :parts="availableParts.heads"
        position="top"
        @partSelected="(part) => (selectedRobot.head = part)"
      ></PartSelector>
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @partSelected="(part) => (selectedRobot.leftArm = part)"
      ></PartSelector>
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @partSelected="(part) => (selectedRobot.torso = part)"
      ></PartSelector>
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @partSelected="(part) => (selectedRobot.rightArm = part)"
      ></PartSelector>
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="(part) => (selectedRobot.base = part)"
      ></PartSelector>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import availableParts from "@/api/parts";
import createdHookMixin from "@/mixins/created-hook-mixin";
import PartSelector from "@/views/BuildView/PartSelector.vue";
import CollapsibleSection from "@/components/CollapsibleSection.vue";

export default Vue.extend({
  name: "RobotBuilder",
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) next(undefined);
    const response = confirm("You are leaving the page?");
    next(response ? undefined : false);
  },
  components: { PartSelector, CollapsibleSection },
  beforeCreate() {
    console.log("hey");
  },
  mixins: [createdHookMixin],
  data() {
    return {
      availableParts,
      addedToCart: false,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
    };
  },
  computed: {
    saleBorderClass() {
      const head: any = this.selectedRobot.head;
      return head.onSale ? "sale-border" : "";
    },
    headBorderStyle() {
      const head: any = this.selectedRobot.head;
      return { border: head.onSale ? "3px solid red" : "" };
    },
  },
  methods: {},
});
</script>

<style scoped lang="scss">
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale-border {
  border: 3px solid red;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
