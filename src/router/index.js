import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostLostItem from "@/views/PostLostItem.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/user-profile',
    name: 'user-home',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/lostitems/post',
    name: 'post-lost-item',
    component: PostLostItem
  },
  {
    path: '/users/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/lostitems/:id',
    name: 'lost-item-detail',
    component: () => import('@/views/LostItemDetail.vue')
  },
  {
    path: '/lostitems/post',
    name: 'post-lost-item',
    component: () => import('@/views/PostLostItem.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
