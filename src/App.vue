<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img src="./assets/build-a-bot-logo.png" alt="" class="logo" />
            Build-a-bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RobotBuilder />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePage from "@/views/HomeView/HomePage.vue";
import RobotBuilder from "@/views/BuildView/RobotBuilder.vue";

@Component({
  components: {
    HomePage,
    RobotBuilder,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
  margin: 0 auto;
}
</style>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  main {
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    width: 80%;
  }
  header {
    background-color: #999;
    width: 80%;
    margin: 0 auto;
    ul {
      padding: 3px;
      display: flex;
      .nav-item {
        display: inline-block;
        padding: 5px 10px;
        font-size: 22px;
        border-right: 1px solid #bbb;
        .logo {
          vertical-align: middle;
          height: 30px;
        }
      }
    }
  }
}
</style>
