
<template>
<div class="container">
    <div class="row">
      <PointOfInterested
          v-for="(POI, index) of POIs"
          :key="`service-index-${index}`"
          :img="POI.src"
          :title="POI.title"
          :description="POI.description"
        />
    </div>
  </div>

</template>
<script>

import PointOfInterested from '~/components/PointOfInterested.vue'
export default {
  name: 'ListPage',
  components: {
    PointOfInterested,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/pointsOfInterest')
    return {
      events: data,
    }
  },
  data() {
    return {
      
      POIs: [
        {
          src: '../services/bank.jpg',
          title: "Doumo",
          description: " favourite family travel quotes: from bravery inducing adventure travel quotes to wonderful wanderlust"
        },
        {
          src: '../services/bank.jpg',
          title: "Doumo",
          description: " favourite family travel quotes: from bravery inducing adventure travel quotes to wonderful wanderlust"
        },
      ],
    }
  },
}
</script>


