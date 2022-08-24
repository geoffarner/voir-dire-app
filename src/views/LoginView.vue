<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/post");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="email">
        <label>Email:</label>
        <input
          class="form-control form-control-sm"
          type="email"
          placeholder="Example@example.com"
          aria-label=".form-control-sm"
          v-model="newSessionParams.email"
        />
      </div>
      <div class="password">
        <label>Password:</label>
        <input
          class="form-control form-control-sm"
          type="password"
          placeholder="Type in your incredibly unique password"
          aria-label=".form-control-sm"
          v-model="newSessionParams.email"
        />
      </div>
    </form>
  </div>
</template>

<style>
.login {
  font-size: large;
  font-style: bold;
  font-weight: bolder;
}
.email {
  width: 50%;
  text-align: left;
  align-content: center;
  margin: auto;
  padding: 10px;
}
.password {
  width: 50%;
  text-align: left;
  align-content: center;
  margin: auto;
  padding: 10px;
}
</style>
