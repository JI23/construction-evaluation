<template>
  <div>
    <div class="box4" >
      <el-col>
        <span class="lebal">项目名称</span>
        <el-input style="width:100%" v-model="id" placeholder="请输入内容"></el-input>
        <span class="lebal">项目编号</span>
        <el-input  style="width:100%" v-model="name" placeholder="请输入内容"></el-input>
        <span class="lebal">项目编号</span>
        <el-input  style="width:100%" v-model="name" placeholder="请输入内容"></el-input>
        <span class="lebal">客户名称</span>
        <el-input style="width:100%" type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea1"></el-input>
      </el-col>
    </div>
    <div class="box4">
      <div class="box5">
        
      </div>
      <el-col >
        <el-button  style="position:relative; left:30px" @click="savegen">添加图片</el-button>
        <el-button  style="position:relative; left:50px" @click="savegen">删除图片</el-button><br><br><br>
        <el-button style="display:block;margin:0 auto" @click="savegen">保存</el-button>
      </el-col>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          data: [{
            
          }],
  
        }
      },

      methods: {
        
      }
  }
</script>


<style>
  .box4{
    position:relative;/*相对定位:参考物*/
    float:left;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
    top:10px;
    width:43%;
    height:350px;
    margin:18px 20px;
    
}

  .box5{
    position:relative;/*相对定位:参考物*/
    float:left;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
    top:10px;
    width: 90%;
    height:50%;
    margin:18px 20px;
    background: url(../../../../assets/hometest1.jpg) center no-repeat
}



  .lebal{
    position:relative;
    display: inline-block;
    padding:12px 0;
    color: #333;
  }

</style>