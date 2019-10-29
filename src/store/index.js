import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: {},
    actions: 0
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
        state.items[payload.key] = [];
      }
      // state.items[payload.key].push(payload.item);
      let items = state.items;
      items[payload.key].push(payload.item);
      state.items = items;
      state.actions += 1;
    },
    moveLeft(state, payload) {
      // verify payload key
      if (payload.key < 1) {
        console.log("Move left, invalid key: " + payload.key);
        return;
      }
      // check if array empty
      if (!state.items[payload.key - 1]) {
        state.items[payload.key - 1] = [];
      }

      // Verify item to move
      let itemToMove = state.items[payload.key][payload.itemIndex];
      if (!itemToMove) {
        console.log("item to move invalid: " + itemToMove);
        return;
      }

      // add item to adjacent card
      state.items[payload.key - 1].push(itemToMove);

      // remove item from current card
      state.items[payload.key].splice(payload.itemIndex, 1);

      state.actions += 1;
    },
    moveRight(state, payload) {
      // verify payload key, check if adjacent list is defined
      if (!state.items[payload.key + 1]) {
        state.items[payload.key + 1] = [];
      }

      // Verify item to move
      let itemToMove = state.items[payload.key][payload.itemIndex];
      if (!itemToMove) {
        console.log("item to move invalid: " + itemToMove);
        return;
      }

      // add item to adjacent card
      state.items[payload.key + 1].push(itemToMove);

      // remove item from current card
      state.items[payload.key].splice(payload.itemIndex, 1);

      state.actions += 1;
    }
  },
  actions: {
    addItem(state, payload) {
      state.commit("addItem", payload);
    },
    moveLeft(state, payload) {
      console.log("move left: " + payload);
      state.commit("moveLeft", payload);
    },
    moveRight(state, payload) {
      console.log("move right: " + payload);
      state.commit("moveRight", payload);
    }
  },
  modules: {}
});
