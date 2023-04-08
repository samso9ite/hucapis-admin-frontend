<template>
    <table class="table learners" style="background-color: #fff;">
           <tbody>
               <tr>
                   <td>Course <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                   <td>Cost  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                   <td>Amount Received  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                   <td>Share Percentage  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                   <td>Settlement Status  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
               </tr>
               <tr v-for="earning in earnings" :key="earning">
                    <td>{{ earning.course.title }} </td>
                    <td>{{ earning.course.cost }} </td>
                    <td>{{ earning.amount_recieved}}</td>
                    <td>{{ earning.share_percentage }}</td>
                    <td>{{ earning.settlement_status }}</td>
               </tr>
           </tbody>
       </table>
</template>

<script>
   export default{
       props: ['earnings'],
   }
</script>