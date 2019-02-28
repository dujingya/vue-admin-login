<template>
  <div class="app-container">
    <el-row class="sel-row">
      <el-col :span="2" class="sel-label">选择城市：</el-col>
      <el-col :span="3">
        <el-select v-model="sel" filterable placeholder="请选择城市" @change="getData">
          <el-option v-for="(item,index) in options" :label="item.label" :value="item.value" :key="index">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="gredient"></div>
  </div>
</template>
<script>
// 引入城市列表
import arr from "../../assets/json/citylist.json";
// 引入自己写的折线图组件
import lineChart from "comp/charts/Line";
// 引入支持jsonp的库 https://github.com/webmodules/jsonp
// axios不支持jsonp https://github.com/axios/axios/blob/master/COOKBOOK.md#jsonp
import jsonp from "jsonp";

export default {
  name: "batch",
  components: {
    "line-chart": lineChart
  },
  data() {
    return {
      loading: true,
      cityData: {},
      options: arr,
      sel: "101010100",
      lineData: {
        xAxis: [],
        series1: [],
        series2: []
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true
      jsonp(
        "http://wthrcdn.etouch.cn/weather_mini?citykey=" + this.sel,
        (err, res) => {
          this.loading = false
          if (err) {
            console.error(err.message);
          } else {
            let data = res.data;
            this.cityData = data;
            this.renderChart(data.forecast);
          }
        }
      );
    },
    renderChart(data) {
      this.lineData.xAxis = [];
      this.lineData.series1 = [];
      this.lineData.series2 = [];
      data.forEach((v, i) => {
        this.lineData.xAxis.push(v.date);
        this.lineData.series1.push(v.high.match(/-|\d+/g).join(""));
        this.lineData.series2.push(v.low.match(/-|\d+/g).join(""));
      });
    }
  }
};
</script>
<style scoped lang="scss" scoped>
.app-container {
  background: #fff;
  padding: 20px 20px 40px;
  color: #909399 !important;
  .sel-row {
    margin-bottom: 20px;
    .sel-label {
      line-height: 36px;
    }
  }

  .chart-wrap {
    margin-top: 20px;
  }

  .el-card__header {
    padding: 10px 20px !important;
  }

  .ct {
    float: right;
    line-height: 21px;
    &:hover {
      color: #20a0ff;
      cursor: pointer;
    }
  }
  .gredient{
    width: 100px;
    height: 600px;
  }
}
</style>
