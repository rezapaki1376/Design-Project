<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link :to="`/itineraries`" :alt="Poi.title">
            Itineraries
          </nuxt-link>
        </li>
        <li class="breadcrumb-item">
          <nuxt-link
            :to="`/itineraries/${$route.params.id}`"
            :alt="itinerary.title"
          >
            {{ itinerary.title }}
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
        <div class="d-flex justify-content-center">
          <div class="col">
            <b>Opening hours:</b>
            <p class="lead">
              <i class="bi bi-clock"></i> {{ Poi.openingHours }}
            </p>
          </div>
          <div class="col">
            <b>Address:</b>
            <p class="lead"><i class="bi bi-geo-alt"></i>{{ Poi.address }}</p>
          </div>
        </div>
        <a :href="'//' + Poi.eventUrl" target="_blank">
          <p class="lead btn btn-primary">Visit Website</p></a
        >
        <hr />
        <div class="d-flex justify-content-between flex-wrap">
          <p class="lead mx-1 my-0">Created: {{ Poi.createdAt }}</p>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button type="button" class="btn btn-white px-4" @click="backToList">
        <i class="bi bi-arrow-return-left"></i>
        Return to itinerary
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoiDetailsPage',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/points_of_interest/' + id)
    const { data: poiEvents } = await $axios.get(
      '/points_of_interest/' + id + '/events'
    )
    const { data: relatedItineraries } = await $axios.get(
      '/points_of_interest/' + id + '/itineraries_by_id'
    )
    const { data: itinerary } = await $axios.get('/itineraries/' + id)
    console.log(poiEvents)
    return {
      Poi: data,
      poiEvents,
      relatedItineraries,
      itinerary,
    }
  },
  head() {
    return {
      title: this.Poi.title,
      meta: [
        {
          hid: 'description',
          name: this.Poi.title,
          content: this.Poi.description,
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
    itinerariesPresent() {
      if (this.relatedItineraries.length === 0) {
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
  background-color: #0d6efd !important;
  color: white !important;
}
.empty-card {
  border: 0.5px solid black;
  border-radius: 0.25rem;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
