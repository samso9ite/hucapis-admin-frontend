<template>
  <div class="container mb-5" style="margin: 0 auto">
    <div class="row">
      <div class="col-lg-6 mt-5" style="padding-top: 7rem">
        <div class="text-center">
          <img
            src="../../../public/assets/logos/Qoeko-icon.png"
            height="91px"
          />
          <h5 class="mt-3 auth-title">RESET PASSWORD</h5>
        </div>

        <form
          action=""
          style="width: 75%; margin: 0 auto"
          class="mt-3"
          @submit.prevent="submitForm"
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

          <div class="mb-3">
            <label for="new_password" class="form-label">New Password</label>
            <input
              type="password"
              class="form-control"
              id="email"
              placeholder=""
              v-model="new_password"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              placeholder=""
              name="password"
              v-model="confirm_password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary card-btn-full p-3 mt-2"
            :disabled="loading"
          >
            Reset my password
          </button>
        </form>
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
import Api from "../Api";
export default {
  name: "ResetPassword",
  data() {
    return {
      confirm_password: "",
      new_password: "",
      errors: [],
      loading: false,
      token: "",
      email: ''
    };
  },

  methods: {
    getToken(){
      this.token = this.$route.query.token;
      this.email = this.$route.query.email;
    },
    submitForm(e) {
      this.loading = true;
      if (this.confirm_password === this.new_password) {
        const formData = {
          new_password: this.new_password,
          token: this.token,
          email: this.email,
        };
        Api.axios_instance
          .post(Api.baseUrl + "auth/forgot-password/process", formData)
          .then((res) => {
            this.$swal({
              position: "center",
              icon: "success",
              text: "Your password has been reset, please proceed to login.",
              showConfirmButton: false,
              width: "20rem",
              timer: 3000,
            });
            this.$router.push("/sign-in");
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.data.message) {
                this.$toastr.e(error.response.data.message);
              }
              for (const property in error.response.data.errors) {
                this.errors.push(
                  `${error.response.data.errors[property]}`
                );
              }
            }
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.errors.push("Passowrd : Password Mismatch");
      }
    },
  },

  mounted(){
    this.getToken()
  }
};
</script>