// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem, Button} from 'mint-ui';
import vuescroll from 'vue-scroller'

Vue.use(vuescroll)
//import './mock/mockServer'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
