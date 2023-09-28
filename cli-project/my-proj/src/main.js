import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.directive('greenHeading',{
  bind(el, binding, vnode){
    el.style.color = "#427462";
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
