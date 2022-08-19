<template>
  <div class="home">
    <img alt="ladyjustice.jpeg" src="../assets/ladyjustice.jpeg" />
    <HelloWorld msg="Welcome to Voir Dire" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
