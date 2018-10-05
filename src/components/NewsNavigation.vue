<template>
  <main id="news-nav" class="news-nav-wrapper">
  	<div class="news-banner">
  	  <div><flag iso="ph" /></div>
  	  <div class="banner-item">
  	  	<span>PH</span>
        <span>News</span>
  	  </div>
  	</div>
  	<nav class="news-navbar">
  	  <a v-on:click="setCategory('business')"><span>Business</span></a>
      <a v-on:click="setCategory('entertainment')"><span>Entertainment</span></a>
      <a v-on:click="setCategory('health')"><span>Health</span></a>
      <a v-on:click="setCategory('science')"><span>Science</span></a>
      <a v-on:click="setCategory('sports')"><span>Sports</span></a>
      <a v-on:click="setCategory('technology')"><span>Technology</span></a>
  	</nav>
  </main>
</template>

<style scoped>
.news-nav-wrapper {
	display: flex;
	z-index: 1;
	width: 100%;
	height: auto;
	top: 0;
	left: 0;
	background: #333;
	position: sticky;
	margin: 0 auto;
	padding: 0.5em 0;
}
.news-banner {
	flex: 1;
	display: inline-flex;
 	padding: 0 2.0em;
 	align-self: center;
}
.flag-icon-ph {
	font-size: 25px;
  	border-radius: 4px;
  	box-sizing: content-box;
  	background-size: contain;
  	background-repeat: no-repeat;
  	border: 1px solid #fff;
	padding: 6px;
}
.banner-item {
	color: #e5e5e5;
	margin: 0 5px;
	cursor: pointer;
}
.banner-item span:nth-child(1) {
	font-size: 35px;
  	font-weight: bold;
  	letter-spacing: -1px;
}
.banner-item span:nth-child(2) {
	font-size: 25px;
  	letter-spacing: -2px;
}

.news-navbar {
	flex: 1;
	display: inline-flex;
	padding: 0 2.0em;
 	justify-content: flex-end;
 	align-self: center;
}
.news-navbar a {
	color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-size: 20px;
}
.news-navbar a:hover {
	color: #e5e5e5;
}
.news-navbar a > span {
	position: relative;
    cursor: pointer;
}
.news-navbar a > span::after {
	content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom;
    transition: transform 0.25s ease-out;
}
.news-navbar a > span:hover::after {
	background-color: #ccc;
    transform: scaleX(1);
    transform-origin: bottom center;
}
</style>

<script>
export default {
	methods: {
		setCategory: function(category) {
			this.$store.dispatch('LOAD_ARTICLE_NEWS', category)
			this.$store.commit('SET_CATEGORY', category)
		}
	}
};
</script>