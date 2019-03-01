import Vue from "vue";
import Router from "vue-router";

// 登录
const Signin = resolve => require(["@/views/Signin"], resolve);
// 首页
const Dashboard = resolve => require(["@/views/Dashboard"], resolve);
// 非登录页的包裹组件
const Layout = resolve => require(["@/views/Layout"], resolve);
// 项目信息
const SaleList = resolve => require(["@/views/SaleList"], resolve);
// 关于作者
const Add = resolve => require(["@/views/Add"], resolve);
// 词条指标
const Dictionary = resolve => require(["@/views/Dictionary"], resolve);
// 天气预报
const Batch = resolve => require(["@/views/Batch"], resolve);
// 权限测试
const Compile = resolve => require(["@/views/Compile"], resolve);
// 404
const Notfound = resolve => require(["@/views/Notfound"], resolve);

Vue.use(Router);
const router = new Router({
    routes: [
        // 首先是登录页的路由
        {
            path: "/signin",
            name: "Signin",
            meta: {
                requireAuth: false,
                title: "足疗开发平台"
            },
            component: Signin
        },
        {
          path: "/dashboard",
          name: "Dashboard",
          meta: {
            requireAuth: false,
            title: "足疗开发平台"
          },
          component: Dashboard
        },
        // 然后就是嵌套路由了，也就是登陆后的各个页面
        {
            path: "/",
            meta: {
                requireAuth: true
            },
            component: Layout,
            // redirect: '/cube', // 重定向到第一个子路由，否则只渲染Layout组件，这块儿使用时解除注释
            // redirect: "/signin", // 这里重定向到登录页面，是为了展示使用，实际用这个项目开发时，需要注释这行，解除上一行的注释
            children: [
                {
                  path: "SaleList",
                  meta: {
                    requireAuth: true,
                    title: "商品名称"
                  },
                  component: SaleList
                },
                {
                  path: "add",
                  hidden: true,
                  meta: {
                    requireAuth: true,
                    title: "按摩"
                  },
                  component: Add
                },
                {
                  path: "dictionary",
                  meta: {
                    requireAuth: true,
                    title: "指标"
                  },
                  component: Dictionary
                },
                {
                  path: "batch",
                  meta: {
                    requireAuth: true,
                    title: "商品价格"
                  },
                  component: Batch
                },
                {
                  path: "compile",
                  hidden: true,
                  meta: {
                        requireAuth: true,
                        title: "编辑"
                    },
                    component: Compile
                }
          ]
        },
        // 最后是404页面
        {
            path: "*",
            meta: {
                requireAuth: false,
                title: "404"
            },
            component: Notfound
        }
      ]
});

// 当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于等待中。
router.beforeEach((to, from, next) => {
  // 自动化修改页面标签的 title
    document.title = to.meta.title;
  // 如果已经登录，并且要去登录页，就不让TA去登录页，重定向到首页
  //   console.log(to.path, 3333)
  //   if (to.path === "/signin" && localStorage.token) {
  //       next("/Dashboard");
  //   } else
    if (to.path === "/") {
        next("/signin");
    } else {
        next()
    }
});

export default router;
