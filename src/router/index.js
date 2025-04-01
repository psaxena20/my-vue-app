import Login from '@/components/login.vue';
import AdminPortal from '@/views/AdminPortal.vue';
import CustomerPortal from '@/views/CustomerPortal.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Login },
  { path: '/customer', component: CustomerPortal },
  { path: '/admin', component: AdminPortal  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
