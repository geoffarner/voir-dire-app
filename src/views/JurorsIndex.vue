<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All Potential Jurors",
      jurors: [],
      currentJuror: {},
      nameFilter: "",
    };
  },

  created: function () {
    this.indexJurors();
  },

  methods: {
    indexJurors: function () {
      axios.get("/jurors.json").then((response) => {
        this.jurors = response.data;
        this.jurors = this.jurors.sort(function (a, b) {
          return a.panel_number - b.panel_number;
        });
        console.log("All Jurors:", this.jurors);
      });
    },
    filterJurors: function () {
      return this.jurors.filter((juror) => {
        var lowerName = juror.name.toLowerCase();
        var lowerNameFilter = this.nameFilter.toLowerCase();
        return lowerName.includes(lowerNameFilter) || juror.panel_number == this.nameFilter;
      });
    },
  },
};
</script>

<template>
  <h1>Search Jurors</h1>
  <h2>Enter Name or Panel Number</h2>
  <input v-model="nameFilter" list="names" type="text" placeholder="Name/Panel Number" />
  <button v-on:click="this.nameFilter = ''">Clear Search</button>
  <TransitionGroup name="list">
    <datalist id="names">
      <option v-for="juror in jurors" v-bind:key="juror.id">{{ juror.name }}</option>
    </datalist>
    <div
      v-for="juror in filterJurors()"
      v-bind:key="juror.id"
      v-on:click="currentJuror = juror"
      v-bind:class="{ selected: juror === currentJuror }"
    >
      <h4>Name: {{ juror.name }}</h4>
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
  </TransitionGroup>
</template>
