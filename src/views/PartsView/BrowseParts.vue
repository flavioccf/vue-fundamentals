<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li>
        <router-link
          :to="{
            name: 'RobotPart',
            params: {
              part: 'heads',
            },
          }"
          >Heads</router-link
        >
      </li>
      <li>
        <router-link
          :to="{
            name: 'RobotPart',
            params: {
              part: 'arms',
            },
          }"
          >Arms</router-link
        >
      </li>
      <li>
        <router-link
          :to="{
            name: 'RobotPart',
            params: {
              part: 'torsos',
            },
          }"
          >Torsos</router-link
        >
      </li>
      <li>
        <router-link
          :to="{
            name: 'RobotPart',
            params: {
              part: 'bases',
            },
          }"
          >Bases</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BrowseParts",
});
</script>

<style scoped>
h1 {
  text-align: center;
}
.menu {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
  font-size: 20px;
}
ul {
  list-style-type: none;
}
a {
  color: palevioletred;
}
</style>
