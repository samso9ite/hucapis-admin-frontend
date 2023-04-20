<template>
    <div class="sidenav">
        <router-link :to="'/dashboard'"><img src="../../../public/assets/admin/Qoeko-white-icon.png" height="60px" style="margin-bottom: 2rem;"/> </router-link>
        <router-link :to="'/dashboard'"><img src="../../../public/assets/admin/home_icon.svg"/> Home </router-link>
        <router-link :to="'/instructors'"><img src="../../../public/assets/admin/tutors_icon.svg"/> Tutors</router-link>
        <router-link :to="'/learners'"><img src="../../../public/assets/admin/learners_icon.svg"/> Learners</router-link>
        <router-link :to="'/courses'"><img src="../../../public/assets/admin/course_icon.svg"/> Courses</router-link>
        <router-link :to="'/revenue'"><img src="../../../public/assets/admin/revenue.svg"/> Revenue</router-link>
        <router-link :to="'/testimonials'"><img src="../../../public/assets/admin/revenue.svg"/> Testimonials </router-link>
    </div>
</template>

<script>
export default{
   data(){
    return{

    }
   } 
}
</script>

<style>
.activeClass{
    background-color: #FFA360;
    padding-top:-10px
}
</style>
