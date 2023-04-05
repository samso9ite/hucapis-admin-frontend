<template>
   <router-link :to="'/course-details/'+course.id" class="routerLink">
        <div class="card" style="background-color: #fff;">
            <img class="card-img-top" src="../../../public/assets/img/courses/course1.svg" alt="Card image">
            <div class="card-img-overlay" @click="deleteCourse(course.id)"  v-if="path === 'Tutor'"> <img src="../../../public/assets/adminNew/trash.svg" width="30px"/></div>
                  
            <div class="card-body">
            <h5 class="card-title text-uppercase">{{ course.title }} {{ current_path }}</h5>
            <p class="card-text">{{ course.description }}</p>
            
            <span v-if="path === 'Courses'"> <img src="../../../public/assets/img/courses/floyd.svg" width="40px"/> {{ course.instructors[0].name }}</span><span style="float: right;">5 <i class="fa fa-star" aria-hidden="true" style="color: #FFA360;"></i> </span><br>
            <div class="div mt-4">
                <span class="card-price"> ${{ course.cost }}</span> 
            </div>
         </div>
        </div>
  </router-link>
</template>

<script>
import {mapGetters} from 'vuex'
import Api from '../../../../hucapic_main_frontend/src/views/Api'
    export default{
        props: ["course"],
        computed: {
           current_path: function(){
            let path = ''
            if(this.$route.path === ('/tutors/'+this.$route.params.id)){
                path = 'Tutor'
                return  path  
            }
               else{
                return path = 'Courses'
               }
            }
        },
        data(){
            return{
              
            }
        },

        methods: {
            deleteCourse(id){
                console.log(id);
                Api.axios_instance.delete(Api.baseUrl+'courses/'+id)
                .then(res => {
                    console.log(res);
                })
            }
        }
    }

</script>

<style>
.routerLink {
  text-decoration: none !important;
  color: inherit;
}
</style>