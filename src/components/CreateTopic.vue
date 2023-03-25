<template>
    <div class="row">
        <div class="col-lg-12">
            <span style="font-weight: 400;">TOPICS </span> <span style="float: right;">  <span @click="addTopic" class="btn topic-btn">Add More Topic</span></span>
        </div>
        <div>
            <div v-for="(topic, index) in topics" :key="index" class="mb-3">
                <p class="mb-3">Topic {{ index }}</p>
                <label for="pwd" class="form-label">Topic name{{ index }} </label>
                <input type="text" class="form-control" placeholder="" v-model="topic.title">
                <label for="pwd" class="form-label mt-4">Description</label>
                <textarea class="form-control" rows="3"  v-model="topic.description" /> 
                <div class="mb-3">
                    <!-- <VueFileAgent
                        ref="vueFileAgent"
                        :theme="'list'"
                        :multiple="true"
                        :deletable="true"
                        :meta="true"
                        :maxFiles="2"
                        @change="handleFileUpload"
                    
                        v-model="resource">
                    </VueFileAgent> -->

                    <input type="file" accept=""  @change="handleFileUpload" ref="reso" />
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>

import Uploader from "vux-uploader-component";
import Api from '../views/Api';

export default{
        components: {Uploader},
        data(){
            return{
                resource: [],
                course_id: localStorage.getItem('created_course_id'),
                // uploadHeaders: {'Accept': 'application/json', 'Authorization': 'Bearer ${token}'},
                topics: [{title: '', description: '', resource: '', course_id: localStorage.getItem('created_course_id')}],
                fileRecordsForUpload: [],
            }
        },

        methods: {
      
            addTopic(){
                console.log(this.course_id);
                this.topics.push({title: '', description: '', resource: '', course_id: this.course_id})
                console.log(this.topics);
            },
            handleFileUpload(){
                // console.log(this.$refs.reso);
                this.resource = this.$refs.reso[0].files[0]
                console.log(this.resource);
                const formData = new FormData();
                formData.append('resource', this.resource)
                formData.append('topic_id', '1')
                Api.axios_instance.post(Api.baseUrl+'add_resource_to_topic', formData).
                then(res => {
                    console.log(res);
                })
                
        },
            submitTopics(){
                const formData = new FormData();
                formData.append('topics[]', this.topics)
                Api.axios_instance.post(Api.baseUrl+'topics_multiple', formData)
                .then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>
