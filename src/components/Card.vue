<template>
  <div class="card">
    <div class="cardHeader border" :style="headerStyle">{{ person }}</div>
    <div class="cardItem border">item1</div>
    <div
      class="cardItem border"
      v-for="(item, index) in items[this.index]"
      :key="index"
    >
      <button v-if="enableLeft" v-on:click="didClickLeft">&lt;</button>
      {{ item }}
      <button v-if="enableRight" v-on:click="didClickRight">&gt;</button>
    </div>
    <div class="addItem" v-on:click="addItem">Add Item</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Card",
  props: {
    index: Number,
    person: String,
    headerStyle: String,
    enableLeft: Boolean,
    enableRight: Boolean
  },
  methods: {
    addItem() {
      var itemText = prompt("Please add item", "");
      if (!itemText || itemText === null || itemText === "") {
        console.log("input empty");
        return;
      }
      console.log("add item from: " + this.person + " " + itemText);
      this.$store.dispatch("addItem", { key: this.index, item: itemText });
      this.$forceUpdate();
    },
    didClickLeft() {
      console.log("did click left");
      if (!this.enableLeft) {
        console.log("left not enabled. this should not happen..");
        return;
      }
      // need index as key
      // need card index
      // need direction: left or right
    },
    didClickRight() {
      console.log("did click right");
      if (!this.enableRight) {
        console.log("right not enabled. this should not happen..");
        return;
      }
    }
  },
  computed: {
    ...mapState({
      items: "items"
    }),
    // other stuff
    myItems() {
      // figure out why this isn't working later
      return this.items[this.index];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  /*background-color: black;*/
  flex: 1;
  margin: 0px 25px 0px 0px;
}
.border {
  border: 1px solid gray;
}
.addItem {
  color: gray;
}
</style>
