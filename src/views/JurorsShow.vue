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
      this.juror = response.data;
      console.log("jurors show", response);
    });
  },
  methods: {},
};
</script>

<template>
  <div class="jurors-show">
    <div class="container">
      <h2>{{ juror.name }}</h2>
      <router-link v-bind:to="`/jurors/${juror.id}/edit`">Edit Juror</router-link>
      <p>Panel Number: {{ juror.panel_number }}</p>
      <p>Age: {{ juror.age }}</p>
      <p>Sex: {{ juror.sex }}</p>
      <p>Residence: {{ juror.residence }}</p>
      <p>Housing: {{ juror.housing }}</p>
      <p>Education: {{ juror.education }}</p>
      <p>Law Experience: {{ juror.law_experience }}</p>
      <p>Occupation: {{ juror.occupation }}</p>
      <p>Military Service: {{ juror.military_service }}</p>
      <p>Jury Relation: {{ juror.jury_relation }}</p>
      <p>Prior Jury: {{ juror.prior_jury }}</p>
      <p>Notes: {{ juror.notes }}</p>
      <p>Jury Pool: {{ juror.jury_pool }}</p>
      <p>Jury Box: {{ juror.jury_box }}</p>
      <p>Jury Alternate: {{ juror.jury_alternate }}</p>
    </div>
    <router-link to="/jurors">Back to all jurors</router-link>
  </div>
</template>
