<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="faded">
      <b-navbar-brand to="/" src="/images/logo.png" alt="logo"
        ><img id="logo" src="/images/logo.png" alt="logo"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/info">Info</b-nav-item>
          <b-nav-item href="https://cloud.greyl.dev/dynmap/">Map</b-nav-item>
          <b-nav-item to="/wiki">Wiki</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <i class="fas fa-user-circle"></i>
            </template>
            <b-dropdown-item
              to="/user/"
              +
              {{$root.$data.user.username}}
              v-if="isLoggedIn"
              >Profile</b-dropdown-item
            >
            <b-dropdown-item v-on="logUserOut" v-if="isLoggedIn"
              >Sign Out</b-dropdown-item
            >
            <b-dropdown-item to="/login" v-if="!isLoggedIn"
              >Sign In</b-dropdown-item
            >
            <b-dropdown-item to="/register" v-if="!isLoggedIn"
              >Register</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "Nav",
  methods: {
    getUserDetails() {
      if (this.$root.$data.user == null) {
        return null;
      }
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.$root.$data.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$root.$data.user = null;
      this.$router.push("/");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$root.$data.user !== null && this.$root.$data.user.token;
    },
  },
};
</script>

<style>
#logo {
  max-height: 10vh;
  width: auto;
}

a.nav-link {
  color: rgba(255, 255, 255, 0.87) !important;
  font-size: 2.75vh;
  margin: 1px 0.25em;
  padding: 0.5em 0.75em !important;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 2px;
}

a.dropdown-item {
  color: rgba(255, 255, 255, 0.87) !important;
  font-size: 2.5vh;
  margin-bottom: 0.25em;
}

a.dropdown-item:hover {
  text-decoration: none;
  color: #03dac6 !important;
  background-color: #121212c0;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 2px;
  border-color: #03dac6;
}

ul.dropdown-menu {
  color: #121212;
  border: 2px solid #03dac6;
  background-color: #12121263;
  padding: 0;
}

a:hover,
a:active {
  text-decoration: none;
  color: #03dac6 !important;
  border-color: #03dac6;
}

.header {
  height: min-content;
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 1;
  background: rgb(18, 18, 18);
  background: linear-gradient(
    0deg,
    rgba(18, 18, 18, 0.09707633053221287) 0%,
    rgba(18, 18, 18, 0.7245273109243697) 22%,
    rgba(18, 18, 18, 0.9822303921568627) 54%
  );
}
</style>
