import { createRouter, createWebHistory } from 'vue-router'

//layouts
import Default from '../layouts/Default.vue'

//views
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
  {
    path: '/',
    component: Default,
    name: 'home',
    children: [
      {
        path: '',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView,
      },

    ]

  }
  
],
})

export default router