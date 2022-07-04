
<template>
<div class="container">
    <div class="row">
      <PointOfInterested
          v-for="(Poi, index) of POIs"
          :id="Poi.id"
          :key="`service-index-${index}`"
          :img="Poi.imageUrl"
          :title="Poi.title"
          :description="Poi.description"
          :address="Poi.address"
          :openinghours="Poi.openingHours"
          
        />
    </div>
  </div>

</template>
<script>

import PointOfInterested from './components/PointOfInterested.vue'
export default {
  name: 'PoiPage',
  components: {
    PointOfInterested,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/points-of-interest')
    // console.log(data)
    return {
      POIs: data,
    }
  },
  data() {
    return {
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid:"description",
          name: 'description',
          content: 'Rome Points of interest',
        },
      ],
    }
  },
}
</script>


