<template>
  <div class="app-container">
    <div class="base-box">
      <img src="../../../static/img/line_left.png">
      <div>
        <p class="title">足疗研发平台</p>
        <p class="mark">San Liao research and development platform</p>
      </div>
      <img src="../../../static/img/line_right.png">
    </div>
    <div class="box-item">
      <div class="item" @click="toMenu"></div>
      <div class="item" @click="toDisease"></div>
      <div class="item"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "classify",
    data() {
      return {
        name: ''
      }
    },
    methods: {
      toMenu() {
        this.$router.push('Dictionary')
      },
      toDisease() {
        this.$router.push('SaleList')
      }
    }
  };
</script>
<style lang="scss" scoped>
  .app-container{
    background: #fff;
    padding: 0;
    height: 100%;
    width: 100%;
    color: #909399 !important;
    .base-box{
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      height: 270px;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      background: linear-gradient(90deg,#bca7ff,#709ffa);
      color: #fff;
      div{
        padding: 0 25px;
      }
      .title{
        font-size: 40px;
        height: 45px;
        line-height: 45px;
        margin: 0;
        padding-bottom: 15px;
        font-family: Georgia,serif;
      }
      .mark{
        height: 12px;
        line-height: 12px;
        font-size: 11.5px;
      }
    }
    .box-item{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .item{
        width: 240px;
        height: 280px;
        margin: 40px;
        background: #fd4346;
      }
    }
  }
</style>
