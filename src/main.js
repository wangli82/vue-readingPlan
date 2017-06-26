// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import {store} from './store'
new Vue({
  el: '#app',
  router,
  ...App,
  store //管理所有状态
});
