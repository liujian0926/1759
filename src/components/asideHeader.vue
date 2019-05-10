<template>
    <el-container class="my-container">
      <el-aside width="210px">
        <div class="title">钱包管理</div>
        <el-menu class="el-menu" router default-active="data">
          <el-menu-item index="home">
            <!-- <i class="el-icon-document"></i> -->
            <img src="../assets/images/blue.png" alt="">
            <span slot="title">平台钱包数据</span>
          </el-menu-item>
          <el-menu-item index="income">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">平台USDT收入支出</span>
          </el-menu-item>
          <el-menu-item index="platform_cash">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">平台USDT提现记录</span>
          </el-menu-item>
          <el-menu-item index="platform_earnings">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">平台积分收益记录</span>
          </el-menu-item>
          <el-menu-item index="project_usdt">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">项目方USDT充提记录</span>
          </el-menu-item>
          <el-menu-item index="project_exchange">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">项目方积分兑换记录</span>
          </el-menu-item>
          <el-menu-item index="project_recharge">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">项目方积分充提记录</span>
          </el-menu-item>
          <el-menu-item index="B_usdt">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">B端USDT充提记录</span>
          </el-menu-item>
          <el-menu-item index="B_exchange">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">B端积分兑换记录</span>
          </el-menu-item>
          <el-menu-item index="B_deal">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">B端积分买卖记录</span>
          </el-menu-item>
          <el-menu-item index="platform_usdt">
            <img src="../assets/images/white.png" alt="">
            <span slot="title">平台USDT提现</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="height:64px;">
          <div class="left">
            <img src="../assets/images/contr.png" alt>
            控制台
          </div>
          <div class="right">
            <img class="man" src="../assets/images/man.png" alt>
            Hank（002）
            <img class="out" src="../assets/images/out.png" alt>
          </div>
        </el-header>
        <div class="nav">
          <my-bread/>
        </div>
        <el-main id="main">
         <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
    
  }
};
</script>
<style lang="less" scope>

</style>
