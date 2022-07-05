
<template>
  <div class="container">
    <h1> All points of interest</h1>
    <p>With your lover or family, Rome is the perfect place to spend a 2-3 days weekend, especially since the city can be easily visited on foot!

In order to help you plan your stay, I have written this guide of the best things to do in Rome, with all the must-see attractions and points of interest.</p>
    
    <div class="row">
      <PointOfInterestedPreview
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
import PointOfInterestedPreview from './components/PointOfInterestedPreview.vue'
export default {
  name: 'PoiPage',
  components: {
    PointOfInterestedPreview,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/points_of_interest')
    // console.log(data)
    return {
      POIs: data,
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rome Points of interest',
        },
      ],
    }
  },
}
</script>


