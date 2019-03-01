<template>
    <div class="app-container">
      <h3>添加</h3>
    </div>
</template>
<script>
export default {
  name: 'add',
  components: {
  },
  data() {
    return {
      name: ''
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style  lang="scss" scoped>
  .app-container{
    text-align:center;
    padding:10px 100px 40px !important;
    color: #909399 !important;
    h3{
      padding: 30px;
    }
    .app-form{
      width: 60%;
    }
  }
</style>
