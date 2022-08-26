<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All Potential Jurors",
      jurors: [],
    };
  },

  created: function () {
    this.indexJurors();
  },
  methods: {
    indexJurors: function () {
      axios.get("/jurors.json").then((response) => {
        console.log("jurors index", response);
        this.jurors = response.data;
      });
    },
  },
};
</script>

<template>
  <h1>ALL Jurors</h1>

  <div class="juror">
    <div v-for="juror in jurors" v-bind:key="juror.id">
      <p>Name: {{ juror.name }}</p>
    </div>
  </div>
</template>
