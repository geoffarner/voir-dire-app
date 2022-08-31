<script>
import axios from "axios";

export default {
  data: function () {
    return {
      juror: {},
      editJurorParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/jurors/" + this.$route.params.id + ".json").then((response) => {
      console.log("jurors show", response);
      this.juror = response.data;
      this.editJurorParams = this.juror;
    });
  },
  methods: {
    updateJuror: function () {
      axios
        .patch("/jurors/" + this.$route.params.id + ".json", this.editJurorParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/jurors");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
<template>
  <div class="jurors-edit">
    <h1>Edit Juror</h1>
    <form v-on:submit.prevent="updateJuror(juror)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <p>Name:{{ juror.name }}</p>
      <p>Panel Number:{{ juror.panel_number }}</p>
      <div>
        Notes:
        <input type="text" v-model="editJurorParams.notes" />
      </div>
      <div>
        Jury Pool:
        <input type="text" v-model="editJurorParams.jury_pool" />
      </div>
      <div>
        Jury Box:
        <input type="text" v-model="editJurorParams.jury_box" />
      </div>
      <div>
        Jury Alternate:
        <input type="text" v-model="editJurorParams.jury_alternate" />
      </div>

      <input type="submit" value="Update" />
    </form>
  </div>
</template>
