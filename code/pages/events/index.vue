<template>
  <div class="page container mt-5">
    <h1 class="display-4">Events</h1>
    <div class="row mt-3">
      <EventDetail
        v-for="(event, eventIndex) of events"
        :id="event.id"
        :key="`event-index-${eventIndex}`"
        :title="event.title"
        :description="event.description"
        :image-url="event.imageUrl"
        :price="event.price"
        :preregister-neccessary="event.preregisterNeccessary"
        :date="event.date"
        class="col-sm-2 m-2"
      />
    </div>
  </div>
</template>

<script >
import EventDetail from './components/EventDetail.vue'

export default {
  name: 'EventPage',
  components: {
    EventDetail,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/events')
    return {
      events: data,
    }
  },
  data() {
    return {
      // catList: []
    }
  },
  mounted: () => {
    this.socket = 'something'
    console.log('mounted')
  },
  created() {
    // Note: This would happen on frontend (client) side
    console.log('§HI')
  },
}
</script>
