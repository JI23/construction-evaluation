<template>
    <div>
        <el-col :span="10">
            <span class="lebal">建筑材料</span>
            <el-input size='small' v-model="pjname" placeholder="请输入内容"></el-input>
            <span class="lebal">结构类型</span>
            <el-input size='small' v-model="pjindex" placeholder="请输入内容"></el-input>
            <span class="lebal">图审时间</span>
            <el-input size='small' v-model="time" placeholder="请输入内容"></el-input>
            <span class="lebal">结构层数</span>
            <el-input size='small' v-model="floors" placeholder="请输入内容"></el-input>
            <span class="lebal">结构高度(m)</span>
            <el-input size='small' v-model="height" placeholder="请输入内容"></el-input>
            <span class="lebal">建筑面积(m^2)</span>
            <el-input size='small' v-model="area" placeholder="请输入内容"></el-input>
            <span class="lebal">单位造价(元)</span>
            <el-input size='small' v-model="cost" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="1" style="color:transparent">''</el-col>
        <el-col :span="11">
            <h3>项目说明</h3>
            <el-input
                type="textarea"
                :rows="15"
                placeholder="请输入内容"
                v-model="textarea">
            </el-input>
        </el-col>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pjname:'',
            pjindex:'',
            clientName:'',
            principal:'',
            textarea:''
        }
    }
}
</script>

<style scoped>

    .lebal{
        display: inline-block;
        padding:10px 0 5px 0;
        color: #333;
        font-size:14px;
    }
    .step2input{
        display: block;
        size:'small';
        margin:0 0 0 0;
    }
    
    

</style>
