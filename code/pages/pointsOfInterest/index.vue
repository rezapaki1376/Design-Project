
<template>
  <div class="container">
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


