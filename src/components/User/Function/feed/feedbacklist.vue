<template> 
  <div>
    <el-table
      :data="tableData" border height="250">
      <el-table-column
        fixed
        prop="fbdate"
        label="日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="fbtitle"
        label="标题"
        width="250">
      </el-table-column>
      <el-table-column
        prop="fbstatus"
        label="状态"
        width="250">
      </el-table-column>
      <el-table-column
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <br>
    <br>
     <el-button type="primary" style="margin:20px;" @click="gotoAddFb">新增反馈信息</el-button>
  </div>

</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      gotoAddFb(){
            this.$router.push({name:'addfeedback'});
        }
    },

    data() {
      return {
        tableData: [{
          fbdate: '2016-05-03',
          fbtitle: '页面太丑',
          fbstatus: '已读',
        }, {
          fbdate: '2016-05-03',
          fbtitle: '页面太丑',
          fbstatus: '已读',
        }, {
          fbdate: '2016-05-03',
          fbtitle: '页面太丑',
          fbstatus: '已读',
        }, {
          fbdate: '2016-05-03',
          fbtitle: '页面太丑',
          fbstatus: '已读',
        }]
      }
    }
  }
</script>