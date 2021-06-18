<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form
            class="text-center border border-primary p-5"
            style="
              margin-top: 70px;
              height: auto;
              padding-top: 100px !important;
            "
            @submit.prevent="registerUser"
          >
            <h2 class="display-4">New User</h2>
            <br />
            <br />
            <br />
            <input
              type="text"
              id="name"
              class="form-control mb-5"
              placeholder="Username"
              v-model="register.username"
              required
            />
            <input
              type="email"
              id="email"
              class="form-control mb-5"
              placeholder="Email"
              v-model="register.email"
              required
            />
            <!-- Password -->
            <input
              type="password"
              id="password"
              class="form-control mb-5"
              placeholder="Password"
              v-model="register.password"
            />
            <p>
              Already have an account?
              <router-link to="/login">click here</router-link>
              <!-- Sign in button -->
              <center>
                <button
                  class="btn btn-primary btn-block w-75 my-4"
                  type="submit"
                >
                  Register
                </button>
              </center>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      register: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async registerUser() {
      if (
        !this.register.username ||
        !this.register.email ||
        !this.register.password
      ) {
        swal("Try Again!", "Fields cannot be blank");
        return;
      }
      try {
        let response = await axios.post("/api/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$root.$data.user = response.data.user;
          swal("Success", "Registration Was successful", "success");
          this.$router.push({
            path: "User",
            params: { id: this.$root.$data.user.username },
          });
        } else {
          swal("Error", "Something Went Wrong", "error");
          this.$root.$data.user = null;
        }
      } catch (err) {
        this.$root.$data.user = null;
        if (err == undefined || err.response == undefined) {
          swal("Error", "Failed to connect. Please try again later.", "error");
        } else if (err.response.status == 500) {
          swal("Error", "Server Error 500", "error");
        } else if (err.response.status == 409) {
          swal("Error", err.response.message, "error");
        } else {
          swal("Error", err.response.data.message, "error");
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 1em;
}
</style>
