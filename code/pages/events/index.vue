<template>
  <div class="page container mt-5">
    <div class="mb-5">
      <h1 class="display-4">Events</h1>
      <p class="lead">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus.
      </p>
    </div>
    <div class="row mb-5 justify-content-center">
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
        :time="event.time"
      />
    </div>
  </div>
</template>

<script >
import EventDetail from './components/EventPreviewCard.vue'

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
    // console.log('HI')
  },
}
</script>
