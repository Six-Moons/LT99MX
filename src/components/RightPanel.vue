<template>
  <div id="right-panel">
    <top-3-table :title="'Top 3 Liga A'" :data="rankLigaA"></top-3-table>
    <top-3-table :title="'Top 3 Liga B'" :data="rankLigaB"></top-3-table>
    <hr />
    <img
      :src="imgs[Math.floor(Math.random() * imgs.length)]"
      alt="Image related to Tetris"
    />
  </div>
</template>

<script>
import Top3Table from "./Top3Table.vue";
export default {
  components: { Top3Table },
  name: "RightPanel",
  data() {
    return {
      rankLigaA: [
        { nombre: "Player 1", puntos: 100 },
        { nombre: "Player 2", puntos: 99 },
        { nombre: "Player 3", puntos: 97 },
      ],
      rankLigaB: [
        { nombre: "Player 4", puntos: 95 },
        { nombre: "Player 5", puntos: 92 },
        { nombre: "Player 6", puntos: 87 },
      ],
      imgs: [
        require("@/assets/imgs/schezo.png"),
        require("@/assets/imgs/arle.png"),
        require("@/assets/imgs/feli.png"),
        require("@/assets/imgs/rulue.png"),
      ],
    };
  },
};
</script>

<style scoped>
#right-panel {
  margin-top: 1em;
  height: calc(100vh - 1em);
  overflow-y: scroll;
}

img {
  height: 24vh;
  width: auto;
}

.right-panel {
  background: rgba(0, 212, 255, 1);
  font-family: "HomepageBaukasten-bold";
  height: 100vh;
  transition: all 0.3s;
}
</style>
