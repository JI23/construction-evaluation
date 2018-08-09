<template>
  <div>
    <div class="box7" >
      <el-col>
        <span class="lebal">Lower Quantity</span>
        <el-input size="mini" style="width:100%" v-model="l_quantity" placeholder="请输入内容"></el-input>
        <span class="lebal">Average Repair Time for Lower Quantity of</span>
        <el-input  size="mini" style="width:100%" v-model="aver_re_l" placeholder="请输入内容"></el-input>
        <span class="lebal">Upper Quantity</span>
        <el-input  size="mini" style="width:100%" v-model="u_quantity" placeholder="请输入内容"></el-input>
        <span class="lebal">Average Repair Time for Upper Quantity of</span>
        <el-input size="mini" style="width:100%" v-model="aver_re_u" placeholder="请输入内容"></el-input>
        <span class="lebal">COV</span>
        <el-input size="mini" style="width:100%" v-model="COV" placeholder="请输入内容"></el-input>
      </el-col>
    </div>
    <div class="box7">
      <el-col >
        <span class="lebal">项目编号</span>
          <el-select size="mini" v-model="value0" placeholder="请选择">
            <el-option
              v-for="item in options0"
              :key="item.value"
              :label="item.label"
              :value="item.value"><!--data未设置 -->
            </el-option>
          </el-select>
      </el-col>
      <h1>这里要画折线图！</h1>
    </div>
    
  </div>
</template>

<script>
    export default {
      data() {
        return {
          options0: [{
            value: '选项1',
            label: 'DB_Common'
          }, {
            value: '选项2',
            label: 'DB_School'
          }, {
            value: '选项3',
            label: 'DB_Hospital'
          }, {
            value: '选项4',
            label: 'DB_Office'
          }, {
            value: '选项6',
            label: 'DB_FEMA'
          }],
          value0:''
  
        }
      },

  }
</script>


<style>
  .box7{
    position:relative;/*相对定位:参考物*/
    float: left;;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
    top:5px;
    width:43%;
    height:300px;
    margin:18px 20px;
    
}





  .lebal{
    position:relative;
    display: inline-block;
    padding:9px 0;
    color: #333;
  }

</style>