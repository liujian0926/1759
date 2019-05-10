 
<template>
  <div class="container">
    <img src="../assets/images/logo.png" alt>
    <div class="title">盾付宝运营后台</div>
    <el-form
      class="form"
      label-width="80px"
      label-position="right"
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入您的账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="submit('loginForm')">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      // 表单数据
      loginForm: {
        username: "",
        password: ""
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, message: "长度在4-20个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用密码", trigger: "blur" },
          { min: 6, message: "长度在6-20个字符", trigger: "blur" }
        ]
      }
    };
  },
  // 方法
  methods: {
    // 登陆验证
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 跳转到首页
          this.$router.push("/");
        } else {
          // 失败
          this.$message.error("数据格式错误");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #304156;
  .title {
    height: 53px;
    letter-spacing: 1px;
    padding: 26px 0;
    font-size: 38px;
    color: #ffffff;
    font-weight: bold;
    line-height: 53px;
  }

  .form {
    width: 400px;
    height: 336px;
    background-color: white;
    border-radius: 2px;
    // 怪异盒模型
    box-sizing: border-box;
    padding: 83px 32px 57px 32px;
    .el-form-item {
      margin-bottom: 28px;
    }

    .login-btn {
      width: 100%;
      background-color: #304156;
      font-size: 16px;
      font-weight: bold;
      margin-left: 0;
      margin-top: 28px;
    }
  }
}
</style>

