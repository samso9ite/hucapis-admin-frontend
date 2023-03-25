<template>
    <div>
        <!-- <div class="col-lg-12 mt-5"> -->
       
        <div v-for="course in allCourses" :key="course">
            <!-- <div class="row"> -->
            <Course :course="course"/>
        <!-- </div>
    </div> -->
          
        </div>
    </div>
</template>

<script>
import Course from './General/Course.vue'
import {mapGetters} from 'vuex'
    export default{
        components: {Course},
        data(){
            return{

            }
        },
        computed: {...mapGetters({allCourses:"allCourses"})},

        // computed: {
        //     allCourses: function(){
        //         this.$store.getters.allCourses
        //         console.log(this.$store.getters.allCourses);
        //     }
        // }
    }
</script>