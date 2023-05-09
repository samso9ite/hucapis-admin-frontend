<template>
    <div>
        <SideNav />
        <div class="main" style="">
        <TopHeader />
        <div class=" container-fluid" style="padding: 1.3rem;">
            <h6 class="mb-4" style="color:#6B70EC; font-size:20px; font-weight: 400;">LEARNERS</h6>
            <LearnersComponent   v-if="learners.data.length > 0" :students="learners.data" />
            <p v-else> No learners on the platform yet!</p>

            <Pagination 
            :items="learners.data" 
            @changePage="getLearners" 
            :maxPages="learners.last_page" 
            :totalItems="learners.total"
            :pageSize="learners.per_page"></Pagination>
          </div>
        <!-- </div> -->
     
    </div>
</div>
</template>

<script>
import TopHeader from '@/components/General/TopHeader.vue';
import SideNav from '@/components/General/SideNav.vue';
import Api from './Api';
import LearnersComponent from '@/components/LearnersComponent.vue';
import Pagination from '../components/General/Pagination.vue';

    export default{
        name: "Learners",
        components: {TopHeader, SideNav, LearnersComponent, Pagination},
        data(){
            return{
                learners: [],
            }
        },

        methods: {
            getLearners(pageOfItems){
                let page = pageOfItems; let per_page = 25
                Api.axios_instance.get(Api.baseUrl + "all_learners" + "?page=" + page + "&per_page=" + per_page).then(res => {
                       this.learners = res.data.data
                    });
                },
            },
        

        mounted(){
            this.getLearners()   
        }
    }
</script>