<template>
    <div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="gen_con_info" name="gen_con_info"></el-tab-pane>
            <el-tab-pane label="re_cost" name="re_cost"></el-tab-pane>
            <el-tab-pane label="re_time" name="re_time"></el-tab-pane>
            <el-tab-pane label="others" name="others"></el-tab-pane>
        </el-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'gen_con_info',
        
            }
        },

        mounted: function () {
            var vm = this
            // 用$on事件来接收参数
            var label = JSON.parse(localStorage.getItem("label"));
            
            localStorage.removeItem("label");
        },

        methods: {
            handleClick(tab, event){
                if(tab.name === "gen_con_info"){
                    this.$router.push({name:'gen_info'});
                }
                else if(tab.name === "re_cost"){
                    this.$router.push({name:'re_cost'});
                }
                else if(tab.name === "re_time"){
                    this.$router.push({name:'re_time'});
                }
                else if(tab.name === "others"){
                    this.$router.push({name:'others'});
                }
            }
            
        }
    }
</script>


<style scoped>

</style>