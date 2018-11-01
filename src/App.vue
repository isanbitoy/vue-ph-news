<template>
  <div id="app">
    <news-header></news-header><!-- news header with banner logo -->
    
    <main id="main-section">
      <section id="flex-layout">
        <!-- news headline -->
        <flickity id="news-headline"
                  ref="flickity" 
                  :options="flickityOptionsA"
                  v-if="Object.keys(getHeadlineContent).length > 0">
          <article v-for="(headline, index) in getHeadlineContent" :key="index">
            <a :title="headline.title" 
               :href="headline.url" 
               target="_blank">
              <figure>
                <img :src="headline.urlToImage ? headline.urlToImage : placeholderA" />
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
          <article v-for="(relatedStory, index) in getHeadlineContent.slice(0, 8)" 
                   :key="index">
            <a :title="relatedStory.title" 
               :href="relatedStory.url" 
               target="_blank">
              <div>{{ relatedStory.title }}</div>
            </a>
          </article>
        </div>
      </section>
      
      <!-- entertainment news -->
      <section id="wrap-layout">
        <h3>Entertainment News</h3>
        <flickity id="news-entertainment" 
                  ref="flickity"
                  :options="flickityOptionsB"
                  v-if="Object.keys(getEntertainmentContent).length > 0">
          <article v-for="(ent, index) in getEntertainmentContent" :key="index">
            <a :href="ent.url" target="_blank">
              <figure>
                <img :src="ent.urlToImage ? ent.urlToImage : placeholderC">
                <figcaption>
                  <div><h5>{{ ent.title }}</h5></div>
                </figcaption>
              </figure>
            </a>
          </article>
        </flickity>
      </section>

      <news-navigation></news-navigation><!-- navigation bar -->
      
      <!-- start of grid layout -->
      <section id="grid-layout">
        <article v-for="(main, index) in getArticleContent.slice(0, 6)" 
                 :key="index">
          <a :id="getCategory"
             :title="main.title"
             :href="main.url"
             target="_blank">
            <figure>
              <img :src="main.urlToImage ? main.urlToImage : placeholderB"
                   :alt="main.title" />
              <figcaption>
                <div>
                  <h4>{{ main.title }}</h4>
                  <p>{{ main.content ? main.content : emptyString | truncate(240) }}</p>
                </div>
              </figcaption>
            </figure>
          </a>
        </article>
      </section>
    </main><!-- end of main section -->

    <news-footer></news-footer><!-- news footer -->
  </div>
</template>
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
      placeholderC: 'http://placehold.it/240x208?text=N/A',
      category: 'business',
      emptyString: 'nothing to display',
      flickityOptionsA: {
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
      flickityOptionsB: {
        initialIndex: null,
        prevNextButtons: true,
        wrapAround: true,
        resize: true,
        contain: true,
        pageDots: true,
        draggable: true,
        freeScroll: true
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('LOAD_HEADLINE_NEWS')
      this.$store.dispatch('LOAD_ARTICLE_NEWS', this.category)
      this.$store.dispatch('LOAD_ENTERTAINMENT_NEWS')
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

