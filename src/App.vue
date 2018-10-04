<template>
  <main id="app">
    <!-- call news banner with flag logo -->
    <news-banner></news-banner>
    <!-- sticky navigation bar-->
    <news-navigation></news-navigation>
    
    <div class="main-container">

      <div class="flex-layout"><!-- start of flex layout -->

        <!-- headline news in carousel-->
        <section class="news-headline-section">
          <flickity ref="flickity" 
                    v-if="Object.keys(getHeadlineContent).length > 0" 
                    v-bind:options="flickityOptions">
            <article v-for="(headline, index) in getHeadlineContent" 
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
          <article v-for="(topStory, index) in getHeadlineContent.slice(0, 9)" 
                   v-bind:key="index">
            <a v-bind:title="topStory.title" 
               v-bind:href="topStory.url" 
               target="_blank">
              <div>{{ topStory.title }}</div>
            </a>
          </article>
        </section>

      </div><!-- end of flex layout -->

      <span id="category" class="div-category">{{ getCategory }}</span>
      <div class="div-line"></div>
      
      <div class="grid-layout"><!-- start of grid layout -->
        <article v-for="(main, index) in getArticleContent.slice(0, 6)" 
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
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },
  data: function() {
    return {
      placeholderA: 'http://placehold.it/640x480?text=N/A',
      placeholderB: 'http://placehold.it/320x240?text=N/A',
      category: 'business',
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
    this.$store.dispatch('LOAD_HEADLINE_NEWS')
    this.$store.dispatch('LOAD_ARTICLE_NEWS', this.category)
  },
  computed: {
    getHeadlineContent: function() {
      return this.$store.state.headlineContent;
    },
    getArticleContent: function() {
      return this.$store.state.articleContent;
    },
    getCategory: function() {
      return this.$store.state.category;
    }
  },

  methods: {
    setCategory: function(category) {
      this.$store.dispatch('LOAD_ARTICLE_NEWS', category)
    },
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
}
</script>

