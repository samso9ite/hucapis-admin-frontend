<template>
     <table class="table learners" style="background-color: #fff;">
            <tbody>
                <tr>
                    <td>NAME <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>EMAIL  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>PHONE NUMBER  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                    <td>NO. OF COURSES  <img src="../../public/assets/admin/caret.svg" width="20"/></td>
                </tr>
                <tr v-for="student in students" :key="student">
                    <td>{{ student.name }} {{ student.last_name }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{student.phone_number}}</td>
                    <td>{{ student.courses_count }}</td>
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