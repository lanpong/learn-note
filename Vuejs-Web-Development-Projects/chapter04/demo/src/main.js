import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import Movies from './Movies.vue'

new Vue({
  el: '#app',
  ...Movies,
})
