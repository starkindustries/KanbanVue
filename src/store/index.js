import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: {}
  },
  mutations: {
    addItem(state, payload) {
      console.log("got here: " + payload.key + " " + payload.item);
      if (state.items[payload.key]) {
        console.log("array defined");
        state.items[payload.key].push(payload.item);
      } else {
        console.log("array not yet defined");
        state.items[payload.key] = [];
        state.items[payload.key].push(payload.item);
      }
    }
  },
  actions: {
    addItem(state, payload) {
      state.commit("addItem", payload);
    }
  },
  modules: {}
});
