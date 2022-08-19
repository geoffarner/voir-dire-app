<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f306;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #f90505;
}

nav a.router-link-exact-active {
  color: #f90505;
}

body {
  background-image: url("./assets/HD-wallpaper-judge,-hammer,-law,-gavel,-justice-concept-.jpeg");
}
</style>
