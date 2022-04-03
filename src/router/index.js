import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home/Home';
import Profile from '@/pages/Profile/Profile';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
