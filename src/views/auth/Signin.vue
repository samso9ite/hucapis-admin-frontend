<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-6 mt-5">
        <div class="text-center">
          <img
            src="../../../public/assets/logos/Qoeko-icon.png"
            height="91px"
          />
          <h4 class="auth-title mt-5">SIGN IN TO YOUR HUCAPIS ACCOUNT</h4>
          <p style="color: #2f2f2f">
            Not a member yet?
            <b
              ><a style="color: #2f2f2f">
                <router-link to="/sign-up"> Create an account </router-link>
              </a></b
            >
          </p>
        </div>

        <form
          @submit.prevent="submitForm"
          action=""
          style="width: 75%; margin: 0 auto"
        >
          <div
            class="alert alert-danger alert-dismissible alert-alt"
            width="60%"
            v-if="errors.length"
          >
            <span v-for="error in errors" :key="error"
              ><strong>{{ error }}</strong></span
            >
          </div>
          <div class="mb-3 mt-5">
            <label for="name" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder=""
              name="email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="pwd" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              v-model="password"
            />
            <span style="float: right">
              <router-link to="/forget-password">
                Forget Password?
              </router-link></span
            >
          </div>

          <div>
            <button
              type="submit"
              class="btn btn-primary card-btn-full mt-4 p-2"
              :disabled="loading"
            >
              Submit</button
            ><br /><br />
          </div>
        </form>
        <div class="container mt-5 text-center">
          <p class="text-center mt-5" style="font-size: 19px">Or Login Using</p>
          <button
            type="submit"
            class="btn btn-large mt-4"
            style="background-color: #1195f4; color: white"
          >
            <img src="/assets/img/fb.svg" width="50px" /> Facebook
          </button>
          <button
            type="submit"
            class="btn btn-large mt-4"
            style="background-color: #eb4335; color: white; padding-left: 35px"
          >
            <img src="/assets/img/google.svg" width="50px" /> Google
          </button>
        </div>
      </div>

      <div class="col-lg-6 d-none d-sm-block" style="margin-top: 7rem">
        <img
          class="mt-5"
          src="../../../public/assets/img/secure_login.svg"
          width="70%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
import Api from "../Api";
export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errors: [],
    };
  },
  methods: {
    ...mapActions(["LogIn", "SetToken"]),
    submitForm(e) {
      this.errors = [];
      this.loading = true;
      const formData = {
        email: this.email,
        password: this.password,
      };
      Api.axios_instance
        .post(Api.baseUrl + "auth/login", formData)
        .then(async (res) => {

          sessionStorage.setItem("name", res.data.message.user.name);
          sessionStorage.setItem("email", res.data.message.user.email);
          sessionStorage.setItem("token", res.data.message.token);
          sessionStorage.setItem("phone", res.data.message.user.phone_number);
          sessionStorage.setItem("photo", res.data.message.user.photo);
          this.$router.push("/courses");
          
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data.message) {
              this.$toastr.e(
                error.response.data.message
              );
            }
            for (const property in error.response.data.errors) {
              this.errors.push(
                `${property} : ${error.response.data.errors[property]}`
              );
            }
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  components: { router },
};
</script>