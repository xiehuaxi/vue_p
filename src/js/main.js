// 一、导入第三方包
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

// 手动启用
Vue.use(VueResource);
Vue.use(VueRouter);

// 导入自己的组件
import router from "./router";

// 二、导入我们自己的模块
import ComptApp from "../component/App.vue";

// 三、创建Vue实例，关联视图
new Vue({
  el: "#app",
  render: c => c(ComptApp),
  router
});