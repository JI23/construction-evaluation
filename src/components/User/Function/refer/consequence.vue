<template>
    <div>
        <el-button style="position: relative; left: 30px;top: 20px" type="info" round @click="geninfo">gen con info</el-button>
        <el-button style="position: relative; left: 30px;top: 20px" type="info" round @click="recost">re cost</el-button>
        <el-button style="position: relative; left: 30px;top: 20px" type="info" round @click="retime">re time</el-button>
        <el-button style="position: relative; left: 30px;top: 20px" type="info" round @click="others">others</el-button>
        <router-view></router-view>
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
            geninfo(){
                this.$router.push({name:'gen_info'});
            },
            retime(){
                this.$router.push({name:'re_time'});
            },
            recost(){
                this.$router.push({name:'re_cost'});
            },
            others(){
                this.$router.push({name:'others'});
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