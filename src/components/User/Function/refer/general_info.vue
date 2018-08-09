<template>
  <div>
    <el-button style="position: relative; left: 30px;top: 20px" type="info" round @click="general">general info</el-button>
    <el-button style="position: relative; left: 30px;top: 20px" type="info" round @click="notes">notes</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },

    methods: {
      general(){
        this.$router.push({name:'generalinfo'});
      },
      notes(){
        this.$router.push({name:'notes'});
      }
    }
  }
</script>