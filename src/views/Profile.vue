<template>
    <div>
        <SideNav />
        <div class="main" style="">
    <TopHeader />
    <div class="container-fluid mt-4">
    <h5 class="auth-title" style="padding-left: 7rem; font-size: 18px;">PROFILE SETTINGS</h5>
      <hr>
      <div class="container">
          <div class="row">
              <div class="col-lg-3">
                  <a href="#" class="btn" style="background-color:#D9D9D9; padding:0.5rem 4rem"><img src="../../public/assets/img/profile.svg" width="18px"/> Profile</a> <br>
                  <!-- <a href="#" class="btn mt-3" style=" padding:0.5rem 4rem"> <img src="../../public/assets/img/pricing.svg" width="18px"/> Pricing</a> -->
                  <!-- <a href="#" class="btn mt-3" style=" padding:0.5rem 4rem"> <img src="../../public/assets/img/notification.svg" width="18px"/> Notifications </a> -->
              </div>
              <div class="col-lg-9 mb-5" style="padding-left: 5rem;border-left: 1px solid #c8c9ca;">
                  <img src="../../public/assets/img/photo.svg"/> <input type="file"  ref="profile_pic" @change="handleFileUpload"/>
                   <!-- <a href="#" class="btn" style="background-color:#000; padding:0.5rem 2rem; color:#fff; margin-left: 2rem;"> Upload New Photo</a> -->
                    <br>
                  <p style="font-size: 20px;" class="mt-4">PERSONAL INFORMATION</p>

                  <form style=" width:70%">
                      <div class="mb-3 mt-3">
                        <label for="name" class="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="" v-model="first_name">
                      </div>
                      <div class="mb-3 mt-3">
                        <label for="name" class="form-label">Last Name</label>
                        <input type="text" class="form-control" placeholder="" v-model="last_name">
                      </div>
                      <div class="mb-3">
                        <label for="pwd" class="form-label">Username</label>
                        <input type="text" class="form-control" id="pwd" v-model="username" >
                      </div>
                      <div class="mb-3">
                          <label for="pwd" class="form-label">Email</label>
                          <input type="email" class="form-control" v-model="email">
                      </div>
                      <div class="mb-3">
                          <label for="pwd" class="form-label">Phone Number</label>
                          <input type="text" class="form-control" v-model="phone_number">
                      </div>

                      <div class="mb-3">
                          <label for="pwd" class="form-label">Country</label>
                          <select class="form-control" v-model="country_id">
                            <option v-for="country in countries" :key="country" :value="country.id">{{ country.name }}</option>
                          </select>
                      </div>
                     
                      <button class="btn btn-primary card-btn-full" @click="updateProfile()" :disabled="loading">Submit</button>
                     </form>

                    <div style=" width:70%; padding-top: 3rem;">
                        <div class="alert alert-danger alert-dismissible alert-alt"
                            width="60%"
                            v-if="pwd_errors.length"
                            >
                            <span v-for="error in errors" :key="error"> <strong>{{ error }}</strong></span>
                        </div>
                      <p style="font-size: 20px;" class="mt-5 mb-3">CHANGE PASSWORD</p>
                      <div class="mb-3">
                          <label for="pwd" class="form-label">Current Password</label>
                          <input type="text" class="form-control" v-model="current_password">
                      </div>
                      <div class="mb-3">
                          <label for="pwd" class="form-label">New Password</label>
                          <input type="text" class="form-control" v-model="new_password">
                      </div>
                      <div class="mb-3">
                          <label for="pwd" class="form-label">Confirm Password</label>
                          <input type="text" class="form-control" v-model="confirm_password">
                      </div>

                      <button  class="btn btn-primary card-btn-full" @click="changePassword" :disabled="pwd_loading">Submit</button>
                    </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import TopHeader from '@/components/General/TopHeader.vue';
import SideNav from '@/components/General/SideNav.vue';
import Api from './Api';
import { mapGetters} from 'vuex'

export default {
    name: 'Profile',
    components: {TopHeader, SideNav},
    data(){
        return{
            first_name: this.user,
            last_name: '',
            phone_number: '',
            username: '',
            profile_pic: '',
            email: '',
            current_password: '',
            new_password: '',
            confirm_password: '',
            pwd_errors: [],
            country_id: 163,
            pwd_loading: false,
            loading: false,
            countries: []
        }
    },
    computed: { ...mapGetters({user: "StateUser"})},
    methods: {
        changePassword(){
            if(this.confirm_password === this.new_password){
                this.pwd_loading = true
                Api.axios_instance.post(Api.baseUrl+'profile/update-password', {old_password:this.current_password, new_password:this.new_password})
                .then(res => {
                    this.$toastr.s("Password Changed Successfully");
                }).catch((error) => {
                    if (error.response) {
                    if (error.response.data.message) {
                        this.$toastr.e(error.response.data.message);
                    }
                    for (const property in error.response.data.errors) {
                        this.pwd_errors.push(
                        `${error.response.data.errors[property]}`
                        );
                    }
                    }
                })
                .finally(
                    () => {
                        this.pwd_loading = true
                    }
                )
            } else{
                this.$toastr.e("Password Mismatch");
                console.log("Password mismatch");
            }
          
        },
        handleFileUpload(){
            this.profile_pic = this.$refs.profile_pic.files[0]
            console.log(this.profile_pic);
        },
        updateProfile(){
            this.loading = true
            let name = this.first_name + this.last_name
            const formData = new FormData();    
            formData.append("first_name", this.first_name)
            formData.append("last_name", this.last_name)
            formData.append("username", this.username)
            formData.append("phone_number", this.phone_number)
            formData.append("email_notification", 1)
            // formData.append("country_id", this.country_id)
            formData.append("photo", this.profile_pic)

            Api.axios_instance.post(Api.baseUrl+'profile/update', formData)
            .then(res => {
                console.log(res);
                this.$toastr.s("Profile Updated Successfully");
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                this.loading = false
            })
        },
        getCountries(){
            Api.axios_instance.get(Api.baseUrl+'countries')
            .then(res => {
                console.log(res);
                this.countries = res.data
            })
        }
    },
    mounted(){
        this.getCountries()
        this.first_name = this.user.name
        this.last_name = this.user.last_name
        this.username = this.user.username
        this.phone_number = this.user.phone_number
        this.email = this.user.email
        this.photo = this.user.photo
    }
}
</script>