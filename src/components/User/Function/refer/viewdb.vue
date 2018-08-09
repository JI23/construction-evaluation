<template>
  <div>
    <el-select v-model="value4" clearable placeholder="选择易损性数据库"><!--value4为选中内容 -->
      <el-option
        v-for="item in options"
        :key="item.value"
        :value="item.label">
      </el-option>
    </el-select>
    <el-button style="float: right" type="info" round @click="newdb">新建易损性数据库</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: 'DB_Common'
        }, {
          value: '选项2',
          label: 'DB_School'
        }, {
          value: '选项3',
          label: 'DB_Hospital'
        }, {
          value: '选项4',
          label: 'DB_User'
        }, {
          value: '选项5',
          label: 'DB_Office'
        }, {
          value: '选项6',
          label: 'DB_FEMA'
        }],
        value4: ''
      }
    },

    methods: {
      newdb(){
        this.$router.push({name:'newdb'});
      },
    }
  }
</script>