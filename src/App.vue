<template>
  <div id="app">
  
    <news-navigation></news-navigation><!-- sticky navigation bar with banner logo-->
    
    <main id="main-section"><!-- main section -->
      <div id="flex-layout"><!-- start of flex layout -->
        <!-- news headline section -->
        <flickity id="news-headline"
                  tag="section"
                  ref="flickity" 
                  v-bind:options="flickityOptions"
                  v-if="Object.keys(getHeadlineContent).length > 0">
          <article v-for="(headline, index) in getHeadlineContent" v-bind:key="index">
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
              <div id="content-container">
                <p>{{ headline.description ? headline.description : headline.title | truncate(100) }}</p>
              </div>
            </a>
          </article>
        </flickity>

        <!-- top story section -->
        <section id="related-story">
          <h3>Related Stories</h3>
          <article v-for="(relatedStory, index) in getHeadlineContent.slice(0, 7)" 
                   v-bind:key="index">
            <a v-bind:title="relatedStory.title" 
               v-bind:href="relatedStory.url" 
               target="_blank">
              <div>{{ relatedStory.title }}</div>
            </a>
          </article>
        </section>
        
      </div><!-- end of flex layout -->
      
      <div id="div-line"><!-- start of division line -->
        <div>
          <span>{{ getCategory }}</span>
        </div>
      </div>
      
      <div id="grid-layout"><!-- start of grid layout -->
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
                <div>
                  <h4>{{ main.title }}</h4>
                  <p>{{ main.content ? main.content : emptyString | truncate(240) }}</p>
                </div>
              </figcaption>
            </figure>
          </a>
        </article>
      </div><!-- end of grid layout -->
    </main>

    <!-- news footer -->
    <news-footer></news-footer>
    
  </div>
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

