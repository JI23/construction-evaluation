<template>
    <div>
        <el-table :data="tableData" border style="width:100%" max-height="300">
        <el-table-column prop="order1" label="易损性编号" width="180">
            <template slot-scope="scope">
                <el-input v-model="scope.row.id" placeholder="点击可选" @focus="dialogVisible = true"></el-input>
            </template>
        </el-table-column>
        <el-table-column prop="order2" label="起始楼层">
            <template slot-scope="scope">
                <el-input v-model="scope.row.start_floor" placeholder="请输入内容"></el-input>
            </template>
        </el-table-column>
        <el-table-column prop="order2" label="终止楼层">
            <template slot-scope="scope">
                <el-input v-model="scope.row.stop_floor" placeholder="请输入内容"></el-input>
            </template>
        </el-table-column>
        <el-table-column prop="order2" label="x方向易损性数量">
            <template slot-scope="scope">
                <el-input v-model="scope.row.X" placeholder="请输入内容"></el-input>
            </template>
        </el-table-column>
        <el-table-column prop="order2" label="y方向易损性数量">
            <template slot-scope="scope">
                <el-input v-model="scope.row.Y" placeholder="请输入内容"></el-input>
            </template>
        </el-table-column>
            <el-table-column prop="order2" label="无方向易损性数量">
            <template slot-scope="scope">
                <el-input v-model="scope.row.Non" placeholder="请输入内容"></el-input>
            </template>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
                移除
                </el-button>
            </template>
            </el-table-column>
        </el-table> 
        <el-button @click="newComponent">新增结构构件</el-button>
        
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
    
</template>


<script>
    export default {
      data() {
          return{
            dialogVisible:false,
            tableData: [{
                id: '',
                start_floor: '',
                stop_floor:'',
                X:null,
                Y:null,
                Non:null
            }]
        };
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
            newComponent(){
            this.tableData.push({
                id:'',
                start_floor: '',
                stop_floor:'',
                X:null,
                Y:null,
                Non:null
            })
        },
    },
           
}
    
  </script>


<style scoped>
.cell-edit-input .el-input, .el-input__inner {
  width:100px;
}
.cell-icon{
  cursor:pointer;
  color:#fff;
}
.el-table{
    margin:20px 0;
}
</style>
