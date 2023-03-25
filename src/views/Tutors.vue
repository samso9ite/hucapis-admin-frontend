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
            <img src="../../public/assets/adminNew/instructor_pic.svg" height="50px"  style="padding-right: 1rem"/> INSTRUCTOR / PARTNER NAME  <span style="float: right;"><button class="btn btn-danger">Delete Profile</button></span>
        </div>
       
        <span class="mt-4">
            <a href="" style="padding-right: 2rem;">Overview</a> <a href="" style="padding-right: 2rem; text-decoration: none; color: black;">Students </a>  <a href="" style="padding-right: 2rem; text-decoration: none; color: black;">Courses </a>  <a href="" style="padding-right: 2rem; text-decoration: none; color: black;">Revenue</a> 
      </span>
</div>
    
      </div>
</div>
    </div>
</template>

<script>
import SideNav from '@/components/General/SideNav.vue';
import TopHeader from '@/components/General/TopHeader.vue';
import Api from './Api';

    export default{
        name: "Tutors",
        components: {SideNav, TopHeader},
        data() {
            return {
                
            }
        },
    }
</script>