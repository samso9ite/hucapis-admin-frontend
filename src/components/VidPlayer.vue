<template>
    <div class="card card-style" style="">
        <video controls v-if="topic[0].media.length > 0">
            <source :src="topic[0].media[0].original_url" type="video/mp4">
           Your browser does not support the video tag.
        </video>
     <img v-else src="https://www.shutterstock.com/image-vector/colored-modern-background-style-social-260nw-1752679094.jpg">
    </div>
</template>

<script>

export default{
    props: ["topic"],
    components: {},
    data() {
        return {
            
        }
    },
    watch: {
        '$route' () {
            this.$emit('getTopic')
        }
    },

}
</script>