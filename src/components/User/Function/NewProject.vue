<template>
    <div>
        <el-steps :active="active" finish-status="success" align-center>
            <el-step title="项目信息"></el-step>
            <el-step title="建筑信息"></el-step>
            <el-step title="结构构件"></el-step>
            <el-step title="非结构构件"></el-step>
            <el-step title="地震信息"></el-step>
            <el-step title="结构响应"></el-step>
        </el-steps>
        <el-button size="small" style="margin-top: 12px;" @click="next">下一步</el-button>
        <el-button size="small" style="margin-top: 12px;" @click="back">上一步</el-button>
        <router-view class="input clearfix"></router-view>
    </div>
</template>
    
<script>
  export default {
    data() {
      return {
        active: 0,
        activeRouter:'step1'
      };
    },

    methods: {
      next() {  
        if (++this.active > 5) {
            this.active = 0;
        }
            this.activeRouter = 'step' + (this.active + 1)
            this.$router.push({name:this.activeRouter})
      },
      back(){
          if(this.active-- == 0) this.active = 0;
          this.activeRouter = 'step' + (this.active + 1)
            this.$router.push({name:this.activeRouter})
      }
    }
  }
</script>

<style scoped>
    .input{
        width: 100%;
        height: 430px;
    }
    .clearfix:after{
        content:"";
        display: block;
        clear: both;
    }
</style>


