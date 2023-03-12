<template>
    <div>
    <SideNav />
    <div class="main" style="">
    <TopHeader />
    <div class=" container-fluid" style="padding: 1.3rem;">
    <ul class="breadcrumb">
        <li><a href="#"><img src="../assets/admin/breadcrumb_home.svg" style="padding-right:10px ;"/> Learners</a></li>
        <li><a href="#">Learners Profile</a></li>
    </ul>
    <div class="container-fluid mt-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 mb-5" >
                    <img src="/assets/img/photo.svg"/>  <br>
                    <p style="font-size: 20px;" class="mt-4">PERSONAL INFORMATION</p>

                    <form action="" style=" width:90%">
                        <div class="mb-3 mt-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="email" placeholder="" name="email">
                        </div>
                        <div class="mb-3">
                        <label for="pwd" class="form-label">Username</label>
                        <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Email</label>
                            <input type="email" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Country</label>
                            <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                    
                        <p style="font-size: 20px;" class="mt-5 mb-3">SECURITY</p>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Current Password</label>
                            <input type="text" class="form-control" value="******" id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                      
                        <p style="font-size: 20px;" class="mt-5 mb-3">PROFILE OVERVIEW</p>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Date Joined</label>
                            <input type="text" class="form-control" value="23 Nov 2021, 4:20 PM" id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Amount Spent</label>
                            <input type="text" class="form-control" value=" $7,920.00 " id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Tutors Learnt From</label>
                            <input type="text" class="form-control" value=" $7,920.00 " id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Learning Hours</label>
                            <input type="text" class="form-control" value="213 Hours" id="pwd" placeholder="Enter password" name="pswd">
                        </div>

                    </form>
                    
                </div>
            </div>
            <div class="row">
                <p style="font-size: 20px;" >COURSES</p>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card" style="background-color: #fff;">
                                    <img class="card-img-top" src="../assets/img/courses/courseImage4.svg" alt="Card image">
                                    <div class="card-img-overlay" style="color: white;"> <img src="/assets/admin/trash.svg" width="40px"/>  </div>
                                    <div class="card-body">
                                    <h5 class="card-title text-uppercase">Course Title</h5>
                                    <p class="card-text">Morbi morbi nunc, nulla ultricies nec nulla. Morbi mo
                                        rbi nunc, nulla ultricies nec nulla.</p>
                                     <i class="fa fa-star" aria-hidden="true" style="color: #FFA360;"> </i> 4.1(190k Reviews) <span style="float: right"><img src="/assets/img/yellow_love.svg" /></span><br>
                                    <div class="div mt-4">
                                        <a href="#" class="btn btn-primary card-btn-full">Add to cart</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card" style="background-color: #fff;">
                                    <img class="card-img-top" src="../assets/img/courses/courseImage4.svg" alt="Card image">
                                    <div class="card-img-overlay" style="color: white;"> <img src="/assets/admin/trash.svg" width="40px"/> </div>
                                    <div class="card-body">
                                    <h5 class="card-title text-uppercase">Course Title</h5>
                                    <p class="card-text">Morbi morbi nunc, nulla ultricies nec nulla. Morbi mo
                                        rbi nunc, nulla ultricies nec nulla.</p>
                                     <i class="fa fa-star" aria-hidden="true" style="color: #FFA360;"> </i> 4.1(190k Reviews) <span style="float: right"><img src="/assets/img/yellow_love.svg" /></span><br>
                                    <div class="div mt-4">
                                        <a href="#" class="btn btn-primary card-btn-full">Add to cart</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card" style="background-color: #fff;">
                                    <img class="card-img-top" src="../assets/img/courses/courseImage4.svg" alt="Card image">
                                    <div class="card-img-overlay" style="color: white; float: right;"> <img src="/assets/admin/trash.svg" width="40px"/>  </div>
                                    <div class="card-body">
                                    <h5 class="card-title text-uppercase">Course Title</h5>
                                    <p class="card-text">Morbi morbi nunc, nulla ultricies nec nulla. Morbi mo
                                        rbi nunc, nulla ultricies nec nulla.</p>
                                     <i class="fa fa-star" aria-hidden="true" style="color: #FFA360;"> </i> 4.1(190k Reviews) <span style="float: right"><img src="/assets/img/yellow_love.svg" /></span><br>
                                    <div class="div mt-4">
                                        <a href="#" class="btn btn-primary card-btn-full">Add to cart</a>
                                    </div>
                                    </div>
                                </div>
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
import TopHeader from '@/components/General/TopHeader.vue';
import SideNav from '@/components/General/SideNav.vue';

    export default{
        name: "LearnersProfile",
        components: {TopHeader, SideNav},
        data(){
            return{

            }
        }
    }
</script>