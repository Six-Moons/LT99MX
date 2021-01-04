<template>
  <svg width="1em" height="1em" class="rotate">
    <image :xlink:href="href" width="1em" height="1em" />
  </svg>
</template>

<script>
export default {
  name: "Tetromino",
  props: ["href"],
};
</script>