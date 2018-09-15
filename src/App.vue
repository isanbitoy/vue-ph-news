<template>
  <div id="app-wrapper">
    <span class="flag-icon flag-icon-ph flag-icon-squared"></span>
    <news-headline/>
  </div>
</template>

<script>
import NewsHeadline from './components/NewsHeadline.vue'


export default {
  components: {
    NewsHeadline
  }
}
</script>

<style>
html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 2.5em 10%;
    background-color: #f6f6f6;
}
*, *:before, *:after {
    box-sizing: content-box;
    padding: 0;
    margin: 0;
}
.flag-icon-ph {
    font-size: 100px;
    border-radius: 2px;
    box-sizing: content-box;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
}
</style>
