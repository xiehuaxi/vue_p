// 导入路由
import VueRouter from "vue-router";

import Cindex from "../component/index/index.vue";
import CnewsList from "../component/news/list.vue";
import CnewsDetails from "../component/news/details.vue";
// 图片分享
import CphotoList from "../component/photo/list.vue";
import CphotoDetails from "../component/photo/details.vue";
// 商品
import CgoodsList from "../component/goods/list.vue";
import CgoodsDetails from "../component/goods/details.vue";
// 配置路由
export default new VueRouter({
  routes: [
    {path: "/",redirect: "/index"},
    {path: "/index", component: Cindex},
    {path: "/news/list", component: CnewsList},
    {path: "/news/details/:id", component: CnewsDetails},
    // 图片分享
    {path: "/photo/list/:id", component: CphotoList},
    {path: "/photo/details/:id", component: CphotoDetails},
    // 图片分享
    {path: "/goods/list", component: CgoodsList, name: "goodsL"},
    {path: "/goods/details/:id", component: CgoodsDetails, name: "goodsD"},
  ]
});