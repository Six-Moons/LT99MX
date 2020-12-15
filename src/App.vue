<template>
  <div id="app">
    <div class="row">
      <left-panel class="col-3 hide-sm"></left-panel>
      <router-view class="col-lg-9" />
    </div>
  </div>
</template>

<script>
import LeftPanel from "./components/LeftPanel.vue";

export default {
  name: "App",
  components: { LeftPanel },
};
</script>
<style>
#app {
  overflow-x: hidden;
}

@font-face {
  font-family: "HomepageBaukasten";
  src: local("HomepageBaukasten"),
    url(./assets/fonts/HomepageBaukasten-Book.ttf) format("truetype");
}

@font-face {
  font-family: "HomepageBaukasten-bold";
  src: local("HomepageBaukasten-bold"),
    url(./assets/fonts/HomepageBaukasten-Bold.ttf) format("truetype");
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgba(101, 31, 87, 1) 0%,
    rgba(225, 113, 87, 1) 48%,
    rgba(249, 248, 113, 1) 100%
  );
}

@media (max-width: 991px) {
  .hide-sm {
    display: none;
  }
}
</style>

