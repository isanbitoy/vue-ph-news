<template>
  <div class="news-headline-wrapper">
  	<!--<transition-group name="list" class="carousel-container" tag="div">
		  <article class="article-container" v-for="(article, index) in articles" v-bind:key="index">
        <a v-bind:title="article.title" 
           v-bind:href="article.url" 
           target="_blank" 
           style="text-decoration:none">
          <figure class="figure-container">
            <img v-bind:src="article.urlToImage ? article.urlToImage : placeholder" 
                v-bind:alt="article.title" />
            <figcaption>
              <div class="overlay-title"><h3>{{ article.title }}</h3></div>
              <span class="overlay-source">source:&nbsp;{{ article.source.name }}</span>
            </figcaption>
          </figure>
          <div class="content-container">{{ article.description }}</div>
        </a>
      </article>
    </transition-group> -->
    <flickity ref="flickity" :options="flickityOptions">
      <article class="article-container" v-for="(article, index) in articles" v-bind:key="index">
        <a v-bind:title="article.title" 
           v-bind:href="article.url" 
           target="_blank" 
           style="text-decoration:none">
          <figure class="figure-container">
            <img v-bind:src="article.urlToImage ? article.urlToImage : placeholder" 
                v-bind:alt="article.title" />
            <figcaption>
              <div class="overlay-title"><h3>{{ article.title }}</h3></div>
              <span class="overlay-source">source:&nbsp;{{ article.source.name }}</span>
            </figcaption>
          </figure>
          <div class="content-container">{{ article.description }}</div>
        </a>
      </article>
      <button @click="previous()"></button>
      <button @click="next()"></button>
    </flickity>
  </div>
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
export default {
  components: {
    Flickity
  },
	data: function() {
		return {
			articles: [],
			placeholder: 'http://placehold.it/640x480?text=N/A',
      flickityOptions: {
        initialIndex: 12,
        prevNextButtons: true,
        wrapAround: true,
        resize: true,
        autoplay: 5000,
        contain: true
      },
			timer: null
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
      /*let first = this.articles.shift();
      this.articles = this.articles.concat(first);*/
      this.$refs.flickity.next();
    },
    previous: function() {
      /*let last = this.articles.pop();
      this.articles = [last].concat(this.articles);*/
      this.$refs.flickity.previous();
    },
    initRotation: function() {
      this.timer = setInterval(this.next, 8000);
    }
	}
}
</script>