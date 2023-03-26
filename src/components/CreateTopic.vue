<template>
    <div class="row">
        <div class="col-lg-12">
            <span style="font-weight: 400;">TOPICS </span> <span style="float: right;">  <span @click="addTopic" class="btn topic-btn">Add More Topic</span></span>
        </div>
        <div>
            <!-- <div v-for="(topic, index) in topics" :key="index" class="mb-3">
                <p class="mb-3">Topic {{ index }}</p> -->
                <label for="pwd" class="form-label">Topic name </label>
                
                <input type="text" class="form-control" placeholder="" v-model="title">
                <label for="pwd" class="form-label mt-4">Description</label>
                <textarea class="form-control" rows="3"  v-model="description" /> 
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
                <label for="pwd" class="form-label mt-4">Upload Video</label>
                    <input type="file" accept="" @change="handleFileUpload" ref="vid" />
                </div>

                <span @click="submitTopic" class="btn topic-btn mt-3">Add Topic </span>
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
                resources: [],
                resource: '',
                topic_id: '',
                course_id: localStorage.getItem('created_course_id'),
                description: '',
                topics: [{title: '', description: '', resource: '', course_id: localStorage.getItem('created_course_id')}],
                fileRecordsForUpload: [],
            }
        },

        methods: {
            addTopic(){
                this.topics.push({title: '', description: '', course_id: this.course_id})
            },
            handleFileUpload(){
                this.resource = this.$refs.vid.files[0]
            //     const formData = new FormData();
            //     formData.append('resources', this.resource)
            //     formData.append('topic_id', this.course_id)
            //     Api.axios_instance.post(Api.baseUrl+'add_resource_to_topic', formData).
            //     then(res => {
            //         console.log(res);
            // })
                
        },
            submitTopic(){
                // const formData = new FormData();
                // formData.append('topics[]', this.topics)
                let formData = {
                    title: this.title,
                    description: this.description,
                    course_id: this.course_id
                }
                 Api.axios_instance.post(Api.baseUrl+'topics', formData)
                .then(async res => {
                    this.topic_id = res.data.data.id
                    const vidData = new FormData()
                    vidData.append('resources', this.resource)
                     vidData.append('topic_id', this.topic_id)
                    await Api.axios_instance.post(Api.baseUrl+'add_resource_to_topic', vidData)
                    .then(res => {
                        this.topic_id = '',
                        this.resource = '',
                        this.description = '',
                        this.title = ''
                        this.$toastr.s("Topic Created Successfully");
                    })
                   
                })
            }
        }
    }
</script>
