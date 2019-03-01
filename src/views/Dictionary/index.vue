<template>
    <div class="app-container">
      <div class="searchBox">
        <el-input placeholder="名字/电话/编号/标注结果" class="searchInputss" v-model="query">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="primary" class="searchBtn" @click="search">搜索</el-button>
      </div>
    </div>
</template>
<script>
export default {
    name: 'Dictionary',
    data(){
      return {
        gender: '',
        query: ''
      }
    },
    methods: {
      search() {  // 搜索按钮
        this.result = false
      },
      cancer() {
        this.result = true
      }
    }
};
</script>
<style  lang="scss">
  .app-container{
    background: #fff;
    padding: 20px 20px 40px;
    .searchBox {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -o-box-siziing: border-box;
      padding: 20px 0;
      margin-bottom: 20px;
      .searchInputss{
        width: 360px;
        margin-left: 10px;
      }
      .searchInput {
        height: 40px;
        line-height: 40px;
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
    .list{
      .classify{
        padding: 0 50px;
        .first-item{
          display: block;
          margin: 10px;
          overflow: hidden;
          .left{
            float: left;
            width: 10%;
            padding: 5px 0 5px 10px;
            font-size: 14px;
            text-align: right;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -o-box-sizing: border-box;
          }
          .right{
            float: right;
            width: 90%;
            overflow: hidden;
            li{
              float: left;
              padding: 5px 10px;
              font-size: 14px;
              cursor: pointer;
            }
            li:hover{
              background: blue;
              color: #fff;
            }
          }
        }
      }
    }
    .result{
      padding: 5px 50px;
      background: #f9f9f9;
      .resultNum{
        margin: 10px 0;
        span{
          float: right;
          background: #4cd9cb;
          padding: 2px 10px;
          font-size: 12px;
          color: #fff;
          cursor: pointer;
        }
      }
      ul{
        li{
          position: relative;
          overflow: hidden;
          border-bottom: 2px dashed #DADADA;
          .title{
            margin: 10px 0;
            font-size: 16px;
            color: #fd4346;
          }
          .content{
            height: 40px;
            line-height: 20px;
            overflow: hidden;
            margin: 10px 0 16px;
            color: #353d47;
            font-size: 14px;
          }
          .detail{
            position: absolute;
            bottom: 2px;
            right: 5px;
            height: 15px;
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
