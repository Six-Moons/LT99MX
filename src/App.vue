<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <left-panel class="col"></left-panel>
        <center-panel class="col"></center-panel>
        <right-panel class="col"></right-panel>
      </div>
    </div>
  </div>
</template>

<script>
import CenterPanel from './components/CenterPanel.vue'
import RightPanel from './components/RightPanel.vue'
import LeftPanel from './components/LeftPanel.vue'

export default {
  name: 'App',
  components: {
    LeftPanel,
    CenterPanel,
    RightPanel,
  }
}
</script>
