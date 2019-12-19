import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Index from '../views/Index.vue';
import Show from '../views/Show.vue';
import New from '../views/New.vue';
import Edit from '../views/Edit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'index',
    component: Index
  },
  { path: '/products/new',
    name: 'new',
    component: New
  },
  { path: '/products/:id',
    name: 'show',
    component: Show
  },
  { path: '/products/:id/edit',
    name: 'edit',
    component Edit

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
