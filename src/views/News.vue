<template>
  <div id="news">
    <div v-for="article in news" v-bind:key="article.title">
      <news-card class="news-card" :article="article"></news-card>
    </div>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue";
export default {
  components: { NewsCard },
  name: "News",
  data() {
    return {
      news: [
        {
          title: "Lorem ipsum",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum nisi facilis sint quaerat placeat quibusdam eius. Ut eum tempore repudiandae, officiis dolores iusto ex alias. Alias rem ipsum eligendi.",
        },
        {
          title: "Puyo puyo tetris",
          content:
            "Puyo Puyo Tetris Puyo Puyo Tetris Puyo Puyo Tetris Puyo Puyo Tetris Puyo Puyo Tetris Puyo Puyo Tetris Puyo Puyo Tetris Puyo Puyo Tetris Puyo Puyo Tetris Puyo Puyo Tetris",
        },
        {
          title: "Lorem ipsum",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum nisi facilis sint quaerat placeat quibusdam eius. Ut eum tempore repudiandae, officiis dolores iusto ex alias. Alias rem ipsum eligendi.",
        },
        {
          title: "Lorem ipsum",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum nisi facilis sint quaerat placeat quibusdam eius. Ut eum tempore repudiandae, officiis dolores iusto ex alias. Alias rem ipsum eligendi.",
        },
        {
          title: "Lorem ipsum",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum nisi facilis sint quaerat placeat quibusdam eius. Ut eum tempore repudiandae, officiis dolores iusto ex alias. Alias rem ipsum eligendi.",
        },
      ],
    };
  },
};
</script>