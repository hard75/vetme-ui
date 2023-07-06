import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Signup from '../views/SignUp.vue'
import Authorize from '../views/AuthorizeView.vue'
import newUser from '../views/newUserView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/authorize',
      name: 'authorize',
      component: Authorize
    },
    {
      path: '/newUser',
      name: 'newUser',
      component: newUser
    }
  ]
})

export default router
