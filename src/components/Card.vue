<template>
  <div class="card">
    <div class="cardHeader border" :style="headerStyle">{{ person }}</div>
    <div class="cardItem border">item1</div>
    <div class="cardItem border">item2</div>
    <div class="addItem" v-on:click="addItem">Add Item</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    person: String,
    headerStyle: String
  },
  methods: {
    addItem() {
      var test = prompt("Please add item", "");
      console.log("add item from: " + this.person + " " + test);
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
