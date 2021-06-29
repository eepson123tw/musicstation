import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import store from '@/store/index.js'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: { title: '音樂台' }
},
{
  path: '/about',
  name: 'About',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/About.vue'),
  meta: { title: 'about' }
},
{
  path: '/BackStage',
  name: 'BackStage',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/backStage/BackStage.vue'),
  meta: { title: '後台登入頁' }
},
{
  path: '/Product',
  name: 'Product',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Product/Product.vue'),
  meta: { title: '更多音樂頁' }
},
{
  path: '/Cart',
  name: 'Cart',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Cart/Cart.vue'),
  meta: { title: '購物車' }
},
{
  path: '/BackStage/EditProduct',
  name: 'EditProduct',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Procudct/EditProduct.vue'),
  meta: { title: '後台修改頁' }
},
{
  path: '/:pathMatch(.*)*',
  name: 'Error',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Error.vue'),
  meta: { title: '錯誤頁面' }
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
