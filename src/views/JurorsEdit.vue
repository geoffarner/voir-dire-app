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
    axios.get("/jurors/" + this.$route.params.id).then((response) => {
      this.juror = response.data;
      this.editJurorParams = this.juror;
    });
  },
  methods: {
    updateJuror: function (juror) {
      axios
        .patch("/jurors/" + juror.id, this.editJurorParams)
        .then((response) => {
          console.log("jurors update", response);
          this.$router.push("/jurors");
        })
        .catch((error) => {
          console.log("jurors update error", error.response);
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
      <p>{{ juror.name }}</p>
      <p>{{ juror.panel_number }}</p>
      Notes:
      <input type="text" v-model="editJurorParams.notes" />
      | Jury Pool:
      <input type="text" v-model="editJurorParams.jury_pool" />
      | Jury Box:
      <input type="text" v-model="editJurorParams.jury_box" />
      | Jury Alternate:
      <input type="text" v-model="editJurorParams.alternate" />
      |
      <input type="submit" value="Update" />
    </form>
  </div>
</template>
