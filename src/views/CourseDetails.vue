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
                <div class="" style="">
                  
                    <img class="card-img-top" src="../../public/assets/vid.svg" alt="Card image">
                    <div class="card-img-overlay" style="color: white;"> <img src="../../public/assets/course_taken_play.svg" style=" margin-right:auto; margin-top: 27%; display:block"/> </div>
                </div>
    
                <ul class="nav nav-tabs" style="height: 2.7rem !important;">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">Course Details</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Transcript</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Q & A</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Review</a>
                      </li>
                  </ul>
    
                  <p class="mt-4" style="font-size:20px; font-weight:400">COURSE BRIEF:</p>
                  <p>{{ course.description }} </p>
                  <p class="mt-4" style="font-size:20px; font-weight:400">IN THIS COURSE, YOU WILL LEARN:</p>
                  <div class="row">
                       <div class="col-lg-6">
                      <ul class="list-unstyled">
                          <li class="mb-2" style="padding-top: 1rem;">
                              <img src="../../public/assets/img/course_list_icon.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus at eu, tell.
                          </li>
                          <li class="mb-2">
                              <img src="../../public/assets/img/course_list_icon.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus at eu, tell.
                          </li>
                          <li class="mb-2">
                              <img src="../../public/assets/img/course_list_icon.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus at eu, tell.
                          </li>
                        
                      </ul>
                  </div>
    
                  <div class="col-lg-6">
                      <ul class="list-unstyled">
                          <li class="mb-2" style="padding-top: 1rem;">
                              <img src="../../public/assets/img/course_list_icon.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus at eu, tell.
                          </li>
                          <li class="mb-2">
                              <img src="../../public/assets/img/course_list_icon.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus at eu, tell.
                          </li>
                          <li class="mb-2">
                              <img src="../../public/assets/img/course_list_icon.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus at eu, tell.
                          </li>
                         
                      </ul>
                  </div>
                 <router-link :to="'/course-edit/'+course.id"> <button class="btn" style="background-color:#6B70EC">Edit Course</button> </router-link>
                
            </div>
            </div>
    
            <div class="col-lg-5">
                <p class="" style="font-size:20px; font-weight:400">COURSE CONTENT:</p>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                      <p class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                          <span style="text-transform: capitalize !important;"> Course Content</span> <span style="font-size:12px"> - 5 topics . 20mins </span>
                        </button>
                    </p>
                      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <ul class="list-unstyled" style="font-size: 15px;" v-for="topic in topics" :key="topic">
                                <li class="mb-2" style="padding-top: 1rem;">
                                    <img src="../../public/assets/img/book2.svg" width="15px"/> {{ topic.title }}<span style="float:right"> <router-link :to="'/topic-edit/'+course.id+'/'+topic.id"> Edit </router-link></span>
                                  
                                </li>
                            </ul>
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
    export default{
        name: "CourseDetails",
        components: {SideNav, TopHeader},
        data(){
            return{
                course: '',
                id: '',
                highlights: [],
                topics: []
            }
        },
        methods: {
            setDetails(){
                this.id = this.$route.params.id
                Api.axios_instance.get(Api.baseUrl+'courses/'+this.id)
                .then(res => {
                this.course = res.data.data
                this.topics = res.data.data.topics
                this.highlights = res.data.data.highlights
                })
            },
            deleteCourse(){
                console.log("esdrfgyhjk");
                Api.axios_instance.delete(Api.baseUrl+('courses/')+this.id)
                .then(res => {
                    this.$toastr.s("Course Deleted Successfully");
                    window.location.href('/courses')
                }).catch(err => {
                    console.log(err);
                    this.$toastr.e("err");
                })
            }
        },  

        mounted(){
            this.setDetails()
        }
    }
</script>