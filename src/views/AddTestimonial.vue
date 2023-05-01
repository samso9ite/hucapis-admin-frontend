<template>
    <div>
        <SideNav />
        <div class="main" style="">
        <TopHeader />
        <div class=" container-fluid" style="padding: 1.3rem;">
        <ul class="breadcrumb">
            <li><a href="#"><img src="../../public/assets/admin/breadcrumb_home.svg" style="padding-right:10px ;"/> Home</a></li>
            <li class="active" v-if="mode == 'addTestimonial'"><a href="#">Add Testimonial</a></li>
            <li class="active" v-else><a href="#">Update Testimonial</a></li>
        </ul>
        <div class="col-lg-12" style="padding-left: 2rem;">
            <div class="row">
              
            <div class="col-lg-6" style="background-color: #fff; padding: 1rem;">
                <h6 style="font-weight: 400; font-size: 17px" v-if="mode == 'addTestimonial'">
                    ADD TESTIMONIAL
                </h6>
                <div v-else>
                    <span style="font-weight: 400; font-size: 17px" > UPDATE TESTIMONIAL </span> <span style="font-size: 13 !important;"><button class="btn btn-danger" style="float:right; " @click="deleteTestimonial">Delete Testimonial</button></span>
                </div>
                <div class="mt-4">
                    <label for="pwd" class="form-label">Name </label>
                    <input type="text" class="form-control" v-model="name">
                    <label for="pwd" class="form-label mt-4">Testimonial</label>
                    <textarea class="form-control" rows="3"  v-model="testimony" /> 
                    <div class="mb-3">
                        <label for="pwd" class="form-label mt-4">Upload Image</label>
                        <input type="file" accept="" @change="handleFileUpload" ref="pic" />
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Rating</label>
                        <select class="form-select" v-model="rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <!-- <span class="btn topic-btn mt-3">  Update Topic</span>  -->
                    <span  class="btn topic-btn mt-3" @click="submitTestimonial" :disabled="loading" v-if="mode == 'addTestimonial'">Add Testimonial</span>
                    <span  class="btn topic-btn mt-3" @click="updateTestimonial" :disabled="loading" v-else>Update Testimonial</span>
                </div>
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
        name: "AddTestimonial",
        components: {SideNav, TopHeader},
        data() {
            return {
                name: '',
                testimony: '',
                rating: '',
                image: '',
                loading: false,
                mode: '',
                id: ''
            }
        },

        methods: {
            handleFileUpload(){
                this.image = this.$refs.pic.files[0]
            },
            submitTestimonial(){
                this.loading = true
                const formData = new FormData
                formData.append('name', this.name)
                formData.append('testimony', this.testimony)
                formData.append('star', this.rating)
                formData.append('thumbnail', this.image)
                Api.axios_instance.post(Api.baseUrl+'testimonials/store', formData)
                .then(res => {
                    this.$toastr.Add({
                        msg: "Testimonial Added Successfully",
                        position: "toast-top-right",
                        type: "success", 
                        preventDuplicates: true,
                        style: { backgroundColor: "green" } 
                    });

                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false
                    this.rating = ''
                    this.image = ''
                    this.testimony = ''
                    this.name = ''
                })
            },
            updateTestimonial(){
                this.loading = true
                const formData = new FormData
                formData.append('name', this.name)
                formData.append('testimony', this.testimony)
                formData.append('star', this.rating)
                formData.append('thumbnail', this.image)
                Api.axios_instance.post(Api.baseUrl+'testimonials/update/'+this.id, formData)
                .then(res => {
                    this.$toastr.Add({
                        msg: "Testimonial Updated Successfully",
                        position: "toast-top-right",
                        type: "success", 
                        preventDuplicates: true,
                        style: { backgroundColor: "green" } 
                    });

                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false
                    this.rating = ''
                    this.image = ''
                    this.testimony = ''
                    this.name = ''
                })
            },
            deleteTestimonial(){
                Api.axios_instance.delete(Api.baseUrl+'testimonials/delete/'+this.id)
                .then(res => {
                    this.$toastr.Add({
                        msg: "Testimonial Deleted Successfully",
                        position: "toast-top-right",
                        type: "success", 
                        preventDuplicates: true,
                        style: { backgroundColor: "green" } 
                    });
                    this.$router.push('/testimonials')
                })
            },
            getRoute(){
                if(this.$route.path === "/add-testimonial"){
                    this.mode = 'addTestimonial'
                }else{
                    this.mode = 'editTestimonial'
                    this.id = this.$route.params.id
                }
            },
            getTestimonial(){
                Api.axios_instance.get(Api.baseUrl+'testimonials/'+this.id)
                .then(res => {
                    let data = res.data.data
                    this.name = data.name
                    this.testimony = data.testimony
                    this.rating = data.star
                    this.image = data.thumbnail
                })
            }
        },

        mounted(){
            this.getRoute()
            if(this.mode == 'editTestimonial'){
                this.getTestimonial()
            }
        }
    }
</script>