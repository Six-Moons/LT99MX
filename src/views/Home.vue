<template>
  <div class="home">
    <center-panel></center-panel>
    <right-panel></right-panel>
  </div>
</template>

<script>
import CenterPanel from '../components/CenterPanel.vue'
import RightPanel from '../components/RightPanel.vue'

export default {
  name: 'Home',
  components: {
    CenterPanel,
    RightPanel
  }
}
</script>
