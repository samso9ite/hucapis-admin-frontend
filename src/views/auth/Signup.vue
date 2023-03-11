<template>
  <div>
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
              Already a member?
              <b
                ><a style="color: #2f2f2f"
                  >
                  <router-link to="/sign-in">
                    Signin to your account
                  </router-link>
                  </a
                ></b
              >
            </p>
          </div>
          <!-- Error Alert -->

          <form
            id="registerForm"
            style="width: 75%; margin: 0 auto"
            @submit.prevent="submitForm"
          >
            <div
              class="alert alert-success alert-dismissible alert-alt"
              width="60%"
              v-if="success"
            >
              <span><strong>A verification link has been sent to your email.</strong></span>
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
            <div class="mb-3 mt-3">
              <label for="name" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="name"
              />
            </div>
            <div class="mb-3 mt-3">
              <label for="name" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="last_name"
              />
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="youremail@gmail.com"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">Phone Number</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="phone"
              />
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">Username (Optional)</label>
              <input type="text" class="form-control" v-model="username" />
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                v-model="confirm_password"
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary card-btn-full"
              :disabled="loading"
            >
              Submit
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
  </div>
</template>

<script>
import Api from "../Api";
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      name: "",
      last_name: "",
      middle_name: "",
      name_on_certificate: "",
      phone: "",
      username: "",
      password: "",
      confirm_password: "",
      loading: false,
      errors: [],
      success: false,
    };
  },

  methods: {
    async submitForm(e) {
      this.errors = [];
      this.loading = true;
      if (this.password === this.confirm_password) {
        const formData = {
          email: this.email,
          name: this.name,
          last_name: this.last_name,
          middle_name: this.middle_name,
          name_on_certificate: this.name_on_certificate,
          password: this.password,
          phone_number: this.phone,
          username: this.username,
        };
        await Api.axios_instance
          .post(Api.baseUrl + "auth/register", formData)
          .then((res) => {
            if (res.data.success) {
              Api.axios_instance
                .post(Api.baseUrl + "auth/email-verify/send", {
                  email_address: this.email,
                })
                .then((res) => {
                  document.getElementById("registerForm").reset();
                  this.$swal({
                    position: "center",
                    icon: "success",
                    text: "An activation link has been sent to your email.",
                    showConfirmButton: false,
                    width: "20rem",
                    timer: 3000,
                  });
                });
            }
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
      } else {
        this.errors.push("Passowrd : Password Mismatch");
      }
      this.loading = false;
    },
  },
};
</script>