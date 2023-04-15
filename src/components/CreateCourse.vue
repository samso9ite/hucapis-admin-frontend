<template>
  <div>
    <h6 style="font-weight: 400; font-size: 17px">
      CREATE NEW COURSE {{ mode }}
    </h6>
    <form action="">
      <div class="mb-3 mt-3">
        <label for="name" class="form-label">Course Title </label>
        <input
          type="text"
          class="form-control"
          placeholder=""
          v-model="course_title"
        />
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Course Cost</label>
        <input
          type="text"
          class="form-control"
          id="pwd"
          placeholder=""
          v-model="course_cost"
        />
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Course Thumbnail</label>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <uploader
          v-model="course_thumbnail"
          :limit="1"
          :autoUpload="false"
        ></uploader>
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Course Brief</label>
        <textarea
          rows="4"
          class="form-control"
          v-model="course_brief"
          v-on:change="preview()"
        ></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Key Take Away</label>
        <vue-editor v-model="key_take_away"></vue-editor>
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Expiry Period Type</label>
        <select class="form-select" v-model="expiryperiod_type">
          <option value="day">Day</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Expiry Period</label>
        <input
          type="number"
          class="form-control"
          id="pwd"
          placeholder=""
          v-model="expiry_period"
        />
      </div>

      <div class="mb-3">
        <label for="pwd" class="form-label">Select Instructors</label>
        <multiselect
          :multiple="true"
          v-model="selected_instructors"
          :clear-on-select="true"
          :searchable="true"
          :options="instructors"
          label="name"
          :valueProp="id"
          track-by="id"
        >
        </multiselect>
      </div>

      <span @click="createCourse" class="btn topic-btn mt-3">
        <span v-if="mode === 'editCourse'">Update Course </span>
        <span v-else> Create Course </span>
      </span>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Uploader from "vux-uploader-component";
import Api from "../views/Api";
import { mapGetters } from "vuex";
import Multiselect from "vue-multiselect";

export default {
  components: { VueEditor, Uploader, Multiselect },
  computed: { ...mapGetters({ instructors: "instructors" }) },
  props: ["mode", "course"],
  data() {
    return {
      course_title: "",
      course_cost: "",
      course_thumbnail: [],
      course_brief: "",
      key_take_away: "",
      topics: [],
      course_image: "",
      topic_name: "",
      content: "",
      topic_count: [],
      fileList: [],
      expiryperiod_type: "Year",
      expiry_period: "",
      selected_instructors: [],
      course_edit: {},
      course_id: "",
    };
  },

  watch: {
    "$store.state.course_edit": function () {
        console.log(this.$store.state.course_edit);
      this.course_edit = this.$store.state.course_edit[0];
      this.course_title = this.course_edit.title;
      this.course_cost = this.course_edit.cost;
      // this.course_thumbnail = this.course_edit.image
      this.course_brief = this.course_edit.description;
      this.key_take_away = this.course_edit.summary;
      this.expiryperiod_type = this.course_edit.expiryperiod_type;
      this.expiry_period = this.course_edit.expiry_period;
      this.selected_instructors = this.course_edit.instructors;
      this.course_id = this.course_edit.id;
    },
  },
  methods: {
    preview() {
      let courseData = {
        title: this.course_title,
        cost: this.course_cost,
        image: this.course_thumbnail,
        description: this.course_brief,
      };
      this.$emit("previewCourse", courseData);
    },

    addTopic() {
      this.topic_count.length;
    },
    createCourse() {
      let instructors = [];
      this.selected_instructors.map((instructor) => {
        let id = instructor.id.toString();
        instructors.push(id);
      });
      const formData = new FormData();

      console.log( this.course_thumbnail[0]);
      formData.append("title", this.course_title);
      formData.append("description", this.key_take_away);
      formData.append("cost", this.course_cost);
      formData.append("summary", this.course_brief);
      formData.append("thumbnail", this.course_thumbnail[0].blob);
      formData.append("expiryperiod_type", this.expiryperiod_type);
      formData.append("expiry_period", this.expiry_period);
      for (var i = 0; i < instructors.length; i++) {
        formData.append("instructor_ids[]", instructors[i]);
      }
      if (this.$route.path === "/course-upload") {
        Api.axios_instance
          .post(Api.baseUrl + "courses", formData, { headers: { "Content-Type": "multipart/form-data", "Accept": "application/json"}})
          .then((res) => {
            let course_id = res.data.data.id;
            localStorage.setItem("created_course_id", course_id);
            this.$emit("courseCreated", "shareFormula");
            this.$toastr.s("Course Created Successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Api.axios_instance
          .put(Api.baseUrl + "courses/" + this.course_id, formData, { headers: { "Content-Type": "multipart/form-data", "Accept": "application/json"}})
          .then((res) => {
            let course_id = res.data.data.id;
            localStorage.setItem("created_course_id", course_id);
            this.$emit("courseCreated");
            this.$toastr.s("Course Updated Successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>