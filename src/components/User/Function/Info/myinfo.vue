<template>
    <div>
    <el-form  label-position="left" label-width="90px" :model="formLabelAlign">
        <el-row>
            <el-col span="10">
                <el-form-item label="昵称">
                <el-input v-model="formLabelAlign.nickname" placeholder="已注册内容"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                <el-input v-model="formLabelAlign.realname" placeholder="已注册内容"></el-input>
                </el-form-item>
                <el-form-item label="身份证号">
                <el-input v-model="formLabelAlign.idnumber" placeholder="已注册内容"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                <el-input v-model="formLabelAlign.youremial" placeholder="已注册内容"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                <el-input v-model="formLabelAlign.phone" placeholder="已注册内容"></el-input>
                </el-form-item>
                <el-form-item label="建筑师证号">
                <el-input v-model="formLabelAlign.architectnum" placeholder="已注册内容"></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="1" style="color:transparent">''</el-col>
            <el-col span="10">
                <el-form-item label="公司名称">
                <el-input v-model="formLabelAlign.comname" placeholder="已注册内容"></el-input>
                </el-form-item>
                <el-form-item label="证件号">
                <el-input v-model="formLabelAlign.comnum" placeholder="已注册内容"></el-input>
                </el-form-item>
                <el-form-item label="公司职务">
                <el-input v-model="formLabelAlign.composition" placeholder="已注册内容"></el-input>
                </el-form-item>
                <br>
                <br>
                <br>
                <br>
                <br>
                <el-button type="primary" style="margin:20px;" @click="goToEdit">编辑</el-button>
            </el-col>
        </el-row>
    </el-form> 


        <!-- <el-col :span="10">
            <h3>基本信息</h3>
            <span class="lebal">昵称</span>
            <el-input v-model="nickname" placeholder="已注册内容"></el-input>
            <span class="lebal">真实姓名</span>
            <el-input v-model="realname" placeholder="已注册内容"></el-input>
            <span class="lebal">身份证号</span>
            <el-input v-model="idnumber" placeholder="已注册内容"></el-input>
            <span class="lebal">邮箱</span>
            <el-input v-model="youremail" placeholder="已注册内容"></el-input>
            <span class="lebal">手机号</span>
            <el-input v-model="phone" placeholder="已注册内容"></el-input>
            <span class="lebal">建筑师证号</span>
            <el-input v-model="architectnum" placeholder="已注册内容"></el-input>
        </el-col>
        <el-col :span="1" style="color:transparent">''</el-col>
        <el-col :span="11">
            <h3>公司信息</h3>
             <span class="lebal">公司名称</span>
            <el-input v-model="comname" placeholder="已注册内容"></el-input>
            <span class="lebal">证件号</span>
            <el-input v-model="comnum" placeholder="已注册内容"></el-input>
            <span class="lebal">公司职务</span>
            <el-input v-model="composition" placeholder="已注册内容"></el-input>
            <br>
            <br>
            <el-button type="primary" style="margin:20px;" @click="goToEdit">编辑</el-button>
        </el-col> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
                formLabelAlign: {
                nickname: '',
                realname:'',
                youremail:'',
                phone:'',
                architectnum:'',
                comname:'',
                comnum:'',
                composition:''
                }
             }
        },
    methods:{
            goToEdit()
            {
                this.$prompt('请输入您的密码', '安全提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
                }).then(({ value }) => {
                this.$router.push({name:'editinfo'});
                });

                //this.$router.push({name:'editinfo'});
            }
            }
}
</script>

<style scoped>
    .lebal{
        display: inline-block;
        padding:12px 0;
        color: #333;
        font-size:14px;
    }
    el-input{
        margin-top:5px;
        width:40px;
    }
</style>
   