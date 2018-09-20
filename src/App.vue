<template>
  <main id="app-wrapper">
    <news-banner></news-banner>
    <nav class="sticky-navbar">
      <a v-on:click="getArticle('business')"><span class="item">Business</span></a>
      <a v-on:click="getArticle('entertainment')"><span class="item">Entertainment</span></a>
      <a v-on:click="getArticle('health')"><span class="item">Health</span></a>
      <a v-on:click="getArticle('science')"><span class="item">Science</span></a>
      <a v-on:click="getArticle('sports')"><span class="item">Sports</span></a>
      <a v-on:click="getArticle('technology')"><span class="item">Technology</span></a>
    </nav>

    <!--
    <section class="grid-container">
      <div class="news-headline-wrapper">
        <flickity ref="flickity" 
                  v-if="Object.keys(headlineContent).length > 0" 
                  v-bind:options="flickityOptions">

        <article class="headline-article" 
                 v-for="(headline, index) in headlineContent" 
                 v-bind:key="index">
          <a v-bind:title="headline.title" 
             v-bind:href="headline.url" 
             target="_blank" 
             style="text-decoration:none">
            <figure class="figure-container">
              <img v-bind:src="headline.urlToImage ? headline.urlToImage : placeholder" />
              <figcaption>
                <div class="overlay-title"><h3>{{ headline.title }}</h3></div>
                <span class="overlay-source">source:&nbsp;{{ headline.source.name }}</span>
              </figcaption>
            </figure>
            <div class="content-container">{{ headline.description | truncate(120) }}</div>
          </a>
        </article>

        </flickity>
      </div>

      <div class="top-story-wrapper">
        <h3>Top Stories</h3>
        <article class="top-story-article"
                 v-for="(topStory, index) in headlineContent.slice(0, 6)" 
                 v-bind:key="index">
          <a v-bind:title="topStory.title" 
             v-bind:href="topStory.url" 
             target="_blank" 
             style="text-decoration:none">
            <div>{{ topStory.title }}</div>
          </a>
        </article>
      </div>

      <div class="main-article-wrapper">
        <article class="main-article"
                 v-for="(main, index) in mainContent"
                 v-bind:key="index">
          <div>{{ main.title }}</div>
          
        </article>
      </div>
      
    </section>
  -->

  <div class="grid-layout">

    <div class="flex-layout">
      <!-- 1 -->
      <section class="news-headline-wrapper">
        <flickity ref="flickity" 
                  v-if="Object.keys(headlineContent).length > 0" 
                  v-bind:options="flickityOptions">
          <article class="headline-article" 
                 v-for="(headline, index) in headlineContent" 
                 v-bind:key="index">
            <a v-bind:title="headline.title" 
               v-bind:href="headline.url" 
               target="_blank" 
               style="text-decoration:none">
              <figure class="figure-container">
                <img v-bind:src="headline.urlToImage ? headline.urlToImage : placeholder" />
                <figcaption>
                  <div class="overlay-title"><h3>{{ headline.title }}</h3></div>
                  <span class="overlay-source">source:&nbsp;{{ headline.source.name }}</span>
                </figcaption>
              </figure>
              <div class="content-container">{{ headline.description | truncate(120) }}</div>
            </a>
          </article>
        </flickity>
      </section>

      <!-- 2 -->
      <section class="top-story-wrapper">
        <h3>Top Stories</h3>
        <article class="top-story-article"
                 v-for="(topStory, index) in headlineContent.slice(0, 6)" 
                 v-bind:key="index">
          <a v-bind:title="topStory.title" 
             v-bind:href="topStory.url" 
             target="_blank" 
             style="text-decoration:none">
            <div>{{ topStory.title }}</div>
          </a>
        </article>
      </section>
    </div>

    <div style="background-color:red">
      me
    </div>
    <div style="background-color:red">
      me
    </div>
  </div>

  </main>
</template>

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

.grid-layout {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(320px, auto));
    grid-auto-rows: repeat(auto-fit, minmax(auto, 1fr));
    margin: 0 10%;
}
.flex-layout {
    grid-column: span 3;
    display: flex;
}
.news-headline-wrapper {
    flex: 2;
    max-width: 38em;
    max-height: 30em;
}

.top-story-wrapper {
    flex: 1;
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
    padding: 12px 18px;
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

/*
.news-headline-wrapper {
    grid-column: span 2;

    max-width: 42em;
    max-height: 34em;
}*/
.headline-article {
    display: inline-flex;
    width: 100%;
    height: auto;
    background-color: #ededed;
    box-sizing: border-box;
}
.figure-container {
    position: relative;
    width: 38em;
    height: 27em;
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
    height: 3em;
    color: #2c3e50;
    padding: 5px;
}

.top-story-wrapper {
  background-color: #ededed;
}
.top-story-article {
    margin: 0 0 15px 0;
    border-bottom: 1px solid #111;
}

</style>


<script>
import axios from 'axios'
import Flickity from 'vue-flickity'

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

/*build the website url*/
function buildUrl(category) {
  return BaseUrl + "&category=" + category + "&apiKey=" + ApiKey
}

export default {
  components: {
    Flickity
  },
  data: function() {
    return {
      headlineContent: [],
      mainContent: [],
      placeholder: 'http://placehold.it/640x480?text=N/A',
      flickityOptions: {
        initialIndex: null,
        prevNextButtons: true,
        wrapAround: true,
        pageDots: false,
        resize: true,
        contain: true,
        draggable: false,
        freeScroll: false,
        autoPlay: 3000
      }
    }
  },
  mounted() {
    this.getHeadline('')
    this.getArticle('business')
  },
  methods: {
    getHeadline: function(section) {
      let headlineUrl = buildUrl(section);
      axios.get(headlineUrl)
        .then((response) => {
          this.headlineContent = response.data.articles;
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
    },
    getArticle: function(section) {
      let articleUrl = buildUrl(section);
      axios.get(articleUrl)
        .then((response) => {
          this.mainContent = response.data.articles;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  filters: {
    truncate: function(value, limit) {
      if (value && value.length > limit) {
        value = value.substring(0, (limit - 3)) + '... Read More';
      }
      return value;
    }
  }
}
</script>

