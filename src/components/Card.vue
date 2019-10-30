<template>
  <div class="card">
    <div class="cardHeader border" :style="headerStyle">{{ person }}</div>
    <div class="cardItem border">item1</div>
    <div
      class="cardItem border"
      v-for="(item, itemIndex) in getItemsById(index)"
      :key="itemIndex"
    >
      <button v-if="enableLeft" v-on:click="didClickLeft(itemIndex)">
        &lt;
      </button>
      {{ item }}
      <button v-if="enableRight" v-on:click="didClickRight(itemIndex)">
        &gt;
      </button>
    </div>
    <div class="addItem" v-on:click="addItem">Add Item</div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from "vuex";

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
    },
    didClickLeft(itemIndex) {
      console.log("did click left for item index: " + itemIndex);
      if (!this.enableLeft) {
        console.log("left not enabled. this should not happen..");
        return;
      }
      // need index as key
      // need card index
      this.$store.dispatch("moveLeft", {
        key: this.index,
        itemIndex: itemIndex
      });
    },
    didClickRight(itemIndex) {
      console.log("did click right for item index: " + itemIndex);
      if (!this.enableRight) {
        console.log("right not enabled. this should not happen..");
        return;
      }
      this.$store.dispatch("moveRight", {
        key: this.index,
        itemIndex: itemIndex
      });
    }
  },
  computed: {
    /*
    ...mapState({
      numActions: "actions"
    }),*/
    ...mapGetters({
      getItemsById: "getItemsById"
    })
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
