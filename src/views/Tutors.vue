<template>
    <div>

        <SideNav />
            <div class="main" style="">
                <TopHeader />
        <div class=" container-fluid" style="padding: 1.3rem;">
        <ul class="breadcrumb">
            <li><a href="#"><img src="../../public/assets/admin/breadcrumb_home.svg" style="padding-right:10px ;"/> Home</a></li>
            <li><a href="#">App Center</a></li>
        </ul>
      
      <div class="row mt-4">
        <div class="col-lg-12">
            <img src="../../public/assets/adminNew/instructor_pic.svg" height="50px"  style="padding-right: 1rem"/> {{ instructor[0].name }}
        </div>
       
        <span class="mt-4">
            <a @click="switchComponent('overview')" class="overview" :class="component === 'overview' ? 'activeClass' : 'notActive'">Overview</a>
            <a @click="switchComponent('student')" class="overview" :class="component === 'student' ? 'activeClass' : 'notActive'">Students </a>
            <a @click="switchComponent('courses')" class="overview" :class="component === 'courses' ? 'activeClass' : 'notActive'">Courses </a>  
            <a @click="switchComponent('earnings')" class="overview" :class="component === 'earnings' ? 'activeClass' : 'notActive'">Earnings</a> 
      </span>
    
     
    </div>  
    <div class="col-lg-12 mt-5">
   
        <div class="row" v-show="component === 'courses'">
            <div class="col-md-4" v-for="course in courses" :key="course">
                <Course :course="course"/><br>
            </div>
        </div>

        <div class="row" style="margin-right: 2rem;" v-show="component === 'overview'">
            <div class="col-lg-3" >
                <div class="card" style="flex-direction: row;">
                    <img class="card-img-left" src="../../public/assets/admin/courses_book.svg" alt="Card image" width="50">
                    <div class="" style="padding-left:1rem; padding-top:1rem ;">
                    <h4 class="card-title"><b>{{ courses.length }}</b></h4>
                    <p>Total Courses</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="card" style="flex-direction: row;">
                    <img class="card-img-left" src="../../public/assets/admin/total_student.svg" alt="Card image" width="50">
                    <div class="" style="padding-left:1rem; padding-top:1rem ;">
                    <h4 class="card-title"><b>{{ students.length }}</b></h4>
                    <p>Total Students</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="card" style="flex-direction: row;">
                    <img class="card-img-left" src="../../public/assets/admin/total_revenues.svg" alt="Card image" width="50">
                    <div class="" style="padding-left:1rem; padding-top:1rem ;">
                    <h4 class="card-title"><b>₦{{ total_earnings }}</b></h4>
                    <p> Total Earnings</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="margin-right: 2rem;" v-show="component === 'student'">
                <LearnersComponent  v-if="students.length > 0" :students="students"/>
                <span v-else> No student record!</span>
        </div>

        <div class="row" style="margin-right: 2rem;" v-show="component === 'earnings'">
                <Earnings v-if="earnings.length > 0" :earnings="earnings"/>
                <span v-else> No earnings for now!</span>
        </div>
</div>
      </div>
</div>
    </div>
</template>

<script>
import SideNav from '@/components/General/SideNav.vue';
import TopHeader from '@/components/General/TopHeader.vue';
import Course from '@/components/General/Course.vue'
import Api from './Api';
import LearnersComponent from '@/components/LearnersComponent.vue';
import Earnings from '@/components/Earnings.vue';

    export default{
        name: "Tutors",
        components: {SideNav, TopHeader, Course, LearnersComponent, Earnings},
        data() {
            return {
                instructor: '',
                courses: [],
                activeComponent: '',
                component: 'overview',
                total_courses: '',
                total_earnings: '',
                students: '',
                earnings: [],
                id: ''
            }
        },
        methods: {
            instructorDetail(){
                let instructors = this.$store.getters.instructors
                this.id = this.$route.params.id
                let instructor = instructors.filter(instructor => instructor.id == this.id )
                this.instructor = instructor
                this.courses = instructor[0].courses_i_instruct
                
                Api.axios_instance.get(Api.baseUrl+'instructor/courses/'+this.id)
                .then(res => {
                    this.students = res.data.data.learners
                })
                Api.axios_instance.get(Api.baseUrl+'instructor/earnings/'+this.id)
                .then(res => {
                    this.total_earnings = res.data.data.total_earnings
                    this.earnings = res.data.data.earnings

                })
            },
            switchComponent(page){
                this.component = page
            },

            deleteInstructor(){

            }
        },

        mounted(){
            this.instructorDetail()
        }
    }
</script>

<style scoped>
.card {
    width:auto !important;
}
.overview{
    margin: 10px;
    text-decoration: none; 
    color: black;
    cursor: pointer;
    font-size: 17px;
}
.activeClass{
    color: #6a71ec;
    border-bottom: 3px solid #6a71ec;
    background: none;
}
</style>