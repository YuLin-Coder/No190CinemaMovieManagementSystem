<template>
  <div class="header">
    <div class="a">
      <div class="header-avatar">
        <el-dropdown>
          <el-button type="text">
            <div class="header-name">{{ worker.nickname }}</div>
            <img style="margin-top: 5px;width: 29px;height: 29px;border-radius: 50%"
                 :src="worker.avatar" alt="null"/>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-link :underline="false" href="/setting">
                <i style="font-size: 15px; padding-right: 3px" class="el-icon-setting"></i>个人设置
              </el-link>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-button type="text" @click="handleLogout">
                <i style="font-size: 15px; padding-right: 3px" class="el-icon-switch-button"></i>退出登录
              </el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="header-icon" style="padding-top: 16px">
        <el-dropdown>
          <el-badge value="new" class="item">
            <i style="font-size: 18px" class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>这里还没有消息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header-icon">
        <el-tooltip content="小小影院 - 客服系统" placement="top">
          <i style="font-size: 20px" class="el-icon-warning-outline"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import {FindWorkerById} from "@/api/worker";

export default {
  name: "Header",

  data() {
    return {
      worker: {
        nickname: '',
        password: '',
        phone: '',
        gender: '',
        avatar: '',
        department: '',
      }
    }
  },

  mounted() {
    FindWorkerById(localStorage.getItem("wid")).then(res => {
      this.worker = res.data;
    })
  },

  methods: {
    handleLogout() {
      localStorage.removeItem("wid")
      localStorage.removeItem("token")
      this.$router.push('/login')
    }
  }


}
</script>

<style scoped>

.header {

}

.header-icon {
  float: right;
  font-size: 20px;
  padding-top: 19px;
  padding-right: 30px;
}

.header-avatar {
  float: right;
  padding-left: 20px;
}

.header-name {
  float: right;
  padding-top: 12px;
  font-size: 15px;
  padding-right: 10px;
  padding-left: 9px;
}

.el-button {
  padding-top: 8px;
  color: #000000;
  letter-spacing: 2px;
}
</style>
