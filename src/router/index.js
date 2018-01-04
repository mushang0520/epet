import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import category from '../pages/category/category.vue'
import cart from '../pages/cart/cart.vue'
import user from '../pages/user/user.vue'
import place from '../pages/place/place.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/place',
      component: place
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/user',
      component: user
    }
  ]
})
