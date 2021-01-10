<template>
  <div class="rankings">
    <b-tabs
      content-class="mt-3"
      justified
      active-nav-item-class="bg-light text-dark"
    >
      <b-tab
        v-for="table in tables"
        v-bind:key="table.version"
        :title="table.version"
        title-item-class="bg-dark"
        title-link-class="tab-title text-light"
        ><b-tabs
          content-class="mt-3"
          justified
          active-nav-item-class="bg-light text-dark"
          v-show="table.version === 'Tetris99'"
        >
          <b-tab
            v-for="liga in table.ligas"
            v-bind:key="liga.liga"
            :title="liga.liga"
            title-item-class="bg-dark"
            title-link-class="tab-title text-light"
          >
            <b-table hover :items="liga.posiciones"></b-table>
          </b-tab>
        </b-tabs>
        <b-table
          v-show="table.version !== 'Tetris99'"
          hover
          :items="table.posiciones"
        ></b-table>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "Rankings",
  data() {
    return {
      tables: [
        {
          version: "Tetris99",
          ligas: [
            {
              liga: "División A",
              posiciones: [
                { posición: 1, nombre: "Delta", puntos: 100 },
                { posición: 1, nombre: "Nilirias", puntos: 100 },
                { posición: 1, nombre: "Aza", puntos: 100 },
                { posición: 1, nombre: "Victoria", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
              ],
            },
            {
              liga: "División B",
              posiciones: [
                { posición: 1, nombre: "Delta", puntos: 100 },
                { posición: 1, nombre: "Nilirias", puntos: 100 },
                { posición: 1, nombre: "Aza", puntos: 100 },
                { posición: 1, nombre: "Victoria", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
                { posición: 1, nombre: "Rod10s", puntos: 100 },
              ],
            },
          ],
        },
        {
          version: "JStris",
          posiciones: [
            { nombre: "Delta", puntos: 100 },
            { nombre: "Aza", puntos: 100 },
            { nombre: "Nilirias", puntos: 100 },
            { nombre: "Rod10s", puntos: 100 },
            { nombre: "Victoria", puntos: 100 },
          ],
        },
        {
          version: "Tetr.io",
          posiciones: [
            { nombre: "Delta", puntos: 100 },
            { nombre: "Victoria", puntos: 100 },
            { nombre: "Aza", puntos: 100 },
            { nombre: "Nilirias", puntos: 100 },
            { nombre: "Rod10s", puntos: 100 },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.rankings {
  padding: 1.5em 3em;
  height: 100vh;
  overflow-y: scroll;
}

@media (max-width: 991px) {
  .rankings {
    margin-top: 3em;
  }
}
</style>