<template>
  <section class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in list" :key="i">
        <a :href="item.url">
          <img :src="item.img" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </section>
</template>

<script>
import config from "../../js/config.js";
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    getList() {
      let url = config.getLunbo;
      this.$http.get(url).then(rep => {
        if (rep.body.status == 0) {
          this.list = rep.body.message;
        }
      });
    }
  },
  created() {
    this.getList();
  }


}
</script>

<style lang="less">
.swipe {
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>


