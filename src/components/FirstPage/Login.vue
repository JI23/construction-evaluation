<!--<template> 
    <div class="container" positon="absolute" width="800px" height="500px" top="50%" left="50%" backgroundColor="red">
        <div width="200px" height="200px" position="absolute"   margin-left="auto"
margin-right="auto">
        <h1>登录表单</h1>
        <el-button type="primary" style="margin:20px;" @click="login">Login</el-button>
        </div>
    </div>
</template>-->
<template>
<div class=outerdiv>
    <div class=logindiv>
        <el-form  label-width="80px" :model="LoginLabel">
        <el-form-item label="手机号">
        <el-input v-model="LoginLabel.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
        <el-input v-model="LoginLabel.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        </el-form>
       
        <el-button @click="gotoRegister" type="text" size="small">没有账号？立即注册</el-button>
        <br>
        <br>
        <el-button type="primary" @click="login">登录</el-button>
    </div>
</div>
</template>



<script>
export default {
    data(){
        return{
            LoginLabel:{
                phone:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            this.$router.push({name:'dashboard'});
        },
        gotoRegister()
        {
            this.$router.push({name:'register'});
        }

    }
}
</script>

<style scoped>
    .logindiv{
            width:300px;
            height:200px;
            /* margin: 0 auto; */
            float:right;
            /* margin-left:800px; */
            margin-right:100px;
            margin-top: 100px;
            margin-bottom:120px;
            /* background:#CCD0D9; */
            padding: 50px 30px 40px 10px;
            text-align: center;
            border-radius:10px;
            opacity:0.8; 
            box-shadow:10px 10px 5px #888888;
    }
    .outerdiv{
            /* width:1262px; */
            height:510px;
            width:auto;
            /* display:flex; */
            /* position:relative; */
            background-color: rgb(233, 202, 207);
            /* padding-top: 100px;
            padding-left:800px;
            padding-bottom: 115px; */
            /* padding-top:10%;
            padding-left:60%;
            padding-bottom:20%; */
    }
</style>
