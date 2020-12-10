<template>
  <div id="right-panel">
    <top-3-table :title="'Top 3 Liga A'" :data="rankLigaA"></top-3-table>
    <top-3-table :title="'Top 3 Liga B'" :data="rankLigaB"></top-3-table>
    <hr />
    <img
      src="https://image.shutterstock.com/z/stock-vector-your-ad-here-grunge-stamp-with-on-vector-illustration-196566251.jpg"
      alt="Ad placeholder"
    />
  </div>
</template>

<script>
import Top3Table from './Top3Table.vue';
export default {
  components: { Top3Table },
  name: 'RightPanel',
  data() {
    return {
      rankLigaA: [
        { nombre: 'Nilirias', puntos: 100 },
        { nombre: 'Delta', puntos: 99 },
        { nombre: 'Aza', puntos: 97 }
      ],
      rankLigaB: [
        { nombre: 'Vicky', puntos: 95 },
        { nombre: 'AAAAAAAAAAAA', puntos: 92 },
        { nombre: 'Foobar', puntos: 87 }
      ]
    };
  }
};
</script>

<style scoped>
#right-panel {
  margin-top: 1em;
}
img {
  height: 30vh;
  width: auto;
}
.right-panel{
    background: rgba(0,212,255,1);
    font-family: "HomepageBaukasten-bold";
    height: 100vh;
    transition: all 0.3s;
}
</style>
