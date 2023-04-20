<template>
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
