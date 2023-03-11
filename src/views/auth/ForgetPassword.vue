<template>
  <div class="container mb-5" style="margin: 0 auto">
    <div class="row">
      <div class="col-lg-6 mt-5" style="padding-top: 7rem">
        <div class="text-center">
          <img
            src="../../../public/assets/logos/Qoeko-icon.png"
            height="91px"
          />
          <p class="mt-3" style="color: #2f2f2f; font-size: 17px">
            Enter the email address associated with <br />
            your account and we’ll send you a link to <br />
            reset your password
          </p>
        </div>

        <form
          action=""
          style="width: 75%; margin: 0 auto"
          class="mt-3"
          @submit.prevent="submitForm"
          id="forget_password"
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
            <label for="email" class="form-label">EMAIL</label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="youremail@gmail.com"
              name="email"
              v-model="email"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary card-btn-full p-3 mt-2"
            :disabled="loading"
          >
            Continue
          </button>
        </form>
      </div>

      <div class="col-lg-6" style="margin-top: 7rem">
        <img
          class="mt-5"
          src="../../../public/assets/img/forgetPassword.svg"
          width="70%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../Api";
export default {
  name: "ForgetPassword",
  data() {
    return {
      email: "",
      errors: [],
      loading: false,
      success: false,
    };
  },

  methods: {
    submitForm(e) {
      this.errors = [];
      this.loading = true;
      Api.axios_instance
        .post(Api.baseUrl + "auth/forgot-password/init", { email: this.email })
        .then((res) => {
          localStorage.setItem("email", this.email);
          this.$swal({
            position: "center",
            icon: "success",
            text: "A password reset link has been to your email.",
            showConfirmButton: false,
            width: "20rem",
            timer: 3000,
          });
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
    },
  },
};
</script>