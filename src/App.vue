<template>
  <main id="app-wrapper">
    <!-- call news banner with flag logo -->
    <news-banner></news-banner>
    <!-- sticky navigation bar-->
    <nav class="sticky-navbar">
      <a v-on:click="getArticle('business')"><span>Business</span></a>
      <a v-on:click="getArticle('entertainment')"><span>Entertainment</span></a>
      <a v-on:click="getArticle('health')"><span>Health</span></a>
      <a v-on:click="getArticle('science')"><span>Science</span></a>
      <a v-on:click="getArticle('sports')"><span>Sports</span></a>
      <a v-on:click="getArticle('technology')"><span>Technology</span></a>
    </nav>

    <div class="main-container">

      <div class="flex-layout"><!-- start of flex layout -->

        <!-- headline news in carousel-->
        <section class="news-headline-section">
          <flickity ref="flickity" 
                    v-if="Object.keys(headlineContent).length > 0" 
                    v-bind:options="flickityOptions">
            <article v-for="(headline, index) in headlineContent" 
                     v-bind:key="index">
              <a v-bind:title="headline.title" 
                 v-bind:href="headline.url" 
                 target="_blank" 
                 style="text-decoration:none">
                <figure>
                  <img v-bind:src="headline.urlToImage ? headline.urlToImage : placeholderA" />
                  <figcaption>
                    <div><h3>{{ headline.title }}</h3></div>
                    <span>source:&nbsp;{{ headline.source.name }}</span>
                  </figcaption>
                </figure>
                <div class="content-container">
                  {{ headline.description | truncate(120) }}
                </div>
              </a>
            </article>
          </flickity>
        </section>

        <!-- list of top stories-->
        <section class="top-story-section">
          <h3>Top Stories</h3>
          <article v-for="(topStory, index) in headlineContent.slice(0, 9)" 
                   v-bind:key="index">
            <a v-bind:title="topStory.title" 
               v-bind:href="topStory.url" 
               target="_blank">
              <div>{{ topStory.title }}</div>
            </a>
          </article>
        </section>

      </div><!-- end of flex layout -->
      
      <div class="grid-layout"><!-- start of grid layout -->
        <article v-for="(main, index) in mainContent.slice(0, 6)" 
                 v-bind:key="index">
          <a v-bind:title="main.title"
             v-bind:href="main.url"
             target="_blank"
             style="text-decoration:none">
            <figure>
              <img v-bind:src="main.urlToImage ? main.urlToImage : placeholderB"
                 v-bind:alt="main.title" />
              <figcaption>
                <div><h4>{{ main.title | truncate(50) }}</h4></div>
              </figcaption>
            </figure>
          </a>
        </article>
      </div><!-- end of grid layout -->
    
    </div>
    <!-- news footer -->
    <news-footer></news-footer>
  </main>
</template>

<style lang="scss">
@import 'src/scss/main'
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
      placeholderA: 'http://placehold.it/640x480?text=N/A',
      placeholderB: 'http://placehold.it/320x240?text=N/A',
      flickityOptions: {
        initialIndex: null,
        prevNextButtons: true,
        wrapAround: true,
        resize: true,
        contain: true,
        pageDots: false,
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

