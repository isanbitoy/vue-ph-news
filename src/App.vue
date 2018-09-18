<template>
  <main id="app-wrapper">
    <news-banner></news-banner>
    <nav class="sticky-navbar">
      <a v-on:click="getPosts('business')"><span class="item">Business</span></a>
      <a v-on:click="getPosts('entertainment')"><span class="item">Entertainment</span></a>
      <a v-on:click="getPosts('health')"><span class="item">Health</span></a>
      <a v-on:click="getPosts('science')"><span class="item">Science</span></a>
      <a v-on:click="getPosts('sports')"><span class="item">Sports</span></a>
      <a v-on:click="getPosts('technology')"><span class="item">Technology</span></a>
    </nav>

    <section class="grid-container">
      <div class="news-headline-container">
        <flickity ref="flickity" 
              v-if="Object.keys(articleContent).length > 0" 
              v-bind:options="flickityOptions">

        <article class="article-container" v-for="(article, index) in articleContent" v-bind:key="index">
          <a v-bind:title="article.title" 
           v-bind:href="article.url" 
           target="_blank" 
           style="text-decoration:none">
            <figure class="figure-container">
              <img v-bind:src="article.urlToImage ? article.urlToImage : placeholder" />
              <figcaption>
                <div class="overlay-title"><h3>{{ article.title }}</h3></div>
                <span class="overlay-source">source:&nbsp;{{ article.source.name }}</span>
              </figcaption>
            </figure>
            <div class="content-container">{{ article.description }}</div>
          </a>
        </article>

        </flickity>
      </div>

      <div>
        <article v-for="(art, index) in articleContent" :key="index">
          <div>{{ art.title }}</div>
        </article>
      </div>
      
    </section>
  <!--
    <transition-group name="grid-container" class="grid-container" tag="section">
      <news-headline></news-headline>
    </transition-group>
  -->
  </main>
</template>

<script>
import axios from 'axios'
import Flickity from 'vue-flickity'

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

/* build the website url*/
function buildUrl() {
  return BaseUrl + "&apiKey=" + ApiKey
}

function buildUrl2(category) {
  return BaseUrl + "&category=" + category + "&apiKey=" + ApiKey
}

export default {
  components: {
    Flickity
  },
  data: function() {
    return {
      articleContent: [],
      placeholder: 'http://placehold.it/640x480?text=N/A',
      flickityOptions: {
        initialIndex: null,
        prevNextButtons: true,
        wrapAround: true,
        pageDots: true,
        resize: true,
        contain: true,
        draggable: false,
        freeScroll: false,
        autoPlay: 3000
      }
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts: function() {
      let url = buildUrl();
      axios.get(url)
      .then((response) => {
        this.articleContent = response.data.articles;
      })
      .catch(error => {
        console.log(error);
      });
    },
    next: function() {
      this.$refs.flickity.next();
    },
    previous: function() {
      this.$refs.flickity.previous();
    }
  }
}
</script>

<style>
html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #f8f8f8;
}
*, *::before, *::after {
    box-sizing: content-box;
    padding: 0;
    margin: 0;
}

/*sticky navigaton bar*/
.sticky-navbar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
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
    /*justify-content: center;*/
    grid-auto-flow: dense;
    margin: 0 10%;
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

.news-headline-container {
    grid-column: span 2;
    max-width: 640px;
    max-height: 480px;
}
.article-container {
    display: inline-flex;
    width: 100%;
    height: auto;
    background-color: #ededed;
    box-sizing: border-box;
}
.figure-container {
    position: relative;
    width: 640px;
    height: 420px;
}
.figure-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.figure-container .overlay-title {
    position: absolute;
    background: rgba(0,0,0,.30); 
    top: 0; left: 0;
    width: 100%;
    height: 13%;
}
.figure-container .overlay-title h3 {
    color: #f2f2f2;
    padding: 5px;
}
.figure-container .overlay-source {
    position: absolute;
    color: #fff;
    padding: 5px;
    bottom: 0; right: 0;
}
.content-container {
    height: 60px;
    color: #2c3e50;
}


</style>
