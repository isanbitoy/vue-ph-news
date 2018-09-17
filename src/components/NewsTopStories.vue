<template>
  <div class="news-top-stories-wrapper">
	<article class="article-container" v-for="(article, index) in articles" v-bind:key="index">
	  <a v-bind:title="article.title"
	  	 v-bind:href="article.url"
	  	 target="_blank"
	  	 style="text-decoration:none">

	  	 	
	  </a>
	</article>	
  </div>
</template>

<style scoped>
.article-container {
	display: block;
}
</style>

<script>
import axios from 'axios'

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

function buildUrl(category) {
	return BaseUrl + "&category" + category + "&apiKey" + ApiKey
}

export default {
  data: function() {
	return {
		articles: []
	}
  },
  mounted() {
  	this.getPosts('')
  },
  methods: {
  	getPosts: function(section) {
  	  let url = buildUrl(section);
  	  axios.get(url)
  	  	.then((response) => {
  	  		this.articles = response.data.articles[1];
  	  	})
  	  	.catch(error => {
  	  		console.log(error);
  	  	});
  	}
  }
}
</script>