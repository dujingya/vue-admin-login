<template>
  <div class="app-container">
    name
  </div>
</template>
<script>
export default {
  name: "batch",
  data() {
    return {
      loading: true
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style  lang="scss" scoped>
.app-container {
  position: relative;
  background: #fff;
  padding: 20px 20px 40px;
  color: #909399 !important;
  overflow: hidden;
  .sel-label{
    height: 40px;
    line-height: 40px;
    text-align: right;
  }
  .left{
    float: left;
    width: 50%;
    text-align: center;
  }
  .right{
    float: right;
    width: 50%;
    text-align: center;
  }
}
</style>
