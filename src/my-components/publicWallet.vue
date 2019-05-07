<template>
    <el-container class="my-container">
      <el-aside width="210px">
        <div class="title">钱包管理</div>
        <el-menu class="el-menu" router default-active="number">
          <el-menu-item index="number">
            <i class="el-icon-document"></i>
            <span slot="title">平台钱包数据</span>
          </el-menu-item>
          <el-menu-item index="income">
            <i class="el-icon-document"></i>
            <span slot="title">平台USDT收入支出</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">平台USDT提现记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">平台积分收益记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">项目方USDT充提记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">项目方积分兑换记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">项目方积分充提记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">B端USDT充提记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">B端积分兑换记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">B端积分买卖记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
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

<style lang="less">
</style>
