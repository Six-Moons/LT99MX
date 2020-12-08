<template>
  <div id="app">
    <left-panel></left-panel>
    <router-view/>
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
