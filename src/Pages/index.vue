<template>
  <div class="container">
    <div class="title">
      <div class="left">
        <img src="../assets/images/man.png" alt>
        Hank（002）
      </div>
      <div class="right">
        退出登录
        <img src="../assets/images/out.png" alt>
      </div>
    </div>

    <div class="content">
      <router-link :to="{path:'/data'}" class="text">
        <div class="box" id="active">
          <img src="../assets/images/wallet.png" alt>
          <span>平台钱包管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/run_home'}" class="text">
        <div class="box">
          <img src="../assets/images/run.png" alt>
          <span>运营数据分析</span>
        </div>
      </router-link>
      <router-link :to="{path:'/home'}" class="text">
        <div class="box">
          <img src="../assets/images/terminal.png" alt>
          <span>终端管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/home'}" class="text">
        <div class="box">
          <img src="../assets/images/user.png" alt>
          <span>用户管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/home'}" class="text">
        <div class="box">
          <img src="../assets/images/deal.png" alt>
          <span>即时交易数据</span>
        </div>
      </router-link>
      <router-link :to="{path:'/home'}" class="text">
        <div class="box">
          <img src="../assets/images/info.png" alt>
          <span>信息审核管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/home'}" class="text">
        <div class="box">
          <img src="../assets/images/appeal.png" alt>
          <span>申诉管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/home'}" class="text">
        <div class="box">
          <img src="../assets/images/deal_data.png" alt>
          <span>交易数据查询</span>
        </div>
      </router-link>
      <router-link :to="{path:'/home'}" class="text">
        <div class="box">
          <img src="../assets/images/system.png" alt>
          <span>系统管理</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 0;
  .title {
    width: 100%;
    height: 64px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 40px;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      line-height: 64px;
      color: #333333;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;
      img {
        margin-right: 10px;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #666666;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 64px;
      img {
        margin-left: 6px;
      }
    }
  }

  .content {
    height: 100%;
    padding: 36px 0 0 70px;
    box-sizing: border-box;
    background-color: #f0f2f5;
    #active{
      background-color: #304156;
      color: #fff;
    }
    .box {
      width: 250px;
      height: 148px;
      float: left;
      padding: 0;
      background-color: #fff;
      box-sizing: border-box;
      margin-right: 100px;
      margin-bottom: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #333333;
      img {
        margin-bottom: 27px;
      }
    }
    .box:hover {
      background-color: #304156;
      color: #fff;
    }
  }
}
</style>