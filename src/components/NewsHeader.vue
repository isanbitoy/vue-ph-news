<template>
  <header id="news-header-wrapper">
	<section class="news-banner">
  	  <div><flag iso="ph" /></div>
  	  <div class="banner-name" v-bind:title="title">
        <div><span>Pi</span><span>Noise</span></div>
        <div>All Pinoy News</div>
      </div>
  	</section>
  	<section class="news-date">
  	  <span>Philippine Standard Time:</span>
  	  <span>{{ date | moment("dddd, MMMM Do, YYYY") }}</span>
  	  <span>{{ localeTime }}</span>		
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
	background: url(../assets/ph-flag.jpeg);
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	top: 0; left: 0;
	margin: 0 auto;
	padding: 2.0em 0;
}
.news-banner {
	flex: 1;
	display: inline-flex;
 	align-self: center;
 	justify-content: center;
}
.flag-icon-ph {
	font-size: 3em;
  	border-radius: 4px;
  	box-sizing: content-box;
  	background-size: cover;
  	background-repeat: no-repeat;
  	border: 1px solid #fff;
	padding: 6px;
}
.banner-name {
	color: #fff;
	margin: 0 6px;
	cursor: pointer;
}
.banner-name div:last-child {
  font-size: 17px;
}
.banner-name > div span:first-child {
  font-size: 35px;
  font-weight: bold;
  letter-spacing: -1px;
}
.banner-name > div span:last-child {
  font-size: 25px;
  letter-spacing: -2px;
}

.news-date {
	flex: 1;
	display: flex;
	align-self: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 0 2.0em;
	margin-top: 12px;
	user-select: none;
}
.news-date span {
	font-size: 1.0em;
	font-weight: bold;
	color: #fff;
	text-align: center;
}

@media screen and (max-width: 760px) {
	#news-header-wrapper {
		flex-direction: column;
	}
}
</style>

<script>
let moment = require('moment')
export default {
	data() {
		return {
			date: new Date(),
			localeTime: '',
			title: 'all about local Philippine news'
		}
	},
	methods: {
		time: function() {
			this.localeTime = moment().format('LTS').toLocaleString()
		}
	},
	mounted: function() {
		this.interval = setInterval(this.time, 1000)
	},
	beforeDestroy: function() {
		clearInterval(this.interval)
	}
};
</script>