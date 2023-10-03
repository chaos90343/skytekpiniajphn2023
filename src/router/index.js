import { createRouter, createWebHistory } from 'vue-router';

// 導入您的組件
import Home from '@/components/home.vue';
import cart from '@/components/cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
