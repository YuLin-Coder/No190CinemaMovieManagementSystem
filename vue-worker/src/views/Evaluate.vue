<template>
  <div style="padding: 40px">
    <el-table :data="evaluateList">
      <el-table-column property="createAt" label="日期" width="250"></el-table-column>
      <el-table-column property="content" label="评语"></el-table-column>
      <el-table-column property="type" width="150">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type==='非常满意'" type="success">非常满意</el-tag>
          <el-tag v-if="scope.row.type==='满意'" type="info">满意</el-tag>
          <el-tag v-if="scope.row.type==='不满意'" type="danger">不满意</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {ListWorkerEvaluate} from "@/api/leaving";

export default {
  name: "Evaluate",

  data() {
    return {
      evaluateList: []
    }
  },

  mounted() {
    ListWorkerEvaluate(localStorage.getItem("wid")).then(res => {
      this.evaluateList = res.data
    })
  },

}
</script>

<style scoped>

</style>