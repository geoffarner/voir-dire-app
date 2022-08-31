<script>
import axios from "axios";
export default {
  data: function () {
    return {
      juror: {},
    };
  },
  created: function () {
    axios.get("/jurors/" + this.$route.params.id + ".json").then((response) => {
      console.log("jurors show", response);
      this.juror = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="jurors-show">
    <div class="container">
      <h2>{{ juror.name }}</h2>
    </div>
    <router-link to="/jurors">Back to all jurors</router-link>
  </div>
</template>
