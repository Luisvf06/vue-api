import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetApi from '../components/GetApi.vue'
import PostApi from '../components/PostApi.vue'
import PutApi from '../components/PutApi.vue'
import DeleteApi from '../components/DeleteApi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'home', component: HomeView},
    {
      path: '/get',
      name: 'get',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: GetApi
    },
    { path: '/post',name:'post',component:PostApi},
    { path: '/put', name:'put',component:PutApi},
    { path: '/delete',name:'delete',component:DeleteApi},
  ]
})

export default router
