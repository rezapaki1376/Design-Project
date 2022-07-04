<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link :to="`/points_of_interest`" :alt="Poi.title">
            Points of interest
          </nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ Poi.title }}
        </li>
      </ol>
    </nav>

    <div
      class="
        row
        p-4
        pb-0
        pe-lg-0
        pt-lg-5
        pb-lg-5
        pe-lg-5
        justify-content-between
      "
    >
      <div class="col-lg-4 text-center">
        <img
          class="rounded-lg-3"
          :src="require(`@/assets/img/POIs/${Poi.imageUrl}`)"
          :alt="Poi.title"
        />
      </div>
      <div class="col-lg-7">
        <h1 class="display-4 lh-1">{{ Poi.title }}</h1>
        <p class="lead mt-2">
          {{ Poi.description }}
        </p>
        <hr />
        <b>Opening hours:</b>
        <p class="lead"><i class="bi bi-clock"></i> {{ Poi.openingHours }}</p>

        <b>Address:</b>
        <p class="lead"><i class="bi bi-geo-alt"></i>{{ Poi.address }}</p>

        <a :href="'//' + Poi.eventUrl" target="_blank">
          <p class="lead btn btn-primary">Visit Website</p></a
        >
        <hr />
        <div class="d-flex justify-content-between flex-wrap">
          <p class="lead mx-1 my-0">Created: {{ Poi.createdAt }}</p>
        </div>
      </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" class="btn btn-white px-4" @click="backToList">
          <i class="bi bi-arrow-return-left"></i>
          Return to all Points of interest
        </button>
      </div>
    </div>
    <!-- <div class="row p-4 pb-0 pt-lg-5 pb-lg-5 pe-lg-5 justify-content-center"> -->
    <div v-if="eventsPresent" class="row mb-5 justify-content-center">
      <EventPreviewCard
        v-for="(event, eventIndex) of poiEvents"
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
    <div v-else class="row my-3 justify-content-center">
      <div class="col-lg-3 col-md-5 col-10 empty-card">No events available</div>
    </div>
  </div>
</template>

<script>
import EventPreviewCard from './components/EventCardPreview.vue'
export default {
  name: 'PoiDetailsPage',
  components: {
    EventPreviewCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/points-of-interest/' + id)
    const { data: poiEvents } = await $axios.get(
      '/points-of-interest/' + id + '/events'
    )
    console.log(poiEvents)
    return {
      Poi: data,
      poiEvents,
    }
  },
  head() {
    return {
      title: this.Poi.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.title,
        },
      ],
    }
  },
  computed: {
    eventsPresent() {
      if (this.poiEvents.length === 0) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    backToList() {
      this.$router.push('/points_of_interest')
    },
  },
}
</script>
<style scoped>
img {
  border-radius: 1;
  width: 100%;
}
.btn {
  /* background-color: #00c58e !important; */
  border: 0;
}
.btn-white {
  background-color: white !important;
  /* color: #00c58e !important; */
  border-color: black;
  border: 1px solid;
}
.btn-white:hover {
  background-color: #00c58e !important;
  color: white !important;
}
</style>
