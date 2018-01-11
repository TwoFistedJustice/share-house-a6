import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import router from './router.js'
import { store } from  './store/store.js';
Vue.use(VueRouter);


//******AXIOS CONFIG*********************/
axios.defaults.baseURL = 'https://share-house-a6.firebaseio.com';




//***********VUE ROUTER CONFIG *********/
// const router  = new VueRouter({
//   routes,
//   mode: 'history'
// });
//***********END VUE ROUTER CONFIG *********/



new Vue({
  el: '#app',
  //register routes so the routes works
  router,
  //register store so vuex works
  store,
  render: h => h(App)
})
