<template>
  <div>
    <div class="box6" >
      <el-col>
        <span class="lebal">修理信息</span>
        <el-input style="width:100%" type="textarea" :rows="13" placeholder="请输入内容" v-model="textarea1"></el-input>
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
  .box6{
    position:relative;/*相对定位:参考物*/
    left:20px;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
    top:10px;
    width:85%;
    height:300px;
    margin:18px 20px;
    
}





  .lebal{
    position:relative;
    display: inline-block;
    padding:12px 0;
    color: #333;
  }

</style>