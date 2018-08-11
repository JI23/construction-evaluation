<template>
    <div>
        <el-col :span="8" class="step2">
            <span class="lebal">建筑材料</span>
            <el-input size='small' v-model="material" placeholder="请输入内容"></el-input>
            <span class="lebal">结构类型</span>
            <el-input size='small' v-model="structure_type" placeholder="请输入内容"></el-input>
            <span class="lebal">图审时间</span>
            <el-input size='small' v-model="figure_time" placeholder="请输入内容"></el-input>
            <span class="lebal">结构层数</span>
            <el-input size='small' v-model="floors" placeholder="请输入内容"></el-input>
            <span class="lebal">结构高度(m)</span>
            <el-input size='small' v-model="height" placeholder="请输入内容"></el-input>
            <span class="lebal">建筑面积(m^2)</span>
            <el-input size='small' v-model="area" placeholder="请输入内容"></el-input>
            <span class="lebal">单位造价(元)</span>
            <el-input size='small' v-model="cost_per_squaremeter" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="1" style="color:transparent">''</el-col>
        <el-col :span="15">
            <el-table :data="Floor_info" border style="width:100%" max-height="">
                <el-table-column prop="floor_no" label="楼层">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.floor_no" placeholder="请输入内容"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="floor_height" label="楼层高度(m)">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.floor_height" placeholder="请输入内容"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="floor_area" label="楼层面积(m^2)">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.floor_area" placeholder="请输入内容"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="influence_coefficient" label="楼层影响系数">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.influence_coefficient" placeholder="请输入内容"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="population_density" label="楼层人口密度(人/m^2)">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.population_density" placeholder="请输入内容"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="120">
                    <template slot-scope="scope">
                        <el-button
                        @click.native.prevent="deleteRow(scope.$index, Floor_info)"
                        type="text"
                        size="small">
                        移除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table> 
            <el-button @click="newFloor">新增楼层</el-button>
        </el-col>
    </div>
</template>
<script>
export default {
    methods:{
        newFloor(){
            this.Floor_info.push({});
        }
    },
    data(){
        return{
            material:'',
            structure_type:'',
            floors:'',
            figure_time:'',
            height:'',
            area:'',
            cost_per_squaremeter:'',
            Floor_info: [{
                floor_no: '1',
                floor_height: '王小虎',
                floor_area:'',
                influence_coefficient:'',
                population_density:''
            }, {
                floor_no: '2',
                floor_height: '王小虎',
                floor_area:'',
                influence_coefficient:'',
                population_density:''
            }, {
                floor_no: '3',
                floor_height: '王小虎',
                floor_area:'',
                influence_coefficient:'',
                population_density:''
            }, {
                floor_no: '4',
                floor_height: '王小虎',
                floor_area:'',
                influence_coefficient:'',
                population_density:''
            }]
        }
    }
}
</script>

<style scoped>

    .lebal{
        display: inline-block;
        padding:10px 0 5px 0;
        color: #333;
        font-size:14px;
    }
    .step2input{
        display: block;
        size:'small';
        margin:0 0 0 0;
    }
    .step2 .el-input{
        width:300px;
        display: block;
    }
    
    

</style>
