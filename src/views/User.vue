<template>
  <div class="user">
    <div class="profile" v-if="isLoggedIn">
      <UserProfile />
    </div>
    <div class="register" v-else>
      <h1>You are not logged in</h1>
      <p>Click <a to="/login">Here</a> to login</p>
    </div>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile";
export default {
  components: {
    UserProfile,
  },
  computed: {
    isLoggedIn() {
      return this.$root.$data.user !== null && this.$root.$data.user.token;
    },
  },
};
</script>
