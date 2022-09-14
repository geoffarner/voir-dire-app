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
          this.$router.push("/jurors");
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
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
  <h3>Guest Credentials</h3>
  <h4>Email:test@example.com</h4>
  <h4>Password:password</h4>
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
