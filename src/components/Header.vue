<template>
  <img alt="logo" src="../assets/logo.png" width="100" height="50" />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact us</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    font-family: "Courier New", Courier, monospace;
    font-size: 20px;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #5ca3f5;
    }
  }
}
</style>