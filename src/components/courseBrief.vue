<template>
    <div>
        <p class="mt-4" style="font-size:20px; font-weight:400">COURSE BRIEF:</p>
        <p class="card-text" :inner-html.prop="course.description"></p>
        <p class="mt-4" style="font-size:20px; font-weight:400">IN THIS COURSE, YOU WILL LEARN:</p>
        <div class="row">
            <ul class="list-unstyled" style="column-count: 2;" v-if="course.highlights.length > 0">
                <li class="mb-2 " style="padding-top: 1rem;" v-for="highlight in course.highlights" :key="highlight">
                    <img src="../../public/assets/img/course_list_icon.svg" /> {{ highlight.highlight }}
                </li>
            </ul>
            <p v-else>No highlights</p>
        </div>  
    </div>
</template>

<script>
    export default{
        props: ["course"],
        data() {
            return {
                
            }
        },
    }
</script>