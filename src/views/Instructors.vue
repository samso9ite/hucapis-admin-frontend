<template>
    <div>
        <SideNav />
        <div class="main" style="">
        <TopHeader />
        
        <div class=" container-fluid" style="padding: 1.3rem;">
            <div class="col-lg-12 mt-5">
                <div class="row">
                    <div class="col-md-3" v-for="instructor in instructors" :key="instructor">
                        <div class="card" style="background-color: #fff; width: auto;" >
                            <img class="card-img-top" src="../../public/assets/admin/instructor_pics.svg" alt="Card image">
                            <router-link :to="'/tutors/'+instructor.id" class="routerLink">
                                <div class="card-body">
                                    <h5 class="card-title text-center" style="color: black; font-size: 15px;">{{instructor.name | truncate(20) }}</h5>
                                </div>
                            </router-link>
                        </div>
                        <br>
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

export default {
    name: 'Instructors',
    components: {SideNav, TopHeader},
    computed: {
        instructors: function(){
            return this.$store.getters.instructors
        }
    },
    mounted(){
        this.$store.dispatch('getInstructors')
    }
}
</script>

<style>
.routerLink {
  text-decoration: none !important;
  color: inherit;
}
</style>