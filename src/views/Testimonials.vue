<template>
      <div>
        <SideNav />
        <div class="main" style="">
        <TopHeader />
        <div class=" container-fluid" style="padding: 1.3rem;">
        <ul class="breadcrumb">
            <li><a href="#"><img src="../../public/assets/admin/breadcrumb_home.svg" style="padding-right:10px ;"/> Home</a></li>
            <li class="active"><a href="#"> Testimonials</a></li>
        </ul>
        <div class="col-lg-12" style="padding-left: 2rem;">
            <div class="row">
             
                <div class="card col-lg-3" v-for="testimony in testimonials" :key="testimony" style="margin-right:5px">
                    <router-link :to="'update-testimonial/'+testimony.id" style="text-decoration:none; color:black">
                    <div class=" d-flex flex-column justify-content-center">
                        <blockquote class="blockquote ">
                            <p>"{{  testimony.testimony}}"</p>
                        </blockquote>
                        <div class="author d-flex align-items-center">
                        <img class="avatar rounded-circle mx-2" :src=image_path(testimony)>
                        <!-- <img class="avatar rounded-circle mx-2" src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541' v-else> -->
                            {{ testimony.name }} 
                        </div>
                    <!-- <div class="row"> <a class="mt-3" href="https://goo">Edit</a> <a href="" class="text-danger">Delete</a></div> -->
                    </div>
                    </router-link>
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

    export default{
        name: "Testimonials",
        components: {SideNav, TopHeader},
        data() {
            return {
                testimonials: [],

            }
        },

        methods: {
            getTestimonials(){
                Api.axios_instance.get(Api.baseUrl+'testimonials')
                .then(res => {
                    this.testimonials = res.data.data
                })
            },
            image_path(testimony) {
                return testimony.media && testimony.media.length > 0 ? `https://hucaplms.king.name.ng/public/storage/${testimony.media[0].id}/${testimony.media[0].file_name}` : 'https://img.freepik.com/free-icon/user_318-159711.jpg'
            }
        },
        mounted() {
            this.getTestimonials()
        },
    }
</script>

<style scoped>
.avatar {
  border: 0.1rem solid rgba(#fff, 0.3);
  max-width: 3rem;
}
</style>