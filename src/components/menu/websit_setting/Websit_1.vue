<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="domain_id"
      label="域名ID"
      width="150">
    </el-table-column>
    <el-table-column
      prop="domain_name"
      label="域名"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
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
          domain_id: '01',
          domain_name: '996ICU.com'
        }, {
          domain_id: '02',
          domain_name: '995WLB.com'
        }, {
          domain_id: '03',
          domain_name: '007ICU.com'
        }, {
          domain_id: '04',
          domain_name: '997ICU.com'
        }]
      }
    }
  }
</script>