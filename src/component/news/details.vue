<template>
  <section class="details">
    <v-title :title="title"></v-title>
    <div class="mui-card">
      <div class="mui-card-header">{{news.title}}</div>
      <div class="mui-card-footer">
        <span>创建时间：{{news.add_time | formatDate("YYYY-MM-DD")}}</span>
        <span>关注量：{{news.click}}</span>
      </div>
      <div class="mui-card-content" v-html="news.content"></div>
    </div>
    <v-comment :id="id"></v-comment>
  </section>
</template>

<script>
import config from "../../js/config.js";
import Ctitle from "../common/title.vue";
import Ccomment from "../common/comment.vue";
export default {
  data() {
    return {
      news: {},
      title: "新闻详情",
      id: this.$route.params.id
    }
  },
  methods: {
    getDetails() {
      let url = config.newsDetails + this.$route.params.id;
      this.$http.get(url).then(rep => {
        rep.body.status == 0 && (this.news = rep.body.message[0]);
      })
    }
  },
  created() {
    this.getDetails();
  },
  components: {
    "v-title": Ctitle,
    "v-comment": Ccomment
  }
}
</script>

<style>

</style>
