<template>
  <div class="profile">
    <div class="row">
      <div id="profile-area" class="col col-8">
        <h1>Perfil</h1>
        <div class="row">
          <div class="col row">
            <div id="username" class="col col-8">{{ username }}</div>
            <div class="col col-4">{{ favorite_badge }}</div>
            <div>
              <b-img
                :src="photo_url"
                fluid
                rounded
                :alt="`Foto de ${username}`"
              ></b-img>
            </div>
            <div>{{ name }} - {{ state }}</div>
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
import RightPanel from "../components/RightPanel.vue";

export default {
  name: "Profile",
  components: { RightPanel },
  data() {
    return {
      username: "AAAAAAAAAAAA",
      favorite_badge: "🥇",
      photo_url:
        "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/06/cat-breading11.jpg",
      name: "Fulano Pérez",
      state: "Tlaxcala",
    };
  },
};
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

#username {
  font-size: x-large;
}
</style>
