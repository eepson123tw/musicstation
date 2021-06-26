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
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/backStage/BackStage.vue'),
  meta: { title: '後台登入頁' }
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
