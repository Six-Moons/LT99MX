<template>
  <div>
    <vue-simple-markdown :source="article.descripcion"></vue-simple-markdown>
  </div>
</template>

<script>
import { getArticle } from "../reqs/news";

export default {
  name: "NewsArticle",
  data() {
    return { article: null };
  },
  async mounted() {
    this.article = await getArticle(this.$route.params.news_id);
  },
};
</script>