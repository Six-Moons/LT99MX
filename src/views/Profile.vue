<template>
  <div class="profile">
    <div class="row">
      <div id="profile-area" class="col-lg-8">
        <!-- <h1>Perfil</h1> -->
        <div class="row">
          <div class="col-7 row">
            <div id="username" class="col-sm-8">{{ username }}</div>
            <div class="col-sm-4">{{ favorite_badge }}</div>
            <hr />
          </div>
          <div class="col-5 foo hide-sm">
            <button id="edit-profile" class="btn btn-primary">Editar</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-7">
            <div>
              <b-img
                :src="photo_url"
                fluid
                rounded
                :alt="`Foto de ${username}`"
              ></b-img>
            </div>
            <hr />
            <div class="text-center">{{ name }} - {{ state }}</div>
            <hr />
          </div>
          <div class="col-sm-5">
            <div>Ranking</div>
            <hr />
            <div>
              Partidas recientes
              <b-table :items="recentMatches"></b-table>
            </div>
            <hr />
            <div>Insignias</div>
            <hr />
          </div>
        </div>
        <div>
          Descripción
          <p>{{ description }}</p>
        </div>
        <div class="foo hide-lg">
          <button id="edit-profile" class="btn btn-primary">Editar</button>
        </div>
      </div>
      <right-panel class="col-4 hide-sm"></right-panel>
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula quam diam, sit amet egestas nisi volutpat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac neque id enim volutpat dapibus facilisis sed diam. Donec lorem mi, auctor vel nisl eu, sagittis efficitur massa. Maecenas ac. ",
      recentMatches: [
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
        { dato1: "Lorem", dato2: "Ipsum", dato3: "Dolor" },
      ],
    };
  },
};
</script>

<style scoped>
.foo {
  text-align: right;
}

#profile-area {
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 1.5em 3em;
  background-color: var(--light);
}

#profile-area::-webkit-scrollbar {
  display: none;
}

#username {
  font-size: 3vh;
}

@media (max-width: 991px) {
  .profile {
    margin-top: 3em;
  }
}
</style>
