<template>
    <div class="demo-input-suffix">
        <el-row>
          <el-form>
            <el-button type="info" round @click="successed">已完成</el-button>
            <el-button type="info" round @click="unsuccessed">未完成</el-button>
            <el-button style="float: right" type="info" round @click="search">搜索</el-button>
            <el-input @keyup.enter="search()" style="width:150px ; float: right" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input"></el-input>
          </el-form>    
        </el-row><!--enter有问题-->
        <br>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          input: ''
        }
      },

      methods: {
        successed() {
          this.$router.push({name:'successpj'});
        },
        unsuccessed(){
          this.$router.push({name:'unsuccesspj'});//考虑和上面的合并
        },
        search(){
          //与上面相同 只是获取的data不一样
          console.log(this.input)
        }
      }
  }
</script>
