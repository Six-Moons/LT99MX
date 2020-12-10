<template>
  <b-card :title="article.title" tag="article" class="mb-2">
    <b-card-text>
      {{ article.content }}
    </b-card-text>

    <!-- Reaction buttons -->
    <b-button variant="outline-primary" class="reaction-btn">😆</b-button>
    <b-button variant="outline-primary" class="reaction-btn">😍</b-button>
    <b-button variant="outline-primary" class="reaction-btn">😢</b-button>
    <b-button variant="outline-primary" class="reaction-btn">🤬</b-button>
    <b-button variant="outline-primary" class="reaction-btn">🐸</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'NewsCard',
  props: ['article']
};
</script>

<style scoped>
.reaction-btn {
  margin: 0.25rem;
}
</style>
