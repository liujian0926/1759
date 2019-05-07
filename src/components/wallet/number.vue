<template>
   <div class="my-container">
       <div class="box">
           <div>平台持有USDT</div>
           <div>18,035,20</div>
       </div>
       <div class="box">
           <div>平台持有USDT</div>
           <div>18,035,20</div>
       </div>
       <div class="box">
           <div>平台持有USDT</div>
           <div>18,035,20</div>
       </div>
       <div class="box">
           <div>平台持有USDT</div>
           <div>18,035,20</div>
       </div>
        <div class="box">
           <div>平台持有USDT</div>
           <div>18,035,20</div>
       </div>
        <div class="box">
           <div>平台持有USDT</div>
           <div>18,035,20</div>
       </div>
        <div class="box">
           <div>平台持有USDT</div>
           <div>18,035,20</div>
       </div>
        <div class="box">
           <div>平台持有USDT</div>
           <div>18,035,20</div>
       </div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .my-container{
        height: 100%;
        padding-top: 24px;
        background-color: #F0F2F5;
        .box {
            width: 276px;
            height: 128px;
            float: left;
            background-color: #fff;
            padding: 27px 0 0 40px;
            box-sizing: border-box;
            margin-right: 26px;
            margin-bottom: 26px;
            // &:nth-child(4n){
            //     margin-right: 0;
            // }
           div {
               &:nth-child(1){
                   height: 20px;
                   font-size: 14px;
                   line-height: 20px;
                   color: #666666;
                   font-weight: bold;
               }
               &:nth-child(2){
                   margin-top: 1px;
                   height: 40px;
                   line-height: 39px;
                   font-size: 32px;
                   color: #333333;
               }
           }
        }
    }
</style>