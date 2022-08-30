<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/login">Log In</router-link>
    |
    <router-link to="/logout">Logout</router-link>
    |
    <router-link to="/jurors">All Jurors</router-link>
    |
    <router-link to="/jurors/:id">Juror Search</router-link>
    |
    <router-link to="">Juror Selection</router-link>
    |
    <router-link to="">Jury Box</router-link>
    |
    <router-link to="">Charts</router-link>
  </nav>
  <h1 style="font-size: 60px">Voir Dire</h1>

  <router-view />
  <footer style="color: chartreuse">
    This website created and maintained by A.LLC
    <p>Copyright 2020</p>
  </footer>
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

nav {
  padding: 30px;
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
  color: rgb(14, 6, 241);
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: rgb(3, 248, 89);
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: rgb(8, 210, 210);
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
