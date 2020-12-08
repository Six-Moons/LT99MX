<template>
  <div class="home">
    <div class="row">
      <center-panel class="col"></center-panel>
      <right-panel class="col"></right-panel>
    </div>
  </div>
</template>

<script>
import CenterPanel from '../components/CenterPanel.vue'
import RightPanel from '../components/RightPanel.vue'
// @ is an alias to /src
// import CenterPanel from '@/components/CenterPanel.vue'
// import RightPanel from '@/components/RightPanel.vue'

export default {
  name: 'Home',
  components: {
    CenterPanel,
    RightPanel
  }
}
</script>
