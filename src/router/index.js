import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Rankings from '../views/Rankings.vue';
import LogIn from '../views/LogIn.vue';
import News from '../views/News.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mi-cuenta',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/rankings',
    name: 'Rankings',
    component: Rankings
  },
  {
    path: '/log-in',
    name: 'Log In',
    component: LogIn
  },
  {
    path: '/noticias',
    name: 'News',
    component: News
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
