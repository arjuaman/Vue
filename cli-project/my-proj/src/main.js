import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.directive('greenHeading',{
  bind(el, binding, vnode){
    el.style.color = "#427462";
  }
});

Vue.directive('orient',{
  bind(el, binding, vnode){
    if(binding.value === "wide"){
      el.style.maxWidth = "1200px";
    }else{
      el.style.maxWidth = "500px";
    }

    if(binding.arg == 'column'){
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
})

Vue.filter('to-upper',(val)=>{
  return val.toUpperCase();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
