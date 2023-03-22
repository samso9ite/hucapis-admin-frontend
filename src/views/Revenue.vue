<template>
    <div>
        <SideNav />
            <div class="main" style="">
        <TopHeader />
        <div class="container" style="margin: 2rem; margin-right: 2rem !important;">
    <div class="col-lg-12" >
       
        <div class="row" style="margin-right: 2rem;">
            <div class="col-lg-3">
                <div class="card" style="
                    flex-direction: row;"  >
                    <img class="card-img-left" src="../../public/assets/admin/dashboard_money.svg" alt="Card image" width="50">
                    <div class="" style="padding-left:1rem; padding-top:1rem ;">
                    <h4 class="card-title"><b>$928,928</b></h4>
                    <p>Today’s sales</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="card" style="
                    flex-direction: row;">
                    <img class="card-img-left" src="../../public/assets/admin/people.svg" alt="Card image" width="50">
                    <div class="" style="padding-left:1rem; padding-top:1rem ;">
                    <h4 class="card-title"><b>$928,928,928</b></h4>
                    <p>Total Purchase</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="card" style="
                    flex-direction: row;">
                    <img class="card-img-left" src="../../public/assets/admin/visitors.svg" alt="Card image" width="50">
                    <div class="" style="padding-left:1rem; padding-top:1rem ;">
                    <h4 class="card-title"><b>$928,928,928</b></h4>
                    <p> Visitors</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="card" style="
                    flex-direction: row;">
                    <img class="card-img-left" src="../../public/assets/admin/dashboard_money.svg" alt="Card image" width="50">
                    <div class="" style="padding-left:1rem; padding-top:1rem ;">
                    <h4 class="card-title"><b>$928,928,928</b></h4>
                    <p>Today’s sales</p>
                    </div>
                </div>
            </div>
   
        </div>


        <!-- Top Courses Section -->
        <div class="row">
            <div class="col-lg-6 mt-5">
                <p>Top Courses</p>
                <div class="card flex-row" style=" padding: 3px; border:none; margin-bottom: 10px;"><img class="card-img-left example-card-img-responsive" src="../../public/assets/admin/top_course.svg" />
                    <div class="card-body mt-3" style="padding-left: 3rem;">
                    <h5 class="card-title h5 h4-sm" style="font-weight: 400;">WEB DEVELPMENT MASTERCLASS</h5>
                    <p class="card-text">  <img class=" example-card-img-responsive" src="../../public/assets/admin/avatar1.svg" width="7%"/> Courtney Henry <span style="float:right; padding-right:2rem ;">₦88,654.88</span></p>
                    </div>
                </div>

                <div class="card flex-row" style=" padding: 3px; border:none; margin-bottom: 10px;"><img class="card-img-left example-card-img-responsive" src="../../public/assets/admin/top_course.svg" />
                    <div class="card-body mt-3" style="padding-left: 3rem;">
                    <h5 class="card-title h5 h4-sm" style="font-weight: 400;">WEB DEVELPMENT MASTERCLASS</h5>
                    <p class="card-text">  <img class=" example-card-img-responsive" src="../../public/assets/admin/avatar1.svg" width="7%"/> Courtney Henry <span style="float:right; padding-right:2rem ;">₦88,654.88</span></p>
                    </div>
                </div>

                <div class="card flex-row" style=" padding: 3px; border:none; margin-bottom: 10px;"><img class="card-img-left example-card-img-responsive" src="../../public/assets/admin/top_course.svg" />
                    <div class="card-body mt-3" style="padding-left: 3rem;">
                    <h5 class="card-title h5 h4-sm" style="font-weight: 400;">WEB DEVELPMENT MASTERCLASS</h5>
                    <p class="card-text">  <img class=" example-card-img-responsive" src="../../public/assets/admin/avatar1.svg" width="7%"/> Courtney Henry <span style="float:right; padding-right:2rem ;">₦88,654.88</span></p>
                    </div>
                </div>

              
            </div>

            <div class="col-lg-5 mt-5" style="margin-left: 3.5rem">
              <p>Leaderboard</p>  

              <div class="card flex-row" style=" padding:0px 3px; border:none;">
                <img class="card-img-left example-card-img-responsive" src="../../public/assets/admin/avatar1.svg" />
                <div class="card-body mt-3" style="padding-left: 3rem;">
                <p class=""> Mathew Olaoluwa  <span style="float:right; padding-right:2rem ;">₦88,654.88</span></p>
                <!-- <p class="card-text" ></p> -->
                </div>
                
            </div>
            <div class="card flex-row" style=" padding:-0px 3px; border:none; ">
                <img class="card-img-left example-card-img-responsive" src="../../public/assets/admin/avatar1.svg" />
                <div class="card-body mt-3" style="padding-left: 3rem;">
                <p class=""> Mathew Olaoluwa  <span style="float:right; padding-right:2rem ;">₦88,654.88</span></p>
                <!-- <p class="card-text" ></p> -->
                </div>
            </div>
            <div class="card flex-row" style=" padding: 3px; border:none; margin-bottom: 10px;">
                <img class="card-img-left example-card-img-responsive" src="../../public/assets/admin/avatar1.svg" />
                <div class="card-body mt-3" style="padding-left: 3rem;">
                <p class=""> Mathew Olaoluwa  <span style="float:right; padding-right:2rem ;">₦88,654.88</span></p>
                <!-- <p class="card-text" ></p> -->
                </div>
            </div>
            </div>
        </div>
      
    </div>

</div>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/General/SideNav.vue';
import TopHeader from '@/components/General/TopHeader.vue';
import Api from './Api';

    export default{
        name: "Revenue",
        components: {TopHeader, SideNav},
        data(){
            return{

            }
        }
    }
</script>