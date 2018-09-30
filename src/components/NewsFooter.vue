<template>
  <main id="news-footer-wrapper" class="news-footer">
  	<div class="footer-container">
  	  <div class="nav-list">
  	  	<div><a href="">Business</a></div>
  	  	<div><a href="">Entertainment</a></div>
  	  	<div><a href="">Health</a></div>
  	  	<div><a href="">Science</a></div>
  	  	<div><a href="">Sports</a></div>
  	  	<div><a href="">Technology</a></div>
  	  </div>
  	  <div class="footer-item">
  	  	&copy;&nbsp;{{ year }}
  	  </div>
  	</div>
  </main>
</template>

<style scoped>
.news-footer {
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
  background: #222;
}
.footer-container {
  display: flex;
  margin: 0 auto;
  padding: 1.5em 3em;
  color: #fff;
}
.nav-list {
  flex: 1;
  display: block;
  line-height: 1.5em;
}
.nav-list a {
  text-decoration: none;
  color: #fff;
}
.nav-list a:hover {
  text-decoration: underline;
  color: #a6a6a6;
}
.footer-item {
  flex: 1;
}

</style>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear()
		}
	}
}
</script>