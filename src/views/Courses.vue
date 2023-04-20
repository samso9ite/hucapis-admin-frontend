<template>
  <div>
    <SideNav />
    <div class="main" style="">
      <TopHeader />
      <div class="container-fluid" style="padding: 1.3rem">
        <span>
        Categories:  <a  style="padding-right: 2rem; text-decoration: none; color: black; cursor:pointer" v-for="category in categories.slice(0,8)" :key="category" @click="filterByCategory(category.id)">{{ category.name }}</a>
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
            <div class="col-md-3" v-for="course in allCourses.data" :key="course.id">
              <Course  :course="course" /><br />
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <Pagination 
            :items="allCourses.data" 
            @changePage="onChangePage" 
            :maxPages="allCourses.last_page" 
            :totalItems="allCourses.total"
            :pageSize="allCourses.per_page"></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/General/SideNav.vue";
import TopHeader from "@/components/General/TopHeader.vue";
import Course from "../components/General/Course.vue";
import { mapGetters } from "vuex";
import Pagination from '../components/General/Pagination.vue';
import Api from './Api';

export default {
  name: "Courses",
  computed: { ...mapGetters({ allCourses: "allCourses", categories:"allCategory" }) },
  components: { SideNav, TopHeader, Course, Pagination },
  data() {
    return {
        per_page: 16,
    };
  },
  mounted() {
    this.$store.dispatch("AllCourses", 1, this.per_page);
  },
  methods: {
    onChangePage(pageOfItems) {
        this.$store.dispatch("AllCourses", pageOfItems.currentPage, this.per_page);
    },
    filterByCategory(id){
      console.log(id);
        Api.axios_instance.get(Api.baseUrl+'courses?category_id'+id)
        .then(res => {
          console.log(res);
          // this.$store.commit()
        })
    }
  }
};
</script>