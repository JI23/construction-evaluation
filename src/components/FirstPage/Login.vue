<template> 
    <div class="container">
        <h1>登录表单</h1>
        <el-button type="primary" style="margin:20px;" @click="login">Login</el-button>
    </div>
</template>
<script>
export default {
    methods:{
        login(){
            this.$router.push({name:'dashboard'});
        }
    }
}
</script>

