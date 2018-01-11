import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import router from './router.js'
import { store } from  './store/store.js';
Vue.use(VueRouter);
import{APIKey, databaseURL} from '../../share-house-config/share-house-config-a6.js';


//******AXIOS CONFIG*********************/
axios.defaults.baseURL = databaseURL;






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
