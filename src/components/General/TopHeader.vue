<template>
  <div>
    <div
      class="navbar navbar-expand-lg col-lg-12"
      style="background-color: #fff; padding: 1.7rem; margin-bottom: 0.5rem"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse row">
        <div class="col-lg-6">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search courses ..."
              @change="searchCourses()"
              v-model="search_text"
              style="border: 1px solid #b3b3b3"
            />
          </div>
        </div>
        <div class="col-lg-3"></div>
        <div class="col-lg-3 d-flex justify-content-end" style="float: right">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li class="nav-item mt-2">
              <img
                src="../../../public/assets/admin/bell.svg"
                style="padding-right: 3rem"
              />
            </li>
            <li class="nav-item mt-2">
              <img src="../../../public/assets/admin/profile.svg" />
            </li>
            <li class="nav-item dropdown">
              <b-dropdown
                style="margin-top: 10px"
                variant="outline"
                id="dropdown-1"
                :text="`Hi! ${user.name} `"
              >
                <b-dropdown-item><router-link :to="'/profile'">Profile </router-link></b-dropdown-item>
                <b-dropdown-item
                  ><span @click="logout">Logout</span></b-dropdown-item
                >
              </b-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search_text: ''
    };
  },
  computed: {
    ...mapGetters({
      user: "StateUser",
      recommendedCourses: "recommendedCourses",
      token: "token",
    }),
  },

  methods: {
    logout() {
      this.$store.dispatch("LogOut");
      this.$router.push("/sign-in");
    },
    searchCourses(){

    }
  },
};
</script>
