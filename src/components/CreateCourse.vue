<template>
    <div>
        <h6 style="font-weight:400; font-size:17px">CREATE NEW COURSE</h6>
                <form action="" >
                    <div class="mb-3 mt-3">
                    <label for="name" class="form-label">Course Title </label>
                    <input type="text" class="form-control" placeholder="" v-model="course_title">
                    </div>
                    <div class="mb-3">
                    <label for="pwd" class="form-label">Course Cost</label>
                    <input type="text" class="form-control" id="pwd" placeholder="" v-model="course_cost">
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Course Thumbnail</label>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                         <uploader v-model="course_thumbnail" :limit="1"  :autoUpload="false"></uploader>
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Course Brief</label>
                        <textarea rows="4" class="form-control" v-model="course_brief" @change="preview"></textarea>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Key Take Away</label>
                        <vue-editor v-model="key_take_away"></vue-editor>
                    </div>
                    <div class="mb-3">
                    <label for="pwd" class="form-label">Expiry Period Type</label>
                    <select class="form-select" v-model="expiryperiod_type">
                        <option value="Day"> Day</option>
                        <option value="Month"> Month</option>
                        <option value="Year"> Year</option>
                    </select>
                    </div>
                    <div class="mb-3">
                    <label for="pwd" class="form-label">Expiry Period</label>
                    <input type="number" class="form-control" id="pwd" placeholder="" v-model="expiry_period">
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
                    
                    <span @click="createCourse" class="btn topic-btn mt-3">Create Course</span>
                </form>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Uploader from "vux-uploader-component";
import Api from '../views/Api';
import { mapGetters } from 'vuex';
import Multiselect from 'vue-multiselect'

export default{
    components: {VueEditor,  Uploader, Multiselect},
    computed: {...mapGetters({instructors:"instructors"})},
    data(){
        return{
            course_title: '',
            course_cost: '',
            course_thumbnail: [],
            course_brief: '',
            key_take_away: '',
            topics: [],
            course_image: '',
            topic_name: '',
            content: '',
            topic_count: [], 
            fileList: [],
            expiryperiod_type: 'Year',
            expiry_period: '',
            selected_instructors: [],
            
        }
     },

     methods: {
        preview(){
            let courseData = {title:this.course_title, cost:this.course_cost, image:this.course_thumbnail, description:this.course_brief}
            this.$emit("previewCourse", courseData )
        },
     
       addTopic(){
        this.topic_count.length
       },   
        createCourse(){
            let instructors = []
            this.selected_instructors.map(instructor => {
                let id = instructor.id.toString()
                instructors.push(id)
            })
            const formData = new FormData();
                formData.append('title', this.course_title)
                formData.append('description', this.key_take_away)
                formData.append('cost', this.course_cost)
                formData.append('summary', this.course_brief)
                formData.append('thumbnail', this.course_thumbnail[0].url);
                formData.append('expiryperiod_type', this.expiryperiod_type);
                formData.append('expiry_period', this.expiry_period);
                for (var i = 0; i < instructors.length; i++) {
                    formData.append('instructor_ids[]', instructors[i]);
                }
                Api.axios_instance.post(Api.baseUrl+'courses', formData)
                .then((res) => {
                    let course_id = res.data.data.id
                    localStorage.setItem('created_course_id', course_id)
                    this.$emit('courseCreated')
                    this.$toastr.s("Course Created Successfully");
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        },
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>