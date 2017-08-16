<template>
  <article>
    <v-swipe :list="lunbos"></v-swipe>
    <v-nav></v-nav>
  </article>
</template>

<script>
import config from "../../js/config.js";
import Cnav from "./nav.vue";
import Cswipe from "../common/swipe.vue";
export default {
  components: {
    "v-nav": Cnav,
    "v-swipe": Cswipe
  },
  data() {
    return {
      lunbos: []
    }
  },
  methods: {
    getList() {
      let url = config.getLunbo;
      this.$http.get(url).then(rep => {
        let body = rep.body;
        this.lunbos = body.message.map(v => (v.src = v.img) && v);
      });
    }
  },
  created() {
    this.getList();
  }
}
</script>

<style>

</style>


