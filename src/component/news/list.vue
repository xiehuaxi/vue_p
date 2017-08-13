<template>
  
  <section class="list">
    <v-title :title="title"></v-title>
    <ul class="mui-table-view">
    <li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media">
      <router-link :to="url + item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url">
        <div class="mui-media-body">
          <p>{{item.title}}</p>
          <div class="list_item">
            <p>创建时间：{{item.add_time | formatDate("YYYY-MM-DD")}}</p>
            <p>点击量：{{item.click}}</p>
          </div>
          <!--<p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>-->
        </div>
      </router-link>
    </li>
  </ul>
  </section>
</template>

<script>
import config from "../../js/config.js";
import Ctitle from "../common/title.vue"
export default {
  data() {
    return {
      list: [],
      url: "/news/details/",
      title: "新闻列表"
    }
  },
  methods: {
    getNewsList() {
      let url = config.newsList;
      this.$http.get(url).then(rep => {
        rep.body.status == 0 && (this.list = rep.body.message);
      })
    }
  },
  created(){
    this.getNewsList();
  },
  components: {
    "v-title": Ctitle
  }


}
</script>

<style lang="less">
  .list {
    &_item p {
      display: inline-block;
    }
  }
</style>
