<template>
  <footer class="news-footer-wrapper">
    <ul class="nav-list">
      <li><a v-on:click="setCategory('business')">Business</a></li>
      <li><a v-on:click="setCategory('entertainment')">Entertainment</a></li>
      <li><a v-on:click="setCategory('health')">Health</a></li>
      <li><a v-on:click="setCategory('science')">Science</a></li>
      <li><a v-on:click="setCategory('sports')">Sports</a></li>
      <li><a v-on:click="setCategory('technology')">Technology</a></li>
    </ul>
  	<div class="footer-item">
  	  <span>&copy;</span>{{ year }}
  	</div>
  </footer>
</template>

<style scoped>
.news-footer-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  bottom: 0; left: 0;
  margin: 0 auto;
  padding: 1.5em 3em;
  color: #fff;
  background: #222;
}
.nav-list {
  flex: 1;
  display: block;
}
.nav-list li {
  list-style: none;
  line-height: 1.5em;
}
.nav-list li a {
  cursor: pointer;
  text-decoration: none;
}
.nav-list li a:hover {
  color: #a6a6a6;
  text-decoration: underline;
}

.footer-item {
  flex: 1;
  top: 0; right: 0;
}
.footer-item span {
  margin-right: 5px;
}

</style>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear()
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