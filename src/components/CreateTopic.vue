<template>
    <div class="row">
       <div>
                <label for="pwd" class="form-label">Topic name </label>
                <input type="text" class="form-control" v-model="title">
                <label for="pwd" class="form-label mt-4">Description</label>
                <textarea class="form-control" rows="3"  v-model="description" /> 
                <div class="mb-3">
                 <label for="pwd" class="form-label mt-4">Upload Video</label>
                    <input type="file" accept="" @change="handleFileUpload" ref="vid" />
                </div>

                <span v-if="mode ===  'editTopic'" @click="updateTopic" class="btn topic-btn mt-3">  Update Topic</span> 
                <span v-else class="btn topic-btn mt-3" @click="submitTopic">Add Topic</span>
            </div>
        </div>
 
</template>

<script>

import Uploader from "vux-uploader-component";
import Api from '../views/Api';

export default{
        components: {Uploader},
        props: ["mode"],
        watch: {
            '$store.state.course_edit': function(){
                let topics = this.$store.state.course_edit[0].topics
                let topic_id = this.$route.params.topic_id
                this.selected_topic = topics.filter(topic => topic.id == topic_id)
                this.title = this.selected_topic[0].title
                this.description = this.selected_topic[0].description
                this.resource = this.selected_topic[0].video_url
                this.course_id = this.selected_topic[0].course_id
        }
    },
        data(){
            return{
                resources: [],
                resource: [],
                topic_id: '',
                title: '',
                course_id: localStorage.getItem('created_course_id'),
                description: '',
                topics: [{title: '', description: '', resource: '', course_id: localStorage.getItem('created_course_id')}],
                fileRecordsForUpload: [],
                selected_topic: {}
            }
        },
        
        
        methods: {
            addTopic(){
                this.topics.push({title: '', description: '', course_id: this.course_id})
            },
            handleFileUpload(){
                this.resource = this.$refs.vid.files[0]
                console.log(this.resource);
            },
            submitTopic(){
                let formData = {
                    title: this.title,
                    description: this.description,
                    course_id: this.course_id
                }
                Api.axios_instance.post(Api.baseUrl+'topics', formData)
                .then(async res => {
                    this.topic_id = res.data.data.id
                    const vidData = new FormData()
                    vidData.append('resources[]', this.resource)
                    vidData.append('topic_id', this.topic_id)
                    await Api.axios_instance.post(Api.baseUrl+'add_resource_to_topic', vidData)
                    .then(res => {
                        this.topic_id = '',
                        this.resource = '',
                        this.description = '',
                        this.title = '' 
                        this.$refs.vid = ''
                        this.$toastr.s("Topic Created Successfully");
                    })
                   
                })
            },
            updateTopic(){
                let formData = {
                    title: this.title,
                    description: this.description,
                    course_id: this.course_id,
                }
                Api.axios_instance.put(Api.baseUrl+'topics/'+this.topic_id, formData)
                .then(async res => {
                    console.log(res);
                    this.$toastr.Add({
                        msg: "Updated Topic Successfully",
                        position: "toast-top-right",
                        type: "success", 
                        preventDuplicates: true,
                        style: { backgroundColor: "green" } 
                        });
                })
            }
        }
    }
    
</script>
