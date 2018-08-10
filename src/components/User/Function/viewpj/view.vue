<template>
    <div>
        <div class="box7" >
            <el-col>
                <h2>基本信息</h2>
                <span class="lebal">项目名称</span>
                <el-input :disabled="true" size="mini" style="width:100%" v-model="pjname" placeholder="请输入内容"></el-input>
                <span class="lebal">项目编号</span>
                <el-input :disabled="true" size="mini" style="width:100%" v-model="pjname" placeholder="请输入内容"></el-input>
                <span class="lebal">客户名称</span>
                <el-input :disabled="true" size="mini" style="width:100%" v-model="customer" placeholder="请输入内容"></el-input>
                <span class="lebal">项目负责人</span>
                <el-input :disabled="true" size="mini" style="width:100%" v-model="per" placeholder="请输入内容"></el-input>
                <span class="lebal">创建时间</span>
                <el-input :disabled="true" size="mini" style="width:100%" v-model="time" placeholder="请输入内容"></el-input><br><br>
                <el-button style="display:block;margin:0 auto" @click="detail" type="info">查看详情</el-button>
            </el-col>
        </div>
        <div class="box7">
            <h2>证书信息</h2>
            <div class="box10">     
            </div>
            <h2>项目说明</h2>
            <el-input :disabled="true" style="width:100%" type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea1"></el-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pjname: '',
                pjnum: '',
                customer: '',
                per: '',
                time: '',
                textarea1: '',
            }
        },

        methods: {
            detail(){
                this.$router.push({name:'detail'});
            }
        }
    }
</script>


<style scoped>
    .box7{
        position:relative;/*相对定位:参考物*/
        float: left;;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
        width:45%;
        height:450px;
        margin:18px 20px;
    }

    .box10{
        position:relative;/*相对定位:参考物*/
        float: left;;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
        width:90%;
        height:45%;
        margin:18px 20px;
        background: url(../../../../assets/hometest1.jpg) center no-repeat;
    }

    .lebal{
        position:relative;
        display: inline-block;
        padding:9px 0;
        color: #333;
    }


</style>