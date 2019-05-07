<template>
  
    <div class="container">
      <div class="title">
        <div class="left">
          <img src="../assets/images/man.png" alt="">
          Hank（002）
          </div>
        <div class="right">
          退出登录
          <img src="../assets/images/out.png" alt="">
          </div>
      </div>
      <div class="content">
       
      <router-link :to="{path:'/wallet'}" class="text">
        <img src="../assets/images/wallet.png" alt="">
         <span>平台钱包管理</span>
      </router-link>
      
      </div>
    </div>
    
  
</template>

<script>
export default {};
</script>

<style lang="less">
  .container {
    // width: 1440px;
    // margin: 0 auto;
    display: flex;
    flex-direction: column;
    .title {
      width: 100%;
      height: 64px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding:0 40px;
      .left{
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
      .right{
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
      flex: 1;
      background-color: #F0F2F5;
      padding: 35px 70px;
      display: flex;
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 250px;
        height: 148px;
        background-color:#304156;
        margin-right: 100px;
        text-decoration: none;
        &:last-child{
          margin-right: 0;
        }
        img{
          width: 36px;;
          height: 36px;
          margin-bottom: 27px;
        }
      }
    }
  }
  
</style>