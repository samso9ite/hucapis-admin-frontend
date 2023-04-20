<template>
    <div>
        <div v-for="course in allCourses" :key="course">
            <Course :course="course"/>
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


    }
</script>