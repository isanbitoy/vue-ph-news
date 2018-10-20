<template>
  <footer id="news-footer-wrapper">
    <ul class="nav-list">
      <li><a v-on:click="setCategory('business')">Business</a></li>
      <li><a v-on:click="setCategory('entertainment')">Entertainment</a></li>
      <li><a v-on:click="setCategory('health')">Health</a></li>
      <li><a v-on:click="setCategory('science')">Science</a></li>
      <li><a v-on:click="setCategory('sports')">Sports</a></li>
      <li><a v-on:click="setCategory('technology')">Technology</a></li>
    </ul>
  	<div class="footer-list">
      <div class="copyright">
        <span>&copy;</span>
        <span>{{ year }}</span>
        <span>All rights reserved</span>
      </div>
      <div class="attr-link">| Powered by <a v-bind:href="newsApiUrl" target="_blank">NewsAPI.org</a></div>
  	</div>
  </footer>
</template>

<style scoped>
#news-footer-wrapper {
  display: block;
  width: 100%;
  height: auto;
  bottom: 0; left: 0;
  margin: 0 auto;
  padding: 1.0em 2em;
  background: #222;
}
.nav-list {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.nav-list li {
  list-style: none;
  line-height: 1.5em;
  padding: 0 12px;
}
.nav-list li a {
  cursor: pointer;
  color: #fff;
  text-decoration: none;
}
.nav-list li a:hover {
  color: #a6a6a6;
  text-decoration: underline;
}

.footer-list {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;
  font-size: 14px;
  color: #a6a6a6;
}
.footer-list div,
.copyright span:nth-child(2) {
  padding: 0 3px;
}
.attr-link a {
  color: #a6a6a6;
  text-decoration: none;
}
.attr-link a:hover {
  color: #fff;
  text-decoration: underline;
}

</style>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear(),
      newsApiUrl: 'https://newsapi.org/',
      vueUrl: 'https://vuejs.org/'
		}
	},
	methods: {
		setCategory: function(category) {
			this.$store.dispatch('LOAD_ARTICLE_NEWS', category)
      this.$store.commit('SET_CATEGORY', category)
		}
	}
};
</script>