<script>
import axios from "axios";
export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    localStorage.setItem("flashMessage", "Logged Out!");
    this.$router.push("/logout");
  },
};
</script>

<template>
  <button id="logout-button" @click.prevent="handleLogout" :disabled="isLoggedOut">Log out</button>
</template>

<style scoped>
#logout-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
}

#logout-button[disabled] {
  background-color: lightgray;
  color: gray;
}
</style>
