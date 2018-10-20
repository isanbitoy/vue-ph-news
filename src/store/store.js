import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const BaseUrl = 'https://newsapi.org/v2/top-headlines?country=ph'
const ApiKey = '643d0a34867c44cc9519671ec2e0dfbd'

function buildHeadlineApi() {
	return BaseUrl + "&apiKey=" + ApiKey
}
function buildArticleApi(category) {
  	return BaseUrl + "&category=" + category + "&apiKey=" + ApiKey
}

export default new Vuex.Store({
	state: {
		headlineContent: [],
		articleContent: [],
		category: 'business',
		errored: false,
		loading: true
	},
	actions: {
		LOAD_HEADLINE_NEWS: function({ commit }) {
			let headlineUrl = buildHeadlineApi()
			axios.get(headlineUrl)
				.then((response) => {
					commit('SET_HEADLINE_CONTENT', response.data.articles)
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(() => this.loading = false)
		},
		LOAD_ARTICLE_NEWS: function({ commit }, section) {
			let articleUrl = buildArticleApi(section)
			axios.get(articleUrl)
				.then((response) => {
					commit('SET_ARTICLE_CONTENT', response.data.articles)
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(() => this.loading = false)
		}
	},
	mutations: {
		SET_HEADLINE_CONTENT:(state, content) => {
			state.headlineContent = content
		},
		SET_ARTICLE_CONTENT:(state, content) => {
			state.articleContent = content
		},
		SET_CATEGORY:(state, content) => {
			state.category = content
		}
	}
})