<template>
     <table class="table learners" style="background-color: #fff;">
            <tbody>
                <tr>
                    <td>NAME <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>EMAIL  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>PHONE NUMBBER  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>COUNTRY  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>NO. OF COURSES  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                </tr>
                <tr v-for="student in students" :key="student">
                    <td>{{ student.name }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{student.phone_number}}</td>
                    <td>Nigeria</td>
                    <td>67</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
    export default{
        props: ['students'],
        data() {
            return {
                
            }
        },
    }
</script>