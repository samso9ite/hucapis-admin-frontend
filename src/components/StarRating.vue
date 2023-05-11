<template>
    <span>
         <span v-if="rating == 5 || rating == 0"><i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </span>
         <span v-if="rating == 4"> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </span>
         <span v-if="rating == 3"> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </span>
         <span v-if="rating == 2"> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </span>
         <span v-if="rating == 1">  <i class="fa fa-star" aria-hidden="true" style="color:#FFA360"></i> </span>
    </span>
</template>

<script>
export default {
   props: ["rating"], 
   data() {
    return {
        
    }
   },
}
</script>