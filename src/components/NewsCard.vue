<template>
    <b-card
        title="Lorem ipsum"
        tag="article"
        class="mb-2"
    >
        <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum nisi facilis sint quaerat placeat quibusdam eius. Ut eum tempore repudiandae, officiis dolores iusto ex alias. Alias rem ipsum eligendi.
        </b-card-text>

        <b-button href="#" variant="primary" class="reaction-btn">👁</b-button>
        <b-button href="#" variant="primary" class="reaction-btn">👄</b-button>
        <b-button href="#" variant="primary" class="reaction-btn">👁</b-button>
    </b-card>
</template>

<script>
export default {
    name: 'NewsCard'
}
</script>

<style scoped>
    .reaction-btn {
        margin: 0.25rem;
    }
</style>