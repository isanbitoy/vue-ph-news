<template>
  <main id="news-banner-wrapper" class="news-banner">
  	<div class="banner-container">
  	  <div><flag iso="ph" /></div>
  	  <div class="banner-item" style="padding:5px">
  	  	<span style="color:blue">P</span><span style="color:red">H</span>
        <span>News Portal</span>
        <h2>All fresh news from Philippines</h2>
  	  </div>
  	</div>
  </main>
</template>

<style scoped>
.news-banner {
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  background-color: #fff;
}
.news-banner > div {
	display: flex;
	padding: 1.2em 9%;
  margin: 0 auto;
}
.flag-icon-ph {
	font-size: 85px;
  border-radius: 4px;
  box-sizing: content-box;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  border: 1px solid #ededed;
}
.banner-item span {
	font-size: 42px;
  font-weight: bold;
  letter-spacing: -2px;
}
</style>