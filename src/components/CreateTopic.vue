<template>
    <div class="row">
        <div class="col-lg-12">
            <span style="font-weight: 400;">TOPICS </span> <span style="float: right;">  <span @click="addTopic" class="btn topic-btn">Add More Topic</span></span>
        </div>
        <div>
            <p>Topic 1</p>
            <div class="mb-3">
                <label for="pwd" class="form-label">Topic name</label>
                <input type="text" class="form-control" id="pwd" placeholder="" v-model="topic_name">
                <label for="pwd" class="form-label mt-4">Description</label>
                <textarea class="form-control" rows="3"  v-model="topic_name" /> 
            
            </div>
            <div v-for="(topic, index) in topics" :key="index">
                <label for="pwd" class="form-label">Topic name{{ index }} </label>
                <input type="text" class="form-control" id="pwd" placeholder="" v-model="topic.title">
                <label for="pwd" class="form-label mt-4">Description</label>
                <textarea class="form-control" rows="3"  v-model="topic.description" /> 
            </div>
            <div class="mb-3">
                <!-- <VueFileAgent  v-model="topic_video"> </VueFileAgent> -->
            </div>
        </div>
      
    </div>
</template>

<script>
    export default{
        data(){
            return{
                topics: []
            }
        },

        methods: {
            addTopic(){
                this.topics.push({title: '', description: '', resource: ''})
            }
        }
    }
</script>