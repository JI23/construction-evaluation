<template> 
  <div>
    <el-table
      :data="tableData"
      border
     >
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="pjnum"
        label="项目编号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="pjhead"
        label="项目负责人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="等级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="项目说明"
        width="270">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="130">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">拷贝</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>

</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          pjnum: '上海',
          pjhead: '普陀区',
          grade: '上海市',
          explain: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          pjnum: '上海',
          pjhead: '普陀区',
          grade: '上海市',
          explain: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          pjnum: '上海',
          pjhead: '普陀区',
          grade: '上海市',
          explain: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          pjnum: '上海',
          pjhead: '普陀区',
          grade: '上海市',
          explain: 200333
        }]
      }
    }
  }
</script>