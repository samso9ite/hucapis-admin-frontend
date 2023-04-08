<template>
  <div
    class="card flex-row"
    style="padding: 3px; border: none; margin-bottom: 10px"
  >
    <img
      class="card-img-left example-card-img-responsive"
      src="assets/admin/top_course.svg"
    />
    <div class="card-body mt-3" style="padding-left: 3rem">
      <router-link :to="'/course-details/' + course.id" class="routerLink">
        <h5 class="card-title h5 h4-sm" style="font-weight: 400">
          {{ course.title }}
        </h5>
      </router-link>
      <p class="card-text">
        <img
          class="example-card-img-responsive"
          src="assets/admin/avatar1.svg"
          width="7%"
        />
        {{ course.instructors[0].name }}
        <span style="float: right; padding-right: 2rem"
          >{{ $n(course.cost, "currency", "ng-NG") }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Api from "../../views/Api";
export default {
  name: "CourseHorizontal",
  props: ["course"],
  computed: {},
  data() {
    return {};
  },

  methods: {
    deleteCourse(id) {
      console.log(id);
      Api.axios_instance.delete(Api.baseUrl + "courses/" + id).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
.routerLink {
  text-decoration: none !important;
  color: inherit;
}
</style>