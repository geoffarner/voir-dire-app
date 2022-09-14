<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
      flashMessage: "Hello!",
    };
  },
  methods: {
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
      this.flashMessage = localStorage.getItem("flashMessage");
      localStorage.removeItem("flashMessage");
    },
  },
};
</script>
<template>
  <header>
    <h1 style="font-size: 60px">Voir Dire</h1>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Log In</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <span v-if="!!isLoggedIn">
        <router-link to="/jurors">All Jurors</router-link>
      </span>
      |
      <router-link v-if="!!isLoggedIn" to="/jurors/chart">Charts</router-link>
      |
      <!-- <router-link v-if="!!isLoggedIn" to="/jurors/charttest">TestChart</router-link> -->
      <!-- |
      <!- <router-link v-if="!!isLoggedIn" to="/jurors/jurybox">Jury Box</router-link> -->
      <!-- | -->
      <router-link v-if="!!isLoggedIn" to="/jurors/juryboxtest">Jury Box Test</router-link>
    </nav>
  </header>
  <router-view />
  <div>
    <v-footer>
      This website created and maintained by Geoff Arner
      <p>Copyright 2020</p>
      <div>
        <router-link to="/">Home</router-link>
      </div>
      ;
    </v-footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f7eb05;
  text-shadow: 6px 2px 5px rgb(6, 6, 6);
}
#footer {
  position: bottom;
  padding: 20px;
}
nav {
  padding: 5px;
}
/* nav a {
  font-weight: bold;
  color: #f90505;
  background-color: transparent;
}

nav a.router-link-exact-active {
  color: #1d05f9;
} */
a:link {
  color: rgb(3, 248, 89);
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: rgb(3, 248, 89);
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: rgb(3, 210, 210);
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
body {
  background-image: url("./assets/HD-wallpaper-judge,-hammer,-law,-gavel,-justice-concept-.jpeg");
}
</style>
