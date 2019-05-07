<template>
   <div class="container">
    <el-form :inline="true" class="demo-form-inline form">
      <!--时间日期-->
      <el-form-item label="日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="请选择日期" v-model="form.date1" style="height:40px;width:100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="请选择日期" v-model="form.date2" style="height: 40px;width:100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <!--类型选择 -->
      <el-form-item>
        <el-select v-model="value" placeholder="终端类型" style="height: 40px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-select v-model="value" placeholder="收支类型" style="height: 40px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit"
        >查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm" >重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格-->
    <el-table :data="tableData" border style="width: 100% ;height:545px;">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="zd" label="终端类型" width="180"></el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="usdt" label="USDT"></el-table-column>
      <el-table-column prop="num" label="交易单号"></el-table-column>
    </el-table>
    <!--分页 -->
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        }
      ],
      form: {
        data1: "",
        data2: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less">
.container {
  height: 100%;
  background-color: #fff;
  color: #333;
  .form {
    height: 75px;
    display: flex;
    align-items: center;
    .el-form-item__content{
      height:100%;
    }
    .el-form-item {
      margin-bottom: 0;
      margin-right: 24px;
      height: 36px;
      &:nth-child(2){
        width: 160px;
      }
      &:nth-child(3){
        width: 192px;
      }
      &:nth-child(n+4){
        width: 80px;
      }
      .el-col {
        width: 132px;
        &:nth-child(2){
          width: 26px;
          text-align: center;
        }
      }
    }
  }
  .page {
    height: 81px;
    .el-pagination {
      padding: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
</style>
