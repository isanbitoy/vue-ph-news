<template>
  <main id="app-wrapper">
    <div class="top-banner">
      <div>
        <div><flag iso="ph" /></div>
        <div class="banner-item" style="padding:5px">
          <span style="color:blue">P</span><span style="color:red">H</span>
          <span>News Portal</span>
          <h2>All fresh headlines from Philippines</h2>
        </div>
      </div>
    </div>
    <nav class="sticky-navbar">
      <a v-on:click="getPosts('business')"><span class="item">Business</span></a>
      <a v-on:click="getPosts('entertainment')"><span class="item">Entertainment</span></a>
      <a v-on:click="getPosts('health')"><span class="item">Health</span></a>
      <a v-on:click="getPosts('science')"><span class="item">Science</span></a>
      <a v-on:click="getPosts('sports')"><span class="item">Sports</span></a>
      <a v-on:click="getPosts('technology')"><span class="item">Technology</span></a>
    </nav>

      <section class="grid-container">
        <news-headline class="big"></news-headline>
        
        <news-top-story></news-top-story>

      </section>
  <!--
    <transition-group name="grid-container" class="grid-container" tag="section">
      <news-headline></news-headline>
    </transition-group>
  -->
  </main>
</template>

<script>
import NewsHeadline from './components/NewsHeadline.vue'
import NewsTopStories from './components/NewsTopStories.vue'

export default {
  components: {
    NewsHeadline,
    NewsTopStories
  }
}
</script>

<style>
html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*margin: 2.5em 10%;*/
    background-color: #e9e9e9;
}
*, *::before, *::after {
    box-sizing: content-box;
    padding: 0;
    margin: 0;
}
.top-banner {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    background-color: #fff;
}
.top-banner > div {
    display: flex;
    padding: 1.5em 10%;
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

/*sticky navigaton bar*/
.sticky-navbar {
    position: sticky;
    background-color: #fff;
    text-align: center;
    margin: 0px 0px 25px 0px;
}
.sticky-navbar a {
    display: inline-flex;
    color: #a6a6a6;
    padding: 18px 20px;
    text-decoration: none;
    font-size: 20px;
}
.sticky-navbar a:hover {
    color: #333;
}
.item {
    position: relative;
    cursor: pointer;
}
.item::after {
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
.item:hover::after {
    background-color: #333;
    transform: scaleX(1);
    transform-origin: bottom center;
}

/*grid container*/
.grid-container {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(320px, auto));
    grid-auto-rows: repeat(auto-fit, minmax(auto, 1fr));
    justify-content: center;
    grid-auto-flow: dense;
}
.grid-container .big {
    min-width: 640px;
    min-height: auto;
    grid-column: span 2;
}
.grid-container .vertical {
    grid-row: span 2;
    background-color: #ededed;
}
</style>
