// 导入路由
import VueRouter from "vue-router";

import Cindex from "../component/index/index.vue"
// 配置路由
export default new VueRouter({
  routes: [
    {path: "/",redirect: "/index"},
    {path: "/index", component: Cindex}
  ]
});