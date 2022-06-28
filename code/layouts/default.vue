<template>
  <div class="main-page">
    <the-header />
    <nuxt />
    <gotop />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import Gotop from '~/components/Gotop.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    Gotop,
    TheFooter,
    
  },
  
}
</script>
<style scoped>
</style>