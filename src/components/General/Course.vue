<template>
  <a :href="'/course-details/' + course.id" class="routerLink">
    <div class="card" style="background-color: #fff">
      <img
        class="card-img-top cardImgSize"
        :src="image_path()"
        alt="Course thumbnail"
      />
      <div
        class="card-img-overlay"
        @click="deleteCourse(course.id)"
        v-if="current_path === 'Tutor'"
      >
        <img src="../../../public/assets/adminNew/trash.svg" width="30px" />
      </div>

      <div class="card-body">
        <h5 class="card-title text-uppercase">
          {{ course.title | truncate(15) }} 
        </h5>
        <p class="card-text" :inner-html.prop="course.summary | truncate(50)"></p>

        <span v-if="current_path === 'Courses'">
          <img
            src="../../../public/assets/img/courses/floyd.svg"
            width="40px"
            alt="Image"
          />
          {{ course.instructors[0].name }}</span
        ><span style="float: right"
          >5
          <i
            class="fa fa-star"
            aria-hidden="true"
            style="color: #ffa360"
          ></i> </span
        ><br />
        <div class="div mt-4">
          <span class="card-price"> ₦{{ course.cost }}</span>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { mapGetters } from "vuex";
import Api from "../../views/Api";
export default {
  props: ["course"],
  computed: {
    current_path: function () {
      let path = "";
      if (this.$route.path === "/tutors/" + this.$route.params.id) {
        path = "Tutor";
        return path;
      } else {
        return "Courses";
      }
    },
    
  },
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
    image_path() {
        return this.course.media && this.course.media.length > 0 ? `https://hucaplms.king.name.ng/public/storage/${this.course.media[0].id}/${this.course.media[0].file_name}` : 'assets/img/courses/course1.svg'
    }
  },
};
</script>

<style scoped>
.routerLink {
  text-decoration: none !important;
  color: inherit;
}

.card{
  width: auto;
  height: 70vh;
}

.cardImgSize{
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>