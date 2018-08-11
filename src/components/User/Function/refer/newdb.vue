<template>
    <div class="box" style="width:950px; height:450px;">
        <div class="box" style="width:25%; border:1px solid #DFE5EB; box-shadow: 10px 10px 5px #888888;">
            <el-tree  :expand-on-click-node="false" :default-expand-all="true" :data="data"  @node-click="handleNodeClick" ></el-tree>
        </div>   
        <div class="box" style="width:65%; border:1px solid #DFE5EB; box-shadow: 10px 10px 5px #888888;">
            <router-view></router-view>
        </div> 
    </div>
</template>

<script>    
    export default {
        data() {
            const data2 =  [{  
                label: 'General Info',
                children: [{
                    label: 'Damage State Type',
                    children: [{
                        label: 'Damage State 1',
                        children: [{
                            label: 'Consequence Functions'
                        }],
                    },{
                        label: 'Damage State 1',
                        children: [{
                            label: 'Consequence Functions'
                        }]
                    }]
                }],
            }, {
                label: 'Add Damage State'
            }];
            return {
                data: [{  
                    label: 'General Info',
                    children: [{
                        label: 'Damage State Type',
                        children: [{
                            label: 'Damage State 1',
                            children: [{
                                label: 'Consequence Functions'
                            }],
                        },{
                            label: 'Damage State 1',
                            children: [{
                                label: 'Consequence Functions'
                            }]
                        }]
                    }],
                }, {
                    label: 'Add Damage State'
                }],
                data6: JSON.parse(JSON.stringify(data2)), 
            }
        },

        methods: {
            handleNodeClick(data) {
                console.log(data.$treeNodeId);
                if(data.label === 'General Info'){
                    this.$router.push({name:'general_info'});
                }
                else if(data.label === 'Damage State Type'){
                    this.$router.push({name:'damage_state'});
                }
                else if(data.label === 'Consequence Functions'){
                    this.$router.push({name:'consequence'});
                    console.log(data)
                    localStorage.setItem("label",JSON.stringify(data.label));
                }
                else if(data.label === 'Add Damage State'){
                    this.data[0].children[0].children[2] = Object.assign({},this.data[0].children[0].children[0]);
                    this.data[0].children[0].children[2].label = 'hhh';
                    this.data = JSON.parse(JSON.stringify(this.data));
                    //console.log(this.data[0].children[0].children[2]);
                    //console.log(this.data[0].children[0].children);
                }
                else{
                    this.$router.push({name:'statenum'});
                    localStorage.setItem("label",JSON.stringify(data.label));
                }
            }
        }
  }
</script>


<style scoped>
    .box{
        border-radius:10px;
        position:relative;/*相对定位:参考物*/
        top:-10px;
        float:left;/*浮动:左浮动 与父元素的左端对齐 依次的往右端显示 一行显示不下就换行接着依次显示*/
        height:450px;
        margin:18px 20px;
    }

</style>



