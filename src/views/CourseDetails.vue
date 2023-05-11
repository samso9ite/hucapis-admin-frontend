<template>
    <div>
        <SideNav />
        <div class="main" style="">
        <TopHeader />

        <div class=" container-fluid" style="padding: 1.3rem;">
        <ul class="breadcrumb">
            <li><a href="#"><img src="../../public/assets/admin/breadcrumb_home.svg" style="padding-right:10px ;"/> Courses</a></li>
            <li><a href="#">Course Information</a></li>
        </ul>
      

    <div class="container mb-5 mt-5" style="">
        <div class="row">
            <h5 style="color:#6B70EC; font-weight: 400; margin-bottom: 2rem;">{{ course.title }} <span style="float: right; cursor: pointer;" @click="deleteCourse"><button class="btn btn-danger" >Delete Course</button></span></h5> 
            <div class="col-lg-7">
            
                <VidPlayer :topic="topic_content" @getTopic="getTopic"/>
            <ul class="nav nav-tabs mt-4" style="height: 2.7rem !important;">
                <li class="nav-item">
                  <a class="" @click="changeTab('course_brief')" :class="activeTab === 'course_brief' ? 'isActive' : 'notActive'">Course Details</a>
                </li>
                <li class="nav-item">
                  <a :class="activeTab === 'transcript' ? 'isActive' : 'notActive'"  @click="changeTab('transcript')">Transcript</a>
                </li>
                <li class="">
                  <a  :class="activeTab === 'QA' ? 'isActive' : 'notActive'"  @click="changeTab('QA')">Q & A</a>
                </li>
                <li class="nav-item">
                    <a  :class="activeTab === 'review' ? 'isActive' : 'notActive'" @click="changeTab('review')">Review</a>
                  </li>
              </ul>
              <div class="mt-4">
                <Review :course="course" v-if="activeTab === 'review'" :course_reviews="course.reviews" :ratingData="ratingData"/>
                <QA :course="course" v-if="activeTab === 'QA'"  />
                <Transcript :course="course" v-if="activeTab === 'transcript'" />
                <courseBrief :course="course" v-if="activeTab === 'course_brief'"/>
              </div>  
            
            <div class="row mt-5" >
                <div class="col-lg-6 col-6">
                    <router-link :to="'/course-edit/'+course.id"> <button class="btn" style="background-color:#6B70EC; color: white;">Edit Course</button> </router-link> 
                </div>
                <div class="col-lg-6 col-6" style="float:right">
                    <router-link :to="'/edit-formula/'+course.id"> <button class="btn" style="background-color:#6B70EC; color: white;">Edit Share Formular</button> </router-link> 
                </div>
            </div>
            </div>
           
    
            <div class="col-lg-5">
                <p class="" style="font-size:20px; font-weight:400">COURSE CONTENT:</p>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                      <p class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                          <span style="text-transform: capitalize !important;"> Course Content</span> <span style="font-size:12px"></span>
                        </button>
                    </p>
                      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <ul class="list-unstyled" style="font-size: 15px;" v-for="topic in topics" :key="topic">
                                <li class="mb-2" style="padding-top: 1rem;">
                                    <router-link :to="'/vid-player/'+course.id+'/'+topic.id"> 
                                        <img src="../../public/assets/img/book2.svg" width="15px"/> {{ topic.title }} </router-link> <span style="float:right"> 
                                    <router-link :to="'/topic-edit/'+course.id+'/'+topic.id"> Edit </router-link></span>
                                </li>
                            </ul>
                           <router-link :to="'/add-topic/'+id"> <button class="btn" style="background-color:#6B70EC; color:white">Add Topic</button> </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
        </div>
    </div>
</div>
    
</template>

