import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Rankings from "../views/Rankings.vue";
import LogIn from "../views/LogIn.vue";
import News from "../views/News.vue";
import Faq from "../views/Faq.vue";
import NewsArticle from "../views/NewsArticle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mi-cuenta",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rankings",
    name: "Rankings",
    component: Rankings,
  },
  {
    path: "/log-in",
    name: "Log In",
    component: LogIn,
  },
  {
    path: "/noticias/:news_id",
    name: "News",
    component: NewsArticle,
  },
  {
    path: "/noticias",
    name: "News",
    component: News,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: Faq,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
