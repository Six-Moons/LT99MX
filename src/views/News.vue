<template>
  <div id="news">
    <div v-for="article in news" v-bind:key="article.title">
      <news-card class="news-card" :article="article"></news-card>
    </div>
  </div>
</template>

<script>

import { getNews } from "../reqs/news";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: { NewsCard },
  name: "News",
  data() {
    return {
      news: null,
    };
  },
  async mounted() {
    this.news = await getNews();
  },
};
</script>