// 导入路由
import VueRouter from "vue-router";

import Cindex from "../component/index/index.vue";
import CnewsList from "../component/news/list.vue";
import CnewsDetails from "../component/news/details.vue";
// 配置路由
export default new VueRouter({
  routes: [
    {path: "/",redirect: "/index"},
    {path: "/index", component: Cindex},
    {path: "/news/list", component: CnewsList},
    {path: "/news/details/:id", component: CnewsDetails}
  ]
});