<template>
  <main id="app-wrapper">
    <span class="flag-icon flag-icon-ph flag-icon-squared"></span>

    <div class="big"><news-headline/></div>
    <transition-group name="grid-container" class="grid-container" tag="section">

     
    </transition-group>
    
  </main>
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
.grid-container {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(160px, 320px));
    grid-auto-rows: repeat(auto-fit, minmax(auto, 1fr));
    justify-content: center;
    grid-auto-flow: dense;
}
.big {
    grid-column: span 2;
}
</style>
