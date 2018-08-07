<template>
    <div>
        <el-row>
            <el-button type="info" round @click="successed">已完成</el-button>
            <el-button type="info" round @click="unsuccessed">未完成</el-button>
        </el-row>
        <br>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    methods: {
      successed() {
        this.$router.push({name:'successpj'});
      },
      unsuccessed(){
        this.$router.push({name:'unsuccesspj'});
      }
    }
  }
</script>
