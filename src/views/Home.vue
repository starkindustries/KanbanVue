<template>
  <div class="wrapper">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <Card person="Winnie" headerStyle="background-color: #9370db;" />
    <Card person="Thomas" headerStyle="background-color: #ffa500;" />
    <Card person="George" headerStyle="background-color: #98fb98;" />
    <Card person="Fred" headerStyle="background-color: #fa8072;" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "home",
  components: {
    Card
  }
};
</script>

<style>
.wrapper {
  display: flex;
  margin-left: 25px;
}
</style>
