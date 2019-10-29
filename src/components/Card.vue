<template>
  <div class="card">
    <div class="cardHeader" :style="headerStyle">{{ person }}</div>
    <div class="cardItem">item1</div>
    <div class="cardItem">item2</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    person: String,
    headerStyle: String
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
</style>
