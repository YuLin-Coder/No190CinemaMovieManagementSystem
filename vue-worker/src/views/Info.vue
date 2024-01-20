<template>
  <div class="main">

    <el-table
        v-loading="loading"
        :data="orders"
        style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="订单ID：">
              <span>{{ props.row.order.id }}</span>
            </el-form-item>
            <el-form-item label="用户ID：">
              <span>{{ props.row.user.id }}</span>
            </el-form-item>
            <el-form-item label="电影ID：">
              <span>{{ props.row.film.id }}</span>
            </el-form-item>
            <el-form-item label="场次ID：">
              <span>{{ props.row.arrangement.id }}</span>
            </el-form-item>
            <el-form-item label="电影名：">
              <span>《 {{ props.row.film.name }} 》</span>
            </el-form-item>
            <el-form-item label="座位号：">
              <span>{{ props.row.order.seats }}</span>
            </el-form-item>
            <el-form-item label="订单金额：">
              <span>{{ props.row.order.price }}</span>
            </el-form-item>
            <el-form-item label="下单时间：">
              <span>{{ props.row.order.createAt }}</span>
            </el-form-item>
            <el-form-item label="支付时间：">
              <span>{{ props.row.order.payAt }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          label="订单 ID"
          width="400"
          prop="order.id">
      </el-table-column>
      <el-table-column
          width="200"
          label="电影名"
          prop="film.name">
      </el-table-column>
      <el-table-column
          width="200"
          label="订购座位"
          prop="order.seats">
      </el-table-column>
      <el-table-column
          width="200"
          label="订单金额"
          prop="order.price">
      </el-table-column>
      <el-table-column label="订单状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.order.status === 2" type="success">支付成功</el-tag>
          <el-tag v-if="scope.row.order.status === 0" type="info">等待支付</el-tag>
          <el-tag v-if="scope.row.order.status === 3" type="warning">已被撤销</el-tag>
          <el-tag v-if="scope.row.order.status === 1" type="danger">支付失败</el-tag>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import {CreateOrderException, FindAllOrder, UpdateOrder} from "@/api/order";

export default {

  data() {
    return {
      loading: false,
      orders: [],
    }
  },

  mounted() {
    this.loadOrderList()
  },

  methods: {

    loadOrderList() {
      this.loading = true
      FindAllOrder().then(res => {
        if (res.success) {
          setTimeout(() => {
            this.orders = res.data
            this.loading = false
          }, 700)
        }
      })
    },

  }

}
</script>

<style scoped>
.main {
  padding: 30px;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
</style>