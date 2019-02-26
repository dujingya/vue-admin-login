<template>
    <div id="sidebar-wrap" :class="{ collapsed: toggSiderBar }">
        <h3 class="logo">
          <span class="rythm twist1">{{toggSiderBar ? 'VUE': 'AUTO VUE'}}</span>
        </h3>
        <el-menu background-color="#3f4d67" text-color="#fff" :default-active="$route.path" :unique-opened="true" :router="true" mode="vertical" :collapse="toggSiderBar">
            <template v-for="item in menu">
                <el-submenu v-if="item.children.length !== 0" :index="item.router" :key="item.router">
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
        <div class="animated bounceInDown imgWrap">
            <img src="../../static/img/little.gif" height="60px" class="gif rythm pulse3">
        </div>
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
          name_en: "Cube",
          router: "/cube",
          icon: "el-icon-menu",
          children: []
        },
        {
          name: "商品目录",
          name_en: "Projects",
          router: "/",
          icon: "el-icon-menu",
          children: [
            {
              name: "销售可见",
              name_en: "Notes",
              router: "/notes",
              icon: "el-icon-date"
            },
            {
              name: "添加",
              name_en: "About",
              router: "/about",
              icon: "el-icon-document"
            },
            {
              name: "编辑",
              name_en: "Authority",
              router: "/authority",
              icon: "el-icon-setting"
            }
          ]
        },
        {
          name: "批量处理",
          name_en: "Weather",
          router: "/weather",
          icon: "el-icon-picture-outline",
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
<style scoped lang="scss">
#sidebar-wrap {
  width: 160px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  transition: all .5s;
  background: #3f4d67;
  &.collapsed {
    width: 64px;
    transition: all 0.5s;
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
  min-width: 160px;
  padding-left: 53px !important;
}

// 改变元素属性，要不动画效果不管用，是不是很厉害啊？哈哈哈
.rythm.twist1 {
  display: block;
}

</style>
