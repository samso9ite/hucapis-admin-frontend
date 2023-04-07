<template>
  <div>
    <SideNav />
    <div class="main" style="">
      <TopHeader />
      <div class="container-fluid" style="padding: 1.3rem">
        <span>
          <a href="" style="padding-right: 2rem">Category 1</a>
          <a
            href=""
            style="padding-right: 2rem; text-decoration: none; color: black"
            >Category 2</a
          >
          <a
            href=""
            style="padding-right: 2rem; text-decoration: none; color: black"
            >Category 3</a
          >
          <a
            href=""
            style="padding-right: 2rem; text-decoration: none; color: black"
            >Category 4</a
          >
        </span>
        <span style="float: right"
          ><router-link :to="'/course-upload'">
            <div type="button" class="btn" style="background-color: #ffa360">
              Create Course
            </div>
          </router-link></span
        >
        <div class="col-lg-12 mt-5">
          <div class="row">
            <div class="col-md-4" v-for="course in allCourses" :key="course">
              <Course :course="course" /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/General/SideNav.vue";
import TopHeader from "@/components/General/TopHeader.vue";
import Api from "./Api";
import Course from "../components/General/Course.vue";
import { mapGetters } from "vuex";

export default {
  name: "Courses",
  computed: { ...mapGetters({ allCourses: "allCourses" }) },
  components: { SideNav, TopHeader, Course },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("AllCourses");
  },
};
</script>