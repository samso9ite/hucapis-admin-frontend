<template>
    <div>
       
        <SideNav />
        <div class="main" style="">
            
        <TopHeader />
        <div class=" container-fluid" style="padding: 1.3rem;">
    <ul class="breadcrumb">
        <li><a href="#"><img src="../../public/assets/admin/breadcrumb_home.svg" style="padding-right:10px ;"/> Courses</a></li>
        <li><a href="#">Course Information</a></li>
        <li class="active"><a href="#">Edit Course</a></li>
   
      </ul>
      <div class="col-lg-12" style="padding-left: 2rem;">
        <div class="row">
        <div class="col-lg-6" style="background-color: #fff; padding: 1rem;">
                <h6 style="font-weight:400; font-size:17px">CREATE NEW COURSE</h6>
                <form action="" >
                    <div class="mb-3 mt-3">
                    <label for="name" class="form-label">Course Title</label>
                    <input type="text" class="form-control" id="email" placeholder="" name="email">
                    </div>
                    <div class="mb-3">
                    <label for="pwd" class="form-label">Course Cost</label>
                    <input type="text" class="form-control" id="pwd" placeholder="" name="pswd">
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Course Thumbnail</label>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <input type="file" class="form-control" id="pwd" name="pswd">
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Course Brief</label>
                        <textarea rows="4" class="form-control"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Key Take Away</label>
                        <textarea rows="4" class="form-control"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <span style="font-weight: 400;">TOPICS</span> <span style="float: right;">  <a href="#" class="btn topic-btn">Add More Topic</a></span>
                        </div>
                    <p>Topic 1</p>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Topic name</label>
                        <input type="text" class="form-control" id="pwd" placeholder="" name="pswd">
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Upload Course Image</label>
                        <input type="file" class="form-control" id="" placeholder="" name="pswd">
                    </div>
                    </div>
                    
                </form>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
            <div class="col-md-4">
                <div class="card" style="background-color: #fff;">
                    <h6 style="font-weight:400; font-size:17px; margin-bottom: 2rem;">PREVIEW</h6>
                    <img class="card-img-top" src="../../public/assets/img/courses/course1.svg" alt="Card image">
                    <div class="card-body">
                    <h5 class="card-title text-uppercase">Course Title</h5>
                    <p class="card-text">Morbi morbi nunc, nulla ultricies nec nulla. Morbi mo
                        rbi nunc, nulla ultricies nec nulla.</p>
                   <span> <img src="../../public/assets/img/courses/floyd.svg" width="40px"/> Floyd Miles</span><span style="float: right;">5 <i class="fa fa-star" aria-hidden="true" style="color: #FFA360;"></i> </span><br>
                    <div class="div mt-4">
                    <span class="card-price"> $948.55</span> 
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
import SideNav from '@/components/General/SideNav.vue';
import TopHeader from '@/components/General/TopHeader.vue';
export default {
    name: "CourseUpload",
    components: {TopHeader, SideNav}
    
}
</script>