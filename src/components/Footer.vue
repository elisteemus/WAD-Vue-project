<template>
  <div>
    <div id="footer">
      <p>&copy; postIt 2021</p>
      <router-link to="/contact">Contact us</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  padding: 30px;

  a {
    font-weight: bold;
    font-family: "Courier New", Courier, monospace;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #5ca3f5;
    }
  }
}
</style>