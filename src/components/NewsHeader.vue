<template>
  <header id="news-header-wrapper">
	<section class="news-banner">
  	  <div><flag iso="ph" /></div>
  	  <div class="banner-name" v-bind:title="title">
  	  	<span>Pi</span>
        <span>Noise</span>
        <span class="div-line"></span>
        <span>All Pinoy News</span>
  	  </div>
  	</section>
  	<section class="news-date">
  		<span>{{ new Date() | moment("dddd, MMMM Do, YYYY") }}</span>	
  	</section>
  </header>
</template>

<style scoped>
#news-header-wrapper {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: auto;
	top: 0; left: 0;
	background: #333;
	margin: 0 auto;
	padding: 1.0em 0;
}
.news-banner {
	flex: 1;
	display: inline-flex;
 	align-self: center;
 	justify-content: center;
 	padding: 0 2.0em;
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
	margin: 0 6px;
	cursor: pointer;
}
.banner-name .div-line {
	border-right: 3px solid #fff;
	margin: 0 6px;
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

.news-date {
	flex: 1;
	display: inline-flex;
	align-self: center;
	justify-content: center;
	padding: 0 2.0em;
	margin-top: 12px;
	user-select: none;
}
.news-date span {
	font-size: 1.2em;
	color: #fff;
}

@media screen and (max-width: 760px) {
	#news-header-wrapper {
		flex-direction: column;
	}
}
</style>

<script>
export default {
	data() {
		return {
			title: 'all about local Philippine news'
		}
	}
}
</script>