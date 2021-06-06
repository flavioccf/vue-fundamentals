import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Part, Robot } from "@/interfaces/index";

Vue.use(Vuex);

const initialCart: Array<Robot> = [];

export default new Vuex.Store({
  state: {
    cart: initialCart,
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot: Robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    async getParts({ commit }) {
      try {
        const partsData = await axios.get("/api/parts");
        commit("updateParts", partsData.data);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
  modules: {},
});
