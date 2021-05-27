<template>
  <div class="home">
    <div>
      <img
        src="@/assets/robot-home.png"
        alt=""
        class="robot"
        aria-hidden="true"
      />
      <div class="get-started">
        <a href="">Get started</a> building your first robot
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomePage extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  text-align: center;
  .robot {
    height: 30vh;
    max-height: 300px;
  }
}
</style>
