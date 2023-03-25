<template>
   
        <div class="card" style="background-color: #fff;">
            <img class="card-img-top" src="../../../public/assets/img/courses/course1.svg" alt="Card image">
            <div class="card-body">
            <h5 class="card-title text-uppercase">{{ course.title }}</h5>
            <p class="card-text">{{ course.description }}</p>
            <span> <img src="../../../public/assets/img/courses/floyd.svg" width="40px"/> {{ course.instructors[0].name }}</span><span style="float: right;">5 <i class="fa fa-star" aria-hidden="true" style="color: #FFA360;"></i> </span><br>
            <div class="div mt-4">
            <span class="card-price"> ${{ course.cost }}</span> 
            </div>
                
        </div>
        </div>
    <!-- </div> -->
</template>

<script>
import {mapGetters} from 'vuex'
    export default{
        props: ["course"],
        data(){
            return{

            }
        },

    }

</script>