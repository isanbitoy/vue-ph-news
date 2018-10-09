<template>
  <header class="news-nav-wrapper">
  	<div class="news-banner">
  	  <div><flag iso="ph" /></div>
  	  <div class="banner-name">
  	  	<span>PH</span>
        <span>News</span>
  	  </div>
  	</div>
  	<ul class="nav-list">
  	  <li><a v-on:click="setCategory('business')"><span>Business</span></a></li>
  	  <li><a v-on:click="setCategory('entertainment')"><span>Entertainment</span></a></li>
  	  <li><a v-on:click="setCategory('health')"><span>Health</span></a></li>
  	  <li><a v-on:click="setCategory('science')"><span>Science</span></a></li>
  	  <li><a v-on:click="setCategory('sports')"><span>Sports</span></a></li>
  	  <li><a v-on:click="setCategory('technology')"><span>Technology</span></a></li>
  	</ul>
  </header>
</template>

<style scoped>
.news-nav-wrapper { 
	display: flex;
	position: sticky;
	z-index: 1;
	width: 100%;
	height: auto;
	top: 0; left: 0;
	background: #333;
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
.banner-name {
	color: #e5e5e5;
	margin: 0 5px;
	cursor: pointer;
}
.banner-name span:nth-child(1) {
	font-size: 35px;
  	font-weight: bold;
  	letter-spacing: -1px;
}
.banner-name span:nth-child(2) {
	font-size: 25px;
  	letter-spacing: -2px;
}

.nav-list {
	flex: 1;
	display: flex;
	padding: 0 2.0em;
 	justify-content: flex-end;
 	align-self: center;
}
.nav-list li {
	list-style: none;
}
.nav-list li a {
	color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-size: 20px;
}
.nav-list li a:hover {
	color: #e5e5e5;
}
.nav-list li a > span {
	position: relative;
    cursor: pointer;
}
.nav-list li a > span::after {
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
.nav-list li a > span:hover::after {
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