<template>
    <div>
        <div class="div1">
            这里放图片
        </div>
        <div class=div2>
            <el-col :span="1" style="color:transparent">''</el-col>
            <el-col :span="15">
            <h3>评论反馈</h3>
            <span class="lebal">联系方式</span>
            <el-input v-model="youremail" placeholder="请输入您的邮箱"></el-input>
            <span class="lebal">标题</span>
            <el-input v-model="fbtitle" placeholder="请输入标题"></el-input>
            <span class="lebal">评论内容</span>
            <el-input type="textarea"  v-model="fbcontent" placeholder="请输入您的反馈内容"></el-input>

            <el-button type="primary" style="margin:20px;" @click="sendfeedback">发送</el-button>
        </el-col>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            youremail:'',
            fbtitle:'',
            fbcontent:''
        }
    },
     methods:{
                sendfeedback(){
                    this.$router.push({name:'feedbacklist'});
                }
             }
}
</script>

<style scoped>
  .lebal{
        display: inline-block;
        padding:10px 0;
        color: #333;
        font-size:12px;
    }
    el-input{
        margin-top:5px;
        width:60px;
    }
    .div1{
        height:400px;
        width:50%;
         float:left; 
        background-color:rgb(174, 182, 174);
    }
     .div2{
        width:50%;
         float:left; 
        
    }

</style>
