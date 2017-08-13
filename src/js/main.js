// 一、导入第三方包
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
// 导入mintUI和mui
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "mui/dist/css/mui.css";
import "mui/examples/hello-mui/css/icons-extra.css"

// 手动启用
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MintUI);

// 导入自己的组件
// 导入过滤器
import "./filter.js"
import router from "./router.js";
// import config from "../../js/config";


// 二、导入我们自己的模块
import ComptApp from "../component/App.vue";

// 三、创建Vue实例，关联视图
new Vue({
  el: "#app",
  render: c => c(ComptApp),
  router
});