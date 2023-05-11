<template>
    <div>
         <p v-if="ratingData == 5"><i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </p>
         <p v-if="ratingData == 4"> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </p>
         <p v-if="ratingData == 3"> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </p>
         <p v-if="ratingData == 2"> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </p>
         <p v-if="ratingData == 1">  <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </p>
    </div>
</template>

<script>
export default {
   props: ["ratingData"], 
   data() {
    return {
        
    }
   },
}
</script>