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
    }
  }
};
</script>
<style>
#news-nav-wrapper {
  margin: 3em auto;
  max-width: 1030px;
}
.breadcrumb {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4px 16px;
  margin: 0 1.0em;
  background: rgba(62,153,204,.50);
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