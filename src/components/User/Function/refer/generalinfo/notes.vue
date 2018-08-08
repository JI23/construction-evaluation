<template>
    <div>
        <div class="box1" >
          <el-col>
            <span class="lebal">Data quality</span>
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value1="item.value">
              </el-option>
            </el-select>

            <span class="lebal">Data relevance</span>
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value2="item.value">
              </el-option>
            </el-select>

            <span class="lebal">Documentation quailty</span>
            <el-select v-model="value3" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value3="item.value">
              </el-option>
            </el-select>

            <span class="lebal">Retionality</span>
            <el-select v-model="value4" placeholder="请选择">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value4="item.value">
              </el-option>
            </el-select>
          </el-col>
        </div>
        <div class="box1">
            <el-col>
              <span class="lebal">项目编号</span>
              <el-input  style="width:100%" v-model="name" placeholder="请输入内容"></el-input>
              <span class="lebal">客户名称</span>
              <el-input style="width:100%" type="textarea" :rows="6" placeholder="请输入内容" v-model="textarea1"></el-input><br><br>
              <el-button style="display:block;margin:0 auto" @click="savegen">保存</el-button>
            </el-col>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          options1: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value1: '',

          options2: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value2: '',

          options3: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value3: '',

          options4: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value4: ''
        }
      },

      methods: {
        savegen() {//保存当前页面内容

        },
      }
  }
</script>


<style>
  .box1{
    position:relative;/*相对定位:参考物*/
    float:left;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
    top:10px;
    width:43%;
    height:350px;
    margin:18px 20px;
    
}

  .lebal{
    position:relative;
    display: inline-block;
    padding:12px 0;
    color: #333;
  }

</style>