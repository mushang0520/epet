import Vue from 'vue'
import Router from 'vue-router'
/*import home from '../pages/home/home.vue'
import category from '../pages/category/category.vue'
import cart from '../pages/cart/cart.vue'
import user from '../pages/user/user.vue'
import place from '../pages/place/place.vue'*/
const home=()=> import('../pages/home/home.vue')
const category =()=> import( '../pages/category/category.vue')
const cart =()=> import( '../pages/cart/cart.vue')
const user =()=> import( '../pages/user/user.vue')
const place =()=> import( '../pages/place/place.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {keepAlive: true, isTop: true}
    },
    {
      path: '/home',
      component: home,
      meta: {keepAlive: true, isTop: true}
    },
    {
      path: '/place',
      component: place
    },
    {
      path: '/category',
      component: category,
      meta: {keepAlive: true, isTop: true}
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
