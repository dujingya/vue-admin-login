<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
    <div id="topbar-wrap" :class="{ topCollapsed: isCollapse }">
        <el-row type="flex" justify="space-between">
            <el-col :span="5">
                <i :class="[isCollapse ? 'icon-spread': 'icon-recovery','iconfont']" @click="toggleSiderBar"></i>
                <a style="font-size: 24px;margin-left: 10px;">装逼研发平台</a>
            </el-col>
            <el-col :span="12">
                <el-row type="flex" class="row-right" justify="end" style="margin-right:-15px">
                    <el-col :span="5" style="text-align: right">
                        <a class="animated fadeIn">{{userName}}</a>
                    </el-col>
                    <el-col class="animated bounceInDown imgWrap">
                      <img src="../../static/img/little.gif" height="40px" class="gif rythm pulse3">
                    </el-col>
                    <el-col style="width: 36px;">
                        <i :class="[isFullscreen? 'fa-compress': 'fa-arrows-alt','fa ']" title="切换全屏" @click="toggleFullscreen"></i>
                    </el-col>
                    <el-col style="width: 36px;">
                        <i class="fa fa-sign-out logout" title="退出" @click.prevent="logout"></i>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import screenfull from 'screenfull'
import '../../static/css/iconfont.css'
export default {
  name: 'topbar',
  data() {
    return {
      userName: localStorage.userName || '',
      isFullscreen: false
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse
    }
  },
  methods: {
    toggleSiderBar() {
      this.$store.commit('toggleSiderBar')
    },
    toggleLanguage() {
      let info = '切换成功'
      this.$message.success(info)
    },
    toggleFullscreen() {
      if (!screenfull.enabled) {
        this.$message.warning('您的浏览器不支持全屏')
        return false
      }
      screenfull.toggle()
      // isFullscreen 居然是反的
      this.isFullscreen = !screenfull.isFullscreen
    },
    logout() {
      localStorage.clear()
      this.$router.push('signin')
    }
  },
  watch: {
    $route(to, from) {
      this.pathName = this.$route.path.substring(1)
      this.nowPath = this.$route.path
    }
  }
}
</script>
<style scoped lang="scss">
#topbar-wrap {
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  background: #fff;
  color: #353d47;
  padding: 0 15px;
  z-index: 4;
  box-sizing: border-box;
  a {
    line-height: 60px;
  }
  i {
    font-size: 20px;
    line-height: 60px;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
    }
  }
  .fa-language:hover {
    transform: rotateY(180deg)
  }
  .imgWrap{
    width: 40px;
    height: 40px;
    margin: 10px 10px 10px 10px;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -o-border-radius: 20px;
    overflow: hidden;
    img{
      width: 40px;
      height: 40px;
    }
  }
  .logout {
    text-decoration: none;
    &:hover {
      color: #1dc4e9;
    }
  }
}
.row-right > div {
  text-align: center;
}
</style>
