import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Index.vue'
import DefaultLayout from '@/layouts/Default.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:"Public",
      component:DefaultLayout,
      redirect:"/",
      children:[
        { path: '/', name: 'home', component: HomeView },
      ]
    },
  ]
})

export default router
