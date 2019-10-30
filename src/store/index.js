import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: {}
  },
  getters: {
    getItemsById: state => id => {
      return state.items[id];
    }
  },
  mutations: {
    addItem(state, payload) {
      console.log("got here: " + payload.key + " " + payload.item);
      if (!state.items[payload.key]) {
        console.log("array not yet defined");

        /*
         * This line does not work because the property is not registered and will not be reactive
         * state.items[payload.key] = [];
         *
         * https://vuejs.org/v2/guide/reactivity.html
         * Due to the limitations of modern JavaScript (and the abandonment of Object.observe), Vue cannot detect property addition or deletion.
         * It’s possible to add reactive properties to a nested object using the Vue.set(object, propertyName, value) method
         */

        Vue.set(state.items, payload.key, []);
      }
      let items = state.items;
      items[payload.key].push(payload.item);
      state.items = items;
    },
    moveItem(state, payload) {
      // Check if target array is empty
      if (!state.items[payload.targetIndex]) {
        Vue.set(state.items, payload.targetIndex, []);
      }

      // Verify item to move
      let itemToMove = state.items[payload.key][payload.itemIndex];
      if (!itemToMove) {
        return;
      }

      // Add item to target card
      state.items[payload.targetIndex].push(itemToMove);

      // Remove item from current card
      state.items[payload.key].splice(payload.itemIndex, 1);
    }
  },
  actions: {
    addItem(state, payload) {
      state.commit("addItem", payload);
    },
    moveLeft(state, payload) {
      payload.targetIndex = payload.key - 1;
      console.log("move left: " + payload);
      state.commit("moveItem", payload);
    },
    moveRight(state, payload) {
      payload.targetIndex = payload.key + 1;
      console.log("move right: " + payload);
      state.commit("moveItem", payload);
    }
  },
  modules: {}
});
