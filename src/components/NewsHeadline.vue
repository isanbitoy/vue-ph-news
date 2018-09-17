<template>
  <div class="news-headline-wrapper">
    <flickity ref="flickity" 
              v-if="Object.keys(articles).length > 0" 
              v-bind:options="flickityOptions">

      <article class="article-container" v-for="(article, index) in articles" v-bind:key="index">
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
</template>

<style scoped>
.news-headline-wrapper {
    max-width: 640px;
    max-height: 480px;
}
.article-container {
    display: flex;
    flex: 0 0 100%;
    background-color: #fff;
    transition: all 0.8s ease-in;
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
    background-color: #ededed;
}

</style>

<script>
import axios from 'axios'
import Flickity from 'vue-flickity'

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

/* build the website url*/
function buildUrl() {
  return BaseUrl + "&apiKey=" + ApiKey
}
export default {
  components: {
    Flickity
  },
	data: function() {
		return {
			articles: [],
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
        autoPlay: 3500
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
        this.articles = response.data.articles;
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