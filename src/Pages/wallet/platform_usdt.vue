<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px" style="color: #666;">
      <el-form-item label="提现金额">
        <el-input v-model="form.name" style="width:230px;" placeholder="请输入提现的金额"></el-input>
      </el-form-item>
      <el-form-item label="接受地址">
        <el-input v-model="form.name" style="width:230px;" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="旷工费">
        <el-input v-model="form.name" style="width:230px;" placeholder="请输入"></el-input>
        <div id="rmb">约等于人民币：0</div>
      </el-form-item>
      <!-- <div>约等于人民币：0</div> -->
      <el-form-item>
        <el-button type="primary" @click="open3">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    open3() {
      this.$prompt("密码验证", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputPattern: /^[a-zA-Z0-9]{4,10}$/,
        inputErrorMessage: "密码格式不正确",
        inputPlaceholder:'请输入您的资金密码'
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的密码是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  padding: 53px 0 0 36px;
  box-sizing: border-box;

  .el-button--primary {
    width: 80px !important;
    height: 32px;
    padding: 0;
  }
  .el-button--default {
    width: 80px !important;
    height: 32px;
    padding: 0;
  }
  .el-form-item {
    &:nth-child(4) {
      margin-top: 89px;
    }
  }
}
</style>
