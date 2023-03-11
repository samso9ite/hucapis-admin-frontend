<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-6 mt-5">
        <div class="text-center">
          <img
            src="../../../public/assets/logos/Qoeko-icon.png"
            height="91px"
          />
          <h4 class="auth-title mt-5">VERIFY YOUR HUCAPIS ACCOUNT</h4>
          <p style="color: #2f2f2f">
            Already a member?
            <b><a href="#" style="color: #2f2f2f">Sign in</a></b>
          </p>
        </div>
        <div
          class="alert alert-danger alert-dismissible alert-alt"
          width="60%"
          v-if="errors.length"
        >
          <span v-for="error in errors" :key="error"
            ><strong>{{ error }}</strong></span
          >
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
import Api from "../Api";
export default {
  name: "Verification",
  data() {
    return {
      output: "",
      errors: [],
      success: false,
    };
  },
  methods: {
    getToken() {
      let token = this.$route.query.token;
      let email = this.$route.query.email;
      const formData = {
        token: token,
        email_address: email,
      };
      Api.axios_instance
        .post(Api.baseUrl + "auth/email-verify/verify", formData)
        .then((res) => {
          this.$swal({
            position: "center",
            icon: "success",
            text: "Email verified, Please proceed to login.",
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
        });
    },
  },
  mounted() {
    this.getToken();
  },
};
</script>