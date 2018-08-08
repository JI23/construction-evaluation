<template>
    <div>
        <div class="box1" >
          <el-col>
            <span class="lebal">项目名称</span>
            <el-input style="width:100%" v-model="id" placeholder="请输入内容"></el-input>
            <span class="lebal">项目编号</span>
            <el-input  style="width:100%" v-model="name" placeholder="请输入内容"></el-input>
            <span class="lebal">客户名称</span>
            <el-input style="width:100%" type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea1"></el-input>
            <span class="lebal">要求系数</span><br>
            <el-select size="mini" v-model="value4" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"><!--data未设置 -->
              </el-option>
            </el-select>
            <el-row style="float: right; top: -30px; left:18px">
              <el-button circle size="small" @click="open">编辑</el-button><!--弹窗 未实现 -->
              <el-button circle size="small">添加</el-button>
            </el-row>
          </el-col>
        </div>
        <div class="box1">
            <el-col>
              <br>
              <el-switch style="position:relative;" v-model="value1" active-text="use demand value from floor" inactive-text=" ">></el-switch><br><br>
              <el-switch style="position:relative;" v-model="value2" active-text="use supplied data needed" inactive-text=" ">></el-switch><br><br>
              <span class="lebal">Directional</span><br>
              <el-radio v-model="directional" label="1">备选项</el-radio>
              <el-radio v-model="directional" label="2">备选项</el-radio><br>
              <span class="lebal">Correlation</span><br>
              <el-radio v-model="correlation" label="1">备选项</el-radio>
              <el-radio v-model="correlation" label="2">备选项</el-radio><br><br><br>
              <el-button style="display:block;margin:0 auto" @click="savegen">保存</el-button>
            </el-col>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          value2: false,
          value1: false,
          directional: '1',
          correlation: '1',
          id:"",
          name:"",
          describe:"",
          textarea1:"",
          options: [{
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
            label: 'DB_User'
          }, {
            value: '选项5',
            label: 'DB_Office'
          }, {
            value: '选项6',
            label: 'DB_FEMA'
          }],
          value4:''
        }
      },

      methods: {
        savegen() {//保存当前页面内容

        },
        open() {
          this.$alert('这是一段内容', '要求系数编辑', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
        }
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