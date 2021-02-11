<template>
  <b-card :title="article.titulo" tag="article" class="mb-2">
    <b-card-text>
      {{ article.resumen }}
    </b-card-text>

    <!-- Reaction buttons -->
    <div>
      <b-button variant="primary" class="reaction-btn">
        😆<b-badge variant="light">1</b-badge>
      </b-button>
      <b-button variant="primary" class="reaction-btn">
        😍<b-badge variant="light">9</b-badge>
      </b-button>
      <b-button variant="primary" class="reaction-btn">
        😢<b-badge variant="light">2</b-badge>
      </b-button>
      <b-button variant="primary" class="reaction-btn">
        🤬<b-badge variant="light">10</b-badge>
      </b-button>
    </div>
    <div>
      <b-link
        class="btn btn-primary"
        :to="{ name: 'News', params: { news_id: article.id } }"
      >
        Leer más
      </b-link>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["article"],
};
</script>

<style scoped>
.reaction-btn {
  margin: 0.25rem;
  font-size: 0.8em;
}
</style>
