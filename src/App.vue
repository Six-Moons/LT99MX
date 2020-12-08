<template>
  <div id="app">
    <div class="row">
      <left-panel class="col col-3"></left-panel>
      <router-view class="col col-9" />
    </div>
  </div>
</template>

<script>
import LeftPanel from './components/LeftPanel.vue';

export default {
  name: 'App',
  components: { LeftPanel }
};
</script>

<style>
#app {
  overflow-x: hidden;
}
</style>
