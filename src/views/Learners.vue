<template>
    <div>
        <SideNav />
        <div class="main" style="">
        <TopHeader />
        <div class=" container-fluid" style="padding: 1.3rem;">
       <h6 class="mb-4" style="color:#6B70EC; font-size:20px; font-weight: 400;">LEARNERS (30,000)</h6>
        
        <table class="table learners" style="background-color: #fff;">
            <tbody>
                <tr>
                    <td>NAME <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>EMAIL  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>PHONE NUMBBER  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>COUNTRY  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>NO. OF COURSES  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                  </tr>
              <tr>
                <td>John Samson</td>
                <td>john@example.com</td>
                <td>08112417083</td>
                <td>Russia</td>
                <td>67</td>
              </tr>

              <tr>
                <td>John Samson</td>
                <td>john@example.com</td>
                <td>08112417083</td>
                <td>Russia</td>
                <td>67</td>
              </tr>

              <tr>
                <td>John Samson</td>
                <td>john@example.com</td>
                <td>08112417083</td>
                <td>Russia</td>
                <td>67</td>
              </tr>

              <tr>
                <td>John Samson</td>
                <td>john@example.com</td>
                <td>08112417083</td>
                <td>Russia</td>
                <td>67</td>
              </tr>
             
            </tbody>
          </table>
    </div>
    </div>
</div>
</template>

<script>
import TopHeader from '@/components/General/TopHeader.vue';
import SideNav from '@/components/General/SideNav.vue';
import Api from './Api';

    export default{
        name: "Learners",
        components: {TopHeader, SideNav},
        data(){

        }
    }
</script>