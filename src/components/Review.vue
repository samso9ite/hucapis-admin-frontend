<template>
    <div class="mt-4">
      <div class="row">
          <div class="col-lg-3 text-center"  style="background-color: #FFF; padding: 1rem;">
              <h5 class="page-title mt-5"> {{ ratingData.avgRating }}/5</h5>
             <p> <AvgRating :ratingData="ratingData.avgRating"/></p>
                <p>{{ ratingData.totalRating }} Ratings</p>
          </div>
          
          <div class="col-lg-7" style="padding-left: 2rem;">
              <div class="mt-3">
                  <p> 5 <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <img src="../../public/assets/img/progressBar.svg"/> ({{ ratingData.fiveStarRating }})</p>
                  <p> 4 <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <img src="../../public/assets/img/progressBar.svg"/> ({{ ratingData.fourStarRating }})</p>
                      <p>3 <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <img src="../../public/assets/img/progressBar.svg"/> ({{ ratingData.threeStarRating }})</p>
                  <p> 2 <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <img src="../../public/assets/img/progressBar.svg"/> ({{ ratingData.twoStarRating }})</p>
                      <p>1 <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <img src="../../public/assets/img/progressBar.svg"/> ({{ ratingData.oneStarRating }}) </p>   
              </div>
          </div>
          <div class="mt-3" v-for="review in course_reviews.slice(0,10)" :key="review">
              <div class="row">
                      <div class="col-lg-2">
                  <img src="http://127.0.0.1:5501/assets/img/instructors/instructor_name2.svg" class = "rounded-circle" width = "70" height = "70" > 
              </div>
              <div class="col-lg-10 mt-3">
                  <p style="text-transform: uppercase; font-size: 13px; font-weight: 500;">{{ review.user.name }}</p>
                  <StarRating :rating="review.rating" />
              </div>
          
              
              <p class="mt-3">{{ review.description }}</p>
              <p style="color: #797979;">{{ review.created_at }}</p>
              <hr></hr>
              
              </div>
          </div>
        
      </div>
  </div>
</template>

<script>
import Api from '../views/Api'
import AvgRating from '@/components/AvgRating.vue'
import StarRating from '@/components/StarRating.vue'

  export default{
      props: ["course", "course_reviews", "ratingData"],
      components: {AvgRating, StarRating},
      data() {
          return {
              description: '',
              rating: ''
          }
      },

      methods: {
          submitReview(){ 
              let form_data = {
                 course_id: this.$route.params.id,
                 rating: parseFloat(this.rating),
                 description:this.description,
                 user_id: this.$store.state.user.id
              }
              Api.axios_instance.post(Api.baseUrl+'course_reviews', form_data)
              .then(res =>  {
                      this.$toastr.s("Review Created");
                  }
              )
          },
      },
  }
</script>