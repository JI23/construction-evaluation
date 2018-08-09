<template>
  <div width=800px>
    <div class="box" style="width:25%">
      <el-tree :default-expand-all="true" :data="data"  @node-click="handleNodeClick" ></el-tree>
    </div>   
    <div class="box" style="width:65%">
      <router-view></router-view>
    </div> 
  </div>
</template>

<script>
    export default {
      data() {
        return {
          data: [{
            label: 'General Info',
            children: [{
              label: 'Damage State Type',
              children: [{
                label: 'Damage State 1',
                children: [{
                  label: 'Consequence Functions'
                }]
              }]
            }],
          }, {
            label: 'Add Damage State'
          }],
  
        }
      },

      methods: {
        handleNodeClick(data) {
          //console.log(data.label);
          if(data.label === 'General Info'){
            this.$router.push({name:'general_info'});
          }
          else if(data.label === 'Damage State Type'){
            this.$router.push({name:'damage_state'});
          }
          else if(data.label === 'Consequence Functions'){
            this.$router.push({name:'consequence'});
          }
          else{
            this.$router.push({name:'statenum'});
          }
        }
      }
  }
</script>


<style scoped>
  .box{
    position:relative;/*相对定位:参考物*/
    float:left;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
    height:450px;
    margin:18px 20px;
    border-style: outset
}

</style>