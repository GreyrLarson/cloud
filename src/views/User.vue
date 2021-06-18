<template>
  <div class="user">
    <h2>Name : {{ user.username }}</h2>
    <p>Email : {{ user.username }}</p>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
  computed: {
    isLoggedIn() {
      return this.$root.$data.user !== null && this.$root.$data.user.token;
    },
  },
};
</script>
