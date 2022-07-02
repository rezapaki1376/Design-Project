<template>
  <div class="page container mt-5">
    <div class="mb-5">
      <h1 class="display-4">Itineraries</h1>
      <p class="lead">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus.
      </p>
    </div>
    <div class="row mb-5 justify-content-center">
      <ItineraryDetail
        v-for="(itinerarie, itinerarieIndex) of itineraries"
        :id="itinerarie.id"
        :key="`itinerary-index-${itinerarieIndex}`"
        :title="itinerarie.title"
        :description="itinerarie.description"
        :image-url="itinerarie.imageUrl"
        :total-duration="itinerarie.totalDuration"
        :journey="itinerarie.journey"
        :tags="itinerarie.tags"
        :suggested-audience="itinerarie.suggestedAudience"
      />
    </div>
  </div>
</template>

<script >
import ItineraryDetail from './components/ItineraryPreviewCard.vue'

export default {
  name: 'ItinerarytPage',
  components: {
    ItineraryDetail,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/itineraries')
    return {
      itineraries: data,
    }
  },
  data() {
    return {
      
    }
  },
  mounted: () => {
    // console.log('HI')
  },
}
</script>
