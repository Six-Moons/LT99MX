<template>
  <div id="app">
    <div class="row">
      <left-panel class="col col-4"></left-panel>
      <router-view class="col col-8"/>
    </div>
  </div>
</template>

<script>
import LeftPanel from './components/LeftPanel.vue'

export default {
  name: 'App',
  components: { LeftPanel}
}
</script>

<style>
</style>
