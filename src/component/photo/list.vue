<template>
  <section class="photo-list">
    <v-title :title="title"></v-title>
    <div class="list-nav">
      <ul id="segmentedControl" class="mui-segmented-control">
        <li class="list-nav">
          <router-link to="/photo/list/0">全部</router-link>
        </li>
        <li v-for="item in catgarys" :key="item.id" class="list-nav">
          <router-link :to="'/photo/list/' + item.id">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 图片列表 -->
    <div>
      <div class="mui-card" v-for="item in imageList" :key="item.id">
        <router-link :to="'/photo/details/' + item.id">
          <div class="mui-card-header mui-card-media" :style="'height:40vw;background-image:url('+ item.img_url +')'"></div>
        </router-link>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <h3>{{item.title}}</h3>
            <div style="color: #333;" v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from "../../js/config.js";
import Ctitle from "../common/title.vue"
export default {
  components:{
    "v-title": Ctitle
  },
  data() {
    return {
      catgarys: [],
      imageList: [],
      title: "图片分享"
    };
  },
  methods: {
    // 分类列表
    getphotoCategory() {
      let url = config.photoCategory;
      this.$http.get(url).then(rep => {
        rep.body.status == 0 && (this.catgarys = rep.body.message);
      });
    },
    // 图片列表
    getphotoImageList() {
      let url = config.photoImageList + (this.$route.params.id || 0);
      this.$http.get(url).then(rep => {
        let body = rep.body;
        if (body.status == 0) {
          this.imageList = body.message.map(function(val,i){
            val.img_url = config.imgDomain + val.img_url; 
            return val;
          })

        }
      })
    },
  },
    // 点击分类列表切换
    watch:{
      $route(){
        this.getphotoImageList(this.$route.params.id);
      }
    },
  created() {
    this.getphotoCategory();
    this.getphotoImageList();
  }



}
</script>

<style lang="less">
.photo-list {
  padding: 10px 10px;
  .list-nav {
    padding: 0px 10px;
    ul {
      padding-left: 0;
      li {
        list-style: none;
        float: left;
        padding: 5px 10px;
      }
    }
  }


  .mui-control-item {
    width: 50px;
  }
}
</style>
