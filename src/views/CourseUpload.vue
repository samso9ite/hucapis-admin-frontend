<template>
    <div>
       
        <SideNav />
        <div class="main" style="">
        <TopHeader />
        <div class=" container-fluid" style="padding: 1.3rem;">
        <ul class="breadcrumb">
            <li><a href="#"><img src="../../public/assets/admin/breadcrumb_home.svg" style="padding-right:10px ;"/> Courses {{ mode }}</a></li>
            <li><a href="#">Course Information</a></li>
            <li class="active"><a href="#">Edit Course</a></li>
        </ul>
      <div class="col-lg-12" style="padding-left: 2rem;">
        <div class="row">
        <div class="col-lg-6" style="background-color: #fff; padding: 1rem;">
             <CreateCourse @courseCreated="courseCreated" @previewCourse="previewCourse" v-show="activeComponent === 'course'" :mode="mode" :course="course"/>
             <ShareFormula v-show="activeComponent === 'shareFormula'" @courseCreated="courseCreated" /> 
             <CreateTopic v-show="activeComponent === 'editTopic'" :mode="mode"/>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
            <div class="col-md-4">
                <div class="card" style="background-color: #fff;">
                    <h6 style="font-weight:400; font-size:17px; margin-bottom: 2rem;">PREVIEW</h6>
                    <img class="card-img-top" :src="image" alt="Card image" height="300px">
                    <div class="card-body">
                    <h5 class="card-title text-uppercase">{{ title }}</h5>
                    <p class="card-text">{{ description }}</p>
                   <span> <img src="../../public/assets/img/courses/floyd.svg" width="40px"/> Floyd Miles</span><span style="float: right;">5 <i class="fa fa-star" aria-hidden="true" style="color: #FFA360;"></i> </span><br>
                    <div class="div mt-4">
                    <span class="card-price"> ${{ cost }}</span> 
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
import SideNav from '@/components/General/SideNav.vue';
import TopHeader from '@/components/General/TopHeader.vue';
import Api from './Api';
import CreateCourse from '../components/CreateCourse.vue';
import CreateTopic from '../components/CreateTopic'
import ShareFormula from '@/components/ShareFormula'
import { mapGetters } from 'vuex';

export default {
    name: "CourseUpload",
    components: {TopHeader, SideNav, CreateCourse, CreateTopic, ShareFormula},
   
    data() {
        return {
            activeComponent: 'course',
            created: false,
            title: 'Course Title',
            description: 'Your course decription would be here ',
            image: 'https://designshack.net/wp-content/uploads/placeholder-image.png',
            cost: '0.0',
            mode: '',
            id: '',
            topic_id: '',
            course: ''
        }
    },
    computed:{
        count: function(){
            return this.topic_count
        }
    },

    methods:{
        courseCreated(status){
            this.activeComponent = status
            console.log(this.activeComponent);
         },
        previewCourse(courseData){
            this.title = courseData.title
            this.cost = courseData.cost
            this.image = courseData.image[0].url
            this.description = courseData.description
        },
        getId(){
            this.id = this.$route.params.course_id
            this.topic_id = this.$route.params.topic_id
        },
        getCourse(){
           let allCourses =  this.$store.getters.allCourses.data
           console.log(allCourses);
           this.course = allCourses.filter(course => course.id == this.id)
           this.$store.commit('courseEdit', this.course)
        },
        getRoute(){
            if (this.$route.path === ('/course-edit/'+this.id)) {
                this.mode = 'editCourse'
                this.activeComponent = 'course'
                    // } else if (this.$route.path === ('/course-upload'))  {
                    // this.mode = 'upload'
                } else if(this.$route.path === ('/topic-edit/'+this.id+'/'+this.topic_id)){
                    this.mode = "editTopic"
                    this.activeComponent = 'editTopic'
            }
         }
    },

    mounted(){
        this.$store.dispatch('getInstructors')
        this.getId()
        this.getRoute()
        if(this.mode == 'editCourse' ||  this.mode == 'editTopic'){
            this.getCourse()
        }
      
        
    }
}
</script>