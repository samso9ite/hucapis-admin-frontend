<template>
    <div class="row">
        <div class="col-lg-12">
            <span style="font-weight: 400;">Sharing Formula </span> <span style="float: right;">  <span @click="addShare" class="btn topic-btn">Add More User</span></span>
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
        <span @click="submitShares" class="btn topic-btn">Submit Shares</span>
    </div>
 
</template>

<script>

import Uploader from "vux-uploader-component";
import Api from '../views/Api';
import {mapGetters} from 'vuex'

export default{
        computed: {...mapGetters({instructors:"instructors"})},
        props: ["mode"],
        watch: {
            '$store.state.course_edit': function(){
               
        }
    },
        data(){
            return{
                course_id: localStorage.getItem('created_course_id'),
                users : [],
                share: '',
                shares: [{user_id: '', share: ''}]
            }
        },
        
        
        methods: {
            addShare(){
                this.shares.push({user_id: '', share: ''})
            },
            submitShares(){
                Api.axios_instance.post(Api.baseUrl+('courses/'+this.course_id+'/sharing_formula'), { sharingFormulas:this.shares})
                .then(res => {
                    this.$toastr.Add({
                        msg: "Forumla Created Successfully",
                        position: "toast-top-right",
                        type: "success", 
                        preventDuplicates: true,
                        style: { backgroundColor: "green" } 
                        });
                    if(this.$route.path === ( '/course-upload/')){
                        this.$emit('courseCreated', "topic") 
                    }
                   
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    }
    
</script>
