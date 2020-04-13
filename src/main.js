import App from './App.vue'
import Vue from 'vue';
import 'es6-promise/auto';
import '@babel/polyfill';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store,
    render: h => h(App),
});
