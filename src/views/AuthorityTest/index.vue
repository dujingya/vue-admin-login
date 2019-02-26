<template>
    <div style="text-align:center;padding:250px">
        <el-button class="animated rollIn" type="primary" size="large" @click="setAdmin"><i class="fa fa-user"></i>&nbsp;&nbsp;我是管理员</el-button>
        <el-button class="animated rollIn rythm rythm-high" size="large" @click="setUser"><i class="fa fa-user-o"></i>&nbsp;&nbsp;我是吃瓜群众</el-button>
    </div>
</template>
<script>
export default {
  name: "tpl",
  methods: {
    setAdmin() {
      this.$router.go(0);
    },
    setUser() {
      this.$router.go(0);
    }
  }
};
</script>
