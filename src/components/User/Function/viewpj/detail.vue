<template>
    <div class="box11">
        <div class="box10">

        </div>
        <el-col >
            <el-button  style="display:block;margin:0 auto" @click="test">下载证书</el-button><br>
            <el-button  style="display:block;margin:0 auto" @click="test">下载项目详细信息</el-button>
        </el-col>
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


<style>
    .box10{
        position:relative;/*相对定位:参考物*/
        left: 20%;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
        width:60%;
        height:300px;
        margin:18px 20px;
        background: url(../../../../assets/hometest1.jpg) center no-repeat;
    }
    .box11{
        posttion:relative;
        width: 90%;
        height: 450px;
    }

    .lebal{
        position:relative;
        display: inline-block;
        padding:9px 0;
        color: #333;
    }


</style>