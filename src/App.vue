<template>
  <div id="app">

    <news-header></news-header><!-- news header with banner logo -->
    
    <main id="main-section">
      <section id="flex-layout">
        <!-- news headline -->
        <content-loader v-if="!access"
          :width="512"
          :height="416"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb">
          <rect x="0" y="0" rx="3" ry="3" width="512" height="416" />
        </content-loader>
        <flickity v-else id="news-headline"
                  ref="flickity" 
                  v-bind:options="flickityOptions"
                  v-if="Object.keys(getHeadlineContent).length > 0">
          <article v-for="(headline, index) in getHeadlineContent" v-bind:key="index">
            <a v-bind:title="headline.title" 
               v-bind:href="headline.url" 
               target="_blank">
              <figure>
                <img v-bind:src="headline.urlToImage ? headline.urlToImage : placeholderA" />
                <figcaption>
                  <div><h3>{{ headline.title }}</h3></div>
                  <span>source:&nbsp;{{ headline.source.name }}</span>
                </figcaption>
              </figure>
              <div id="content-container">
                <p>{{ headline.description ? headline.description : headline.title | truncate(100) }}</p>
              </div>
            </a>
          </article>
        </flickity>

        <!-- related stories -->
        <div id="related-story">
          <h3>Related Stories</h3>
          <article v-for="(relatedStory, index) in getHeadlineContent.slice(0, 7)" 
                   v-bind:key="index">
            <a v-bind:title="relatedStory.title" 
               v-bind:href="relatedStory.url" 
               target="_blank">
              <div>{{ relatedStory.title }}</div>
            </a>
          </article>
        </div>
        
      </section><!-- end of flex layout -->
      
      <section>
        <flickity id="entertainment-news" :options="opt">
          <article></article>
        </flickity>
      </section>

      <!--<section id="div-line">
        <div>
          <span>{{ getCategory }}</span>
        </div>
      </section>-->
      <news-navigation></news-navigation><!-- navigation bar -->
      
      <section id="grid-layout"><!-- start of grid layout -->
        <article v-for="(main, index) in getArticleContent.slice(0, 6)" 
                 v-bind:key="index">
          <a v-bind:id="getCategory"
             v-bind:title="main.title"
             v-bind:href="main.url"
             target="_blank">
            <figure>
              <img v-bind:src="main.urlToImage ? main.urlToImage : placeholderB"
                   v-bind:alt="main.title" />
              <figcaption>
                <div>
                  <h4>{{ main.title }}</h4>
                  <p>{{ main.content ? main.content : emptyString | truncate(240) }}</p>
                </div>
              </figcaption>
            </figure>
          </a>
        </article>
      </section><!-- end of grid layout -->
    </main><!-- end of main section -->

    <news-footer></news-footer><!-- news footer -->
    
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Flickity,
    Carousel,
    Slide
  },
  data: function() {
    return {
      placeholderA: 'http://placehold.it/640x480?text=N/A',
      placeholderB: 'http://placehold.it/320x240?text=N/A',
      access: null,
      category: 'business',
      emptyString: 'nothing to display',
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
      },
      opt: {
        wrapAround: true
      }
    }
  },
  mounted() {
    this.$store.dispatch('LOAD_HEADLINE_NEWS')
    this.$store.dispatch('LOAD_ARTICLE_NEWS', this.category)
    setTimeout(() => {
      this.access = 'accessible'
    }, 1000)
  },
  computed: {
    getHeadlineContent: function() {
      return this.$store.state.headlineContent;
    },
    getArticleContent: function() {
      return this.$store.state.articleContent;
    },
    getEntertainmentContent: function() {
      return this.$store.state.entertainmentContent;
    }
    /*
    getCategory: function() {
      return this.$store.state.category;
    }*/
  },
  methods: {
    next: function() {
      this.$refs.flickity.next();
    },
    previous: function() {
      this.$refs.flickity.previous();
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
};
</script>

<style lang="scss">
@import 'src/scss/main'
</style>

