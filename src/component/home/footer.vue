<template>
  <footer class="footer">
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/index">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item mui-active" to="/goods/list">
				<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
				<span class="mui-tab-label">商品购买</span>
			</router-link>
			<router-link class="mui-tab-item" to="/">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
		</nav>
    <div></div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  .footer {
    div {
      height: 50px;
    }
  }
</style>
