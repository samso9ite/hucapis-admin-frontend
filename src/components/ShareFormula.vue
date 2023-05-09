<template>
    <div class="row">
        <div class="col-lg-12">
            <span style="font-weight: 400;">Sharing Formula {{ mode }} </span> <span style="float: right;">  <span @click="addShare" class="btn topic-btn">Add More User</span></span>
        </div>
        <div v-for="(shareFormula, index) in shares" :key="index" class="mb-3">
            <label for="pwd" class="form-label"> User</label>
                <select class="form-select" v-model="shareFormula.user_id">
                    <option :value="instructor.id" v-for="instructor in instructors" :key="instructor">{{ instructor.name }}</option>
                </select>
            <br>
            <label class="form-label"> Share Percentage</label>
            <input type="number" class="form-control" v-model="shareFormula.share">
        </div>
        <!-- <span @click="updateShares" class="btn topic-btn" v-if="mode === 'editFormula'">Update Shares</span> -->
        <span @click="submitShares" class="btn topic-btn" >Submit Shares</span>
    </div>
 
</template>

<script>

import Uploader from "vux-uploader-component";
import Api from '../views/Api';
import {mapGetters} from 'vuex'

export default{
        computed: {...mapGetters({instructors:"instructors"})},
        props: ["mode", "formular"],    
        watch: {
            '$store.state.share_formular': function(){
               console.log(this.$store.state.share_formular);
               this.shares = this.$store.state.share_formular
        }
    },
        data(){
            return{
                course_id: localStorage.getItem('created_course_id'),
                users : [],
                share: '',
                shares: [{user_id: '', share: ''}],
                sum: 0
            }
        },
        
        
        methods: {
            sumShares(){
                this.sum = 0
                this.shares.map(item => {
                    this.sum += parseFloat(item.share)
                })
                console.log(this.sum);
            },

            addShare(){
                this.sumShares()
                if(this.sum >= 101){
                    this.$toastr.Add({
                        msg: "100% Limit Reached",
                        position: "toast-top-right",
                        type: "error", 
                        preventDuplicates: true,
                        style: { backgroundColor: "red" } 
                        });
                }else{
                    this.shares.push({user_id: '', share: ''})
                }
                      
            },
            submitShares(){
                this.sumShares()
                if(this.sum >= 101){
                    this.$toastr.Add({
                        msg: "100% Limit Reached",
                        position: "toast-top-right",
                        type: "error", 
                        preventDuplicates: true,
                        style: { backgroundColor: "red" } 
                    });
                }else{
                    Api.axios_instance.post(Api.baseUrl+('courses/'+this.course_id+'/sharing_formula'), { sharingFormulas:this.shares})
                    .then(res => {
                        this.sum = 0
                        this.$toastr.Add({
                            msg: "Forumla Created Successfully",
                            position: "toast-top-right",
                            type: "success", 
                            preventDuplicates: true,
                            style: { backgroundColor: "green" } 
                            });
                        this.$emit('getFormula')
                        
                        if(this.$route.path === ( '/course-upload')){
                            this.$emit('courseCreated', "topic") 
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
            },

           
        }
    }
    
</script>
