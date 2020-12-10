<template>
  <div class="profile">
    <div class="row">
      <div id="profile-area" class="col col-8">
        <h1>Perfil</h1>
        <div class="row">
          <div class="col">
            <div>Username</div>
            <div>Insignia favorita</div>
            <div>Foto</div>
            <div>Nombre - Estado</div>
          </div>
          <div class="col">
            <div>Ranking</div>
            <div>Partidas recientes</div>
            <div>Insignias</div>
          </div>
        </div>
        <div>Descripción</div>
      </div>
      <right-panel class="col col-4"></right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from '../components/RightPanel.vue';

export default {
  name: 'Profile',
  components: { RightPanel }
}
</script>

<style scoped>
#profile-area {
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 1em;
}
#profile-area::-webkit-scrollbar {
  display: none;
}
</style>
