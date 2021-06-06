<template>
  <div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th class="robot-title">Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td class="robot-title">
              {{ robot.head.title }}
            </td>
            <td class="cost">
              {{ robot.cost }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h1>Cart Sale Items</h1>
      <table>
        <thead>
          <tr>
            <th class="robot-title">Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cartSaleItems" :key="index">
            <td class="robot-title">
              {{ robot.head.title }}
            </td>
            <td class="cost">
              {{ robot.cost }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Cart",
  computed: {
    cart(): Record<string, unknown> {
      return this.$store.state.cart;
    },
    cartSaleItems() {
      return this.$store.getters.cartSaleItems;
    },
  },
};
</script>

<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
</style>
