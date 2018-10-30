<template>
  <nav id="news-nav-wrapper">
    <ul class="breadcrumb">
      <li><a href="#business"><span @click="setCategory('business')">Business</span></a></li>
      <li><a href="#health"><span @click="setCategory('health')">Health</span></a></li>
      <li><a href="#science"><span @click="setCategory('science')">Science</span></a></li>
      <li><a href="#sports"><span @click="setCategory('sports')">Sports</span></a></li>
      <li><a href="#technology"><span @click="setCategory('technology')">Technology</span></a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  methods: {
    setCategory: function(category) {
      this.$store.dispatch('LOAD_ARTICLE_NEWS', category)
      /*this.$store.commit('SET_CATEGORY', category)*/
    }
  }
};
</script>
<style>
#news-nav-wrapper {
  margin: 2.5em auto;
  max-width: 1030px;
}
.breadcrumb {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px 16px;
  margin: 0 1.0em;
  background: rgba(62,153,204,.50);
  border-radius: 2px;
}
.breadcrumb li {
  padding: 8px;
  list-style: none;
  font-size: 20px;
} 
.breadcrumb li+li::before {
  content: '/\00a0';
  padding: 8px;
  color: #fff;
}
.breadcrumb li a {
  color: #fff;
  text-decoration: none;
}
.breadcrumb li a:hover {
  color: #efefef;
}
.breadcrumb li a > span {
  position: relative;
  cursor: pointer;
}
.breadcrumb li a > span::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0; left: 0;
  transform: scaleX(0);
  transform-origin: bottom;
  transition: transform 0.25s ease-out;
}
.breadcrumb li a > span:hover::after {
  background-color: #efefef;
  transform: scaleX(1);
  transform-origin: bottom center;
}
</style>






<!--
<template>
  <nav id="news-nav-wrapper">
    <input type="checkbox" id="nav-toggle" class="nav-toggle">
    <label for="nav-toggle" class="nav-toggle-icon"><span></span></label>
  	<ul class="nav-list">
  	  <li><a href="#business"><span @click="setCategory('business')">Business</span></a></li>
  	  <li><a href="#entertainment"><span @click="setCategory('entertainment')">Entertainment</span></a></li>
  	  <li><a href="#health"><span @click="setCategory('health')">Health</span></a></li>
  	  <li><a href="#science"><span @click="setCategory('science')">Science</span></a></li>
  	  <li><a href="#sports"><span @click="setCategory('sports')">Sports</span></a></li>
  	  <li><a href="#technology"><span @click="setCategory('technology')">Technology</span></a></li>
  	</ul>
  </nav>
</template>

<style scoped>
:root {
  background: rgba(0,0,0,.76);
}
#news-nav-wrapper { 
	position: sticky;
	z-index: 1;
	width: 100%;
  height: auto;
	top: 0; left: 0;
	background: var(background);
	margin: 0 auto;
	padding: 1.5em 2em;
}
.nav-list {
  display: none;
  text-align: center;
}
.nav-list li {
  padding: 6px 0;
  list-style: none;
}
.nav-list li a {
	color: #fff;
  text-decoration: none;
  font-size: 24px;
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
  bottom: 0; left: 0;
  transform: scaleX(0);
  transform-origin: bottom;
  transition: transform 0.25s ease-out;
}
.nav-list li a > span:hover::after {
	background-color: #ccc;
  transform: scaleX(1);
  transform-origin: bottom center;
}

.nav-toggle {
  display: none;
}
.nav-toggle-icon {
  display: flex;
  justify-content: flex-end;
}
.nav-toggle-icon span,
.nav-toggle-icon span::before,
.nav-toggle-icon span::after {
  position: relative;
  display: block;
  background: #fff;
  height: 4px;
  width: 2em;
  border-radius: 2px;
  cursor: pointer;
}
.nav-toggle-icon span::before,
.nav-toggle-icon span::after {
  content: '';
  position: absolute;
}
.nav-toggle-icon span::before {
  bottom: 9px;
}
.nav-toggle-icon span::after {
  top: 9px;
}
.nav-toggle:checked ~ .nav-list {
  display: flex;
  flex-direction: column;
  transition: all;
}

@media (min-width: 760px) {
  #news-nav-wrapper {
    padding: 0.5em 2em;
  }
  .nav-toggle-icon {
    display: none;
  }
  .nav-list,
  .nav-toggle:checked ~ .nav-list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .nav-list li a {
    font-size: 18px;
  }
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
-->