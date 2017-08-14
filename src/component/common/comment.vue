<template>
  <section>
    <!-- 评论框 -->
    <div class="mui-card">
      <div class="mui-card-header">评论</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <textarea v-model="content" id="textarea" rows="5" placeholder="欢迎来搞..."></textarea>
          <button @click="submitComment" type="button" class="mui-btn mui-btn-block mui-btn-outlined">发表评论</button>
        </div>
      </div>
    </div>
    <!--评论列表-->
    <div class="mui-card">
      <div class="mui-card-header">评论列表</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="(item, i) in list" :key="i">
              <div>
                <span>第{{ i }}楼</span>
                <span>{{ item.user_name }}</span>
                <span>{{ item.add_time | formatDate }}</span>
              </div>
              <p>{{ item.content }}</p>
            </li>
          </ul>
          <button ref="stopload" @click="loadMoreBtn" type="button" class="mui-btn mui-btn-block mui-btn-outlined">发表评论</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from "../../js/config.js";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      content: "",
      pageindex: 1,
      list: []
    }
  },
  props: ["id"],
  methods: {
    // 发表评论
    submitComment() {
      let url = config.commentPut + this.id;
      let data = { content: this.content };
      this.$http.post(url, data, { emulateJSON: true }).then(rep => {
        if (rep.body.status == 0) {
          
          Toast({
            message: '发表成功',
            iconClass: 'icon icon-success'
          });
          this.list.unshift({
            user_name: "me",
            add_time: Date.now(),
            content: this.content
          });
          this.content = "";
        }
      });
    },
    // 获取评论列表
    getCommentList(){
      let url = `${config.commentList + this.id}?pageindex=${this.pageindex}`;
      this.$http.get(url).then(rep => {
        if(rep.body.status == 0 && rep.body.message.length > 0){
          this.list.push(...rep.body.message);
          this.pageindex++;
        }else {
          this.$refs.stopload.disabled = true;
        }
      });
    },
    // 加载更多
    loadMoreBtn(){
      this.getCommentList();
    }
  },
  created() {
    this.getCommentList();
  }
}
</script>

<style>

</style>
