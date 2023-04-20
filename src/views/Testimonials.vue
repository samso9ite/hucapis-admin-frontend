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
                testimonials: []
            }
        },

        methods: {
            getTestimonials(){
                Api.axios_instance.get(Api.baseUrl+'testimonials')
                .then(res => {
                    console.log(res);
                    this.testimonials = res.data.data
                })
            }
        },
        mounted() {
            this.getTestimonials()
        },
    }
</script>