<script>
import SideNav from '../components/General/SideNav.vue'
import TopHeader from '../components/General/TopHeader.vue'
import Api from './Api';
import courseBrief from '@/components/courseBrief.vue';
import Review from '@/components/Review.vue';
import QA from '@/components/QA'
import Transcript from '@/components/Transcript.vue';
import VidPlayer from '@/components/VidPlayer.vue';

    export default{
        name: "CourseDetails",
        components: {SideNav, TopHeader, courseBrief, Review, QA, Transcript, VidPlayer},
        data(){
            return{
                activeTab: 'course_brief',
                course: [],
                id: '',
                highlights: [],
                topics: [],
                ratingData: {},
                topic_content: []
            }
        },
        watch: { 
            "$store.state.course_edit": function () {
            this.course_edit = this.$store.state.course_edit[0];
            this.course_title = this.course_edit.title;
            this.course_cost = this.course_edit.cost;
            this.course_brief = this.course_edit.summary;
            this.key_take_away = this.course_edit.description;
            this.expiryperiod_type = this.course_edit.expiryperiod_type;
            this.expiry_period = this.course_edit.expiry_period;
            this.selected_instructors = this.course_edit.instructors;
            this.selected_categories = this.course_edit.interests
            this.course_id = this.course_edit.id;
            }
        },

        methods: {
           async setDetails(){
                console.log("Set Details Section");
                this.id = this.$route.params.id
               await  Api.axios_instance.get(Api.baseUrl+'courses/'+this.id)
                .then(res => {
                this.course = res.data.data
                console.log(this.course);
                this.topics = res.data.data.topics
                this.highlights = res.data.data.highlights
                })
            },
            async getTopic(){
            let topic_id =  this.$route.params.topic_id
            console.log(topic_id);
                this.topic_content = this.course.topics.filter((item) => {
                return item.id == topic_id
                })
                console.log(this.topic_content);
            },
            deleteCourse(){
                Api.axios_instance.delete(Api.baseUrl+('courses/')+this.id)
                .then(res => {
                    this.$toastr.Add({
                        msg: "Course Deleted Successfully", // Toast Message
                        position: "toast-top-right", // Toast Position.
                        type: "success", // Toast type,
                        preventDuplicates: true, //Default is false,
                        style: { backgroundColor: "green" } // bind inline style to toast  (check [Vue doc](https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles) for more examples)
                    });
                    this.$router.push('/courses')
                }).catch(err => {
                    this.$toastr.e("err");
                })
            },
            image_path() {
                return this.course.media && this.course.media.length > 0 ? `https://hucaplms.king.name.ng/public/storage/${this.course.media[0].id}/${this.course.media[0].file_name}` : '../assets/vid.svg'
            },
            changeTab(tab){
                this.activeTab = tab
            },
        async calcRating(){
            console.log(this.course.reviews);
          let reviews =  this.course.reviews.filter(item => {
            return item.review_status === 'pending'
          })
          let fiveStarRating = 0
          let fourStarRating = 0
          let threeStarRating = 0
          let twoStarRating = 0
          let oneStarRating = 0
          reviews.filter(review => {
            if (review.rating == '5'){
                fiveStarRating ++
            }else if(review.rating == '4'){
                fourStarRating ++
            }else if(review.rating == '3'){
                threeStarRating ++
            }else if(review.rating == '2'){
                twoStarRating ++
            }else if(review.rating == '1'){
                oneStarRating ++
            }
          })
          let totalRating = fiveStarRating+fourStarRating+threeStarRating+twoStarRating+oneStarRating
          let multipliedRating = 5*fiveStarRating+4*fourStarRating+3*threeStarRating+2*twoStarRating+1*oneStarRating
          this.avgRating = multipliedRating / totalRating
          if ( isNaN( this.avgRating )) {
            this.avgRating  = 0
            }
          this.ratingData = {avgRating:this.avgRating, fiveStarRating:fiveStarRating, fourStarRating:fourStarRating, threeStarRating:threeStarRating,
                                twoStarRating:twoStarRating, oneStarRating:oneStarRating, totalRating:totalRating}
                  console.log(this.ratingData)               
        }
        },  

       async mounted(){
           await this.setDetails()
           await this.calcRating()
            }
        }
</script>

<style scoped>
.detail-img{
    height: 50vh;
    opacity: 0.4;
}
.card{
    width: auto !important;
    background-color: none !important;
    }
.isActive{
    color: #6a71ec;
    font-size: 18px !important;
    font-weight: 500;
    text-decoration: none ;
    border-bottom: 3px solid #6a71ec;
    margin:10px;
    cursor: pointer;
}
.notActive{
    margin:10px;
    font-size: 18px !important;
    font-weight: 500;
    color: #6c757d;
    text-decoration: none ;
    cursor:pointer
}
</style>