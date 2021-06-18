<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

html,
body,
#app {
  background: #121212;
}

h1,
h2,
h3 {
  color: rgba(255, 255, 255, 0.87);
}

p {
  color: rgba(255, 255, 255, 0.6);
}

.disabled {
  color: rgba(255, 255, 255, 0.38);
}

#app {
  text-align: center;
  padding-bottom: 15vh;
  position: relative;
  min-height: 100vh;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.btn {
  margin: 1em;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
