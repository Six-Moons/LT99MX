<template>
  <b-card
    :title="title"
    footer="Actualizado hoy"
    footer-tag="small"
    class="mb-2 right-card"
  >
    <b-card-text>
      <b-table striped hover :items="data"></b-table>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'Top3table',
  props: ['title', 'data']
};
</script>

<style scoped>
.right-card {
  width: 90%;
}
</style>
