<template>
    <div id="sidebar" :class="{ collapsed: toggSiderBar }">
        <h3 class="logo">
          <span class="rythm twist1">{{toggSiderBar ? '三疗': '三疗研发平台'}}</span>
        </h3>
        <el-menu  text-color="#fff" :default-active="$route.path" :unique-opened="true" :router="true" mode="vertical" :collapse="toggSiderBar">
            <template v-for="item in menu">
                <el-submenu class="child-item" v-if="item.children.length !== 0" :index="item.router" :key="item.router">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.router" :key="child.router">
                         <i :class="child.icon"></i>
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>

                <el-menu-item v-else :index="item.router" :key="item.router">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
        <!--<div class="animated bounceInDown imgWrap">-->
            <!--<img src="../../static/img/little.gif" height="60px" class="gif rythm pulse3">-->
        <!--</div>-->
    </div>
</template>
<script>
import Rythm from "rythm.js";
const rythm = new Rythm();

export default {
  name: "sidebar",
  data() {
    return {
      isMusicOn: false,
      menu: [
        {
          name: "分类页",
          router: "/classify",
          icon: "el-icon-menu",
          children: []
        },
        {
          name: "健康词条-病症",
          router: "/",
          icon: "el-icon-menu",
          children: [
            {
              name: "健康词条-指标",
              router: "/dictionary",
              icon: "el-icon-menu"
            }
          ]
        },
        {
          name: "商品目录",
          router: "/saleList",
          icon: "el-icon-menu",
          children: [
            {
              name: "销售可见",
              router: "/saleList",
              icon: "el-icon-menu"
            },
            {
              name: "添加",
              router: "/add",
              icon: "el-icon-menu"
            },
            {
              name: "编辑",
              router: "/compile",
              icon: "el-icon-menu"
            }
          ]
        },
        {
          name: "批量处理",
          router: "/batch",
          icon: "el-icon-menu",
          children: []
        }
      ]
    };
  },
  computed: {
    toggSiderBar() {
      return this.$store.state.common.isCollapse;
    }
  },
  created() {
    this.initRythm();
  },
  methods: {
    initRythm() {
      rythm.addRythm("twist1", "twist", 0, 10);
      rythm.addRythm("pulse3", "pulse", 0, 10, {
        min: 0.75,
        max: 1.5
      });
    }
  }
};
</script>
<style  lang="scss">
#sidebar {
  width: 200px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  transition: all .5s;
  /*background: #3f4d67;*/
  background-image: -webkit-linear-gradient(top, #27294E, #B7445D);
  &.collapsed {
    width: 64px;
    transition: all 0.5s;
  }
  .el-menu{
    background: transparent;
  }
  .el-menu-item:hover{
    background: #382E4E;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #382E4E;
  }
  .child-item li:hover{
    background: #382E4E;
  }
  .child-item li{
    background: rgba(56,46,78,.5);
  }
  .el-menu-item.is-active{
    background: #382E4E;
    color: #fff;
  }

  .el-submenu__title:hover{
    background: #382E4E;
  }
  /* 图标动画 */
  .imgWrap {
    text-align: center;
    position: absolute;
    bottom: 30px;
    width: 100%;
    .gif {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .logo {
    color: #fff;
    text-align: center;
    padding: 18px 0;
    margin: 0;
    height: 60px;
    box-sizing: border-box;
  }
}

.el-menu {
  height: 100%;
}

// 美化左侧导航的留白
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 200px;
  padding-left: 40px !important;
}

// 改变元素属性，要不动画效果不管用，是不是很厉害啊？哈哈哈
.rythm.twist1 {
  display: block;
}

</style>
