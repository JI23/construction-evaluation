<template>
    <div class="wrapper">
        <div class="box10"></div>
        <el-button @click="test">下载证书</el-button>
        <el-button @click="test">下载项目详细信息</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              
            }
        },

        methods: {
            test(){

            }
        }
    }
</script>


<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .box10{
        width:600px;
        height:300px;
        margin:18px 20px;
        background: url(../../../../assets/hometest1.jpg) center no-repeat;
    }

    .el-button{
        display: block;
        width:150px;
        margin:5px 0;
    }



</style>