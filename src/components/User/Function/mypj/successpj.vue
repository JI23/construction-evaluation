<template> 
    <div>
        <el-table
            :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                border
                style="width: 100%">
                <el-table-column
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
                    <el-button @click="overlook" type="text" size="small">查看</el-button><!--未写 -->
                    <el-button @click="jumpstep1" type="text" size="small">拷贝</el-button>
                    <el-button @click="deletepj" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 20, 50, 100]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="data.length"
            style="text-align: center">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods:{
            handleSizeChange: function (size) {
              this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
              this.currentPage = currentPage;
            },
            jumpstep1: function(){
              this.$router.push({name:'step1'});
            },
            overlook: function(){
              this.$router.push({name:'view'});
            },
            deletepj: function(){
          }
    },

        data () {
            return {
                data: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    pjnum: '上海',
                    pjhead: '普陀区',
                    grade: '上海市',
                    explain: 200333
                }],
                currentPage:1,
                pagesize:5,
  
            }
        },  
    }
</script>