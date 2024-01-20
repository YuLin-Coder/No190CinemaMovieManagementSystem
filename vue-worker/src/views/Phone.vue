<template>
  <div style="padding: 40px">
    <el-table
        ref="filterTable"
        :data="list"
        style="width: 100%">
      <el-table-column label="姓名" width="180">
        <template slot-scope="props">
          <img class="av" alt="null" :src="props.row.user.avatar"/>
          <div class="d1">{{ props.row.user.nickname }}</div>
        </template>
      </el-table-column>
      <el-table-column
          prop="user.email"
          label="邮箱">
      </el-table-column>
      <el-table-column
          prop="user.birthday"
          label="生日">
      </el-table-column>
      <el-table-column
          prop="user.gender"
          label="性别">
      </el-table-column>
      <el-table-column
          prop="tag"
          label="活跃程度"
          width="140">
        <template slot-scope="scope">
          <el-tag v-if="scope.$index===0" type="danger" effect="plain">Top 1
            <i v-for="item in 3" :key="item" class="el-icon-star-on"></i>
          </el-tag>
          <el-tag v-if="scope.$index===1" type="danger" effect="plain">Top 2
            <i v-for="item in 2" :key="item" class="el-icon-star-on"></i>
          </el-tag>
          <el-tag v-if="scope.$index===2" type="danger" effect="plain">Top 3
            <i v-for="item in 1" :key="item" class="el-icon-star-on"></i>
          </el-tag>
          <el-tag v-if="scope.$index>2" type="info" effect="plain">Top {{ scope.$index + 1 }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {ListActiveUser} from "@/api/leaving";

export default {

  data() {
    return {
      list: [],
      loading: false,
    }
  },

  mounted() {
    this.load()
  },

  methods: {

    load() {
      ListActiveUser().then(res => {
        if (res.success) {
          this.list = res.data
          console.log(res.data)
        }
      })
    },

  },

}
</script>

<style scoped>

.av {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 15px;
  float: left;
}

.d1 {
  padding-top: 6px;
}

</style>