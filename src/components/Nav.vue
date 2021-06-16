<template>
  <div class="nav">
    <b-navbar class="nav" toggleable="lg" type="dark" variant="faded">
      <b-navbar-brand to="/" src="images/logo.png" alt="logo"
        ><img id="logo" src="images/logo.png" alt="logo"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/map">Map</b-nav-item>
          <b-nav-item to="/wiki">Wiki</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <i class="fas fa-user-circle"></i>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
#logo {
  max-height: 10vh;
  width: auto;
  color: white;
}

.nav {
  height: fit-content;
  width: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
  top: 0;
  position: sticky !important;
}
</style>
