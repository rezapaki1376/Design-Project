
<template>
<div class="container">
    <div class="row">
      <Itinerary
          v-for="(Itinerarie, index) of Itineraries"
          :key="`service-index-${index}`"
          :img="Itinerarie.src"
          :title="Itinerarie.title"
          :description="Itinerarie.description"
        />
    </div>
  </div>

</template>
<script>

import Itinerary from '~/components/Itinerary.vue'
export default {
  name: 'ListPage',
  components: {
    Itinerary,
  },
  data() {
    return {
      
      Itineraries: [
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


