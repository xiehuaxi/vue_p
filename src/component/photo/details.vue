<template>
  <section class="photo-details">
    <v-title :title="title"></v-title>
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content-inner">
        <p>
          <span>{{info.add_time | formatDate}}&nbsp;</span>
          <span>{{info.click}}次浏览</span>
          <!--<span>{{}}</span>-->
        </p>
      </div>
      <!-- 缩略图 -->
      <div class="mui-card-content">
        <ul class="mui-table-view mui-grid-view">
          <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in hums" :key="item.id">
            <!--<a href="#">-->
                <img v-preview="item.src" class="mui-media-object" :src="item.src">
            <!--</a>-->
          </li>
		    </ul>
      </div>
      <div class="mui-card-footer" v-html="info.content"></div>
    </div>
  </section>
</template>

<script>
import config from "../../js/config.js";
import Ctitle from "../common/title.vue";
export default {
  components: {
    "v-title": Ctitle
  },
  data(){
    return {
      hums: [],
      info: {},
      title: "图片详情"
    }
  },
  methods: {
    getphotoInfo(){
      let url = config.photoInfo + this.$route.params.id;
      this.$http.get(url).then(rep => {
        let body = rep.body;
        body.status == 0 && (this.info = body.message[0]);
      });
    },
    getphotoHumImages(){
      let url = config.photoHumImages + this.$route.params.id;
      this.$http.get(url).then(rep => {
        let body = rep.body;
        if(body.status == 0){
          this.hums = body.message.map(function(img,i){
            img.src = config.imgDomain + img.src;
            return img;
          });
        };
      })
    }
  },

  created(){
    this.getphotoInfo();
    this.getphotoHumImages();
  }
}
</script>

<style lang="less">
  .photo-details {
    .mui-card-content-inner,.mui-card-footer {
      display: block;
    }
  }
</style>
