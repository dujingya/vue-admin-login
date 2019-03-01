<template>
  <div class="app-container">
    <div class="searchBox">
      <span style="height: 40px;margin-left: 20px; line-height: 40px; font-size: 20px; color: #909399;">类别:</span>
      <el-select v-model="gender" class="selectGender" clearable placeholder="类别">
        <el-option
          v-for="item in genderOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="名字/电话/编号/标注结果" class="searchInputss" v-model="query">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button type="primary" class="searchBtn" @click="search">搜索</el-button>
      <el-button type="primary" class="searchBtn" @click="addClick">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" @click="editClick" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'saleList',
    components: {
    },
    data(){
      return {
        gender: '',
        query: '',
        currentPage: 1,
        pageSizeNum: 10,
        genderOptions: [{
          value: '0',
          label: '中医'
        }, {
          value: '1',
          label: '西医'
        }],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      search() {  // 搜索按钮
        this.currentPage = 1
        this.pageSizeNum = 10
      },
      handleClick(row) {
        console.log(row);
      },
      editClick(row) {
        console.log(row)
        this.$router.push('compile')
      },
      addClick(row) {
        console.log(row)
        this.$router.push('add')
      }
    }
  };
</script>
<style  lang="scss">
  .app-container{
    background: #fff;
    padding: 20px 20px 40px;
    color: #909399 !important;
    .searchBox {
      width: 100%;
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -o-box-siziing: border-box;
      padding: 20px 0;
      margin-bottom: 20px;
      .searchInputss{
        width: 240px;
        margin-left: 10px;
      }
      .searchInput {
        height: 40px;
        line-height: 40px;
      }
      .selectGender,.selectLabel,.selectDate{
        width: 90px;
        margin-left: 10px;
      }
      .selectLabel{
        width: 110px;
      }
      .selectDate{
        width: 250px;
      }
      .el-date-editor .el-range-separator{
        width: 10%;
      }
      .searchBtn {
        width: 80px;
        height: 40px;
        background-color: #4cd9cb;
        box-shadow: 0 4px 7px 0 rgba(76, 255, 237, 0.16), 0 5px 10px 0 rgba(0, 77, 69, 0.09);
        border-radius: 2px;
        border: none;
        outline: none;
        margin-left: 20px;
      }
    }
  }
</style>
