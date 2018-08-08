<template>
    <div>
        <div>
            <el-carousel indicator-position="none">
                <el-carousel-item v-for="item in 4" :key="item">
                </el-carousel-item>
            </el-carousel>
        </div>
        <br><br>
        <div class="box" style= "background:rgba(213,153,168,1)">
            <h4>已完成项目</h4>
            <p>hhh</p>
        </div>
        <div class="box" style= "background:rgba(233,240,29,1)">
            <h4>未完成项目</h4>
            <p>hhh</p>
        </div>
        <div class="box">
            <h4>项目总数</h4>
            <p>hhh</p>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
        }
      },

  }
</script>

<style>
  .el-carousel__item:nth-child(4n) {
    background: url(../../../assets/hometest2.jpg) center no-repeat;
  }
  
  .el-carousel__item:nth-child(4n+1) {
    background: url(../../../assets/hometest3.jpg) center no-repeat;
  }

  .el-carousel__item:nth-child(4n+2) {
    background: url(../../../assets/hometest4.jpg) center no-repeat;
  }

  .el-carousel__item:nth-child(4n+3) {
    background: url(../../../assets/hometest1.jpg) center no-repeat;
  }

  .box{
    position:relative;/*相对定位:参考物*/
    float:left;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
    width:180px;
    height:100px;
    margin:18px 20px;
    background:rgba(241,124,103,1);/*red红色 green绿色 blue蓝色0-255  a透明度0-1*/
    text-align: center
}

</style>