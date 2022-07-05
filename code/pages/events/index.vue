<template>
  <div class="page container mt-5">
    <div class="mb-5">
      <h1 class="display-4">Events</h1>
      <p class="lead">
        Looking for something to do in Rome? Whether you're a local, new in town
        or just cruising through we've got loads of great tips and events. You
        can explore by location, what's popular, our top picks, free stuff...
        you got this. Ready?
      </p>
    </div>
    <div class="d-flex justify-content-between flex-wrap">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <div class="top">
          <template v-for="(season, index) in seasons">
            <input
              :id="season.name"
              :key="`events-index-${index}`"
              v-model="selectedSeason"
              :value="season.name"
              type="radio"
              class="btn-check"
            />
            <label
              :key="`events-label-index-${index}`"
              class="btn btn-outline-primary"
              :for="`btnradio-${season.name}`"
              @click="handleFilterEvents(season.name)"
              >{{ season.label }}</label
            >
          </template>
        </div>
        <button class="reset-filter-btn" @click="handleFilterEvents(null)">
          <div>All Events</div>
          <i class="bi bi-funnel" style="font-size: 1.5rem; color: grey"></i>
        </button>
      </div>

      <!-- <div class="">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </div> -->
    </div>

    <div v-if="cardsPresent" class="row mb-5 justify-content-center">
      <EventDetail
        v-for="(event, eventIndex) of filteredEvents"
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
      filteredEvents: data,
    }
  },
  data() {
    return {
      seasons: [
        { name: 'SUMMER', label: 'Summer' },
        { name: 'WINTER', label: 'Winter' },
      ],
      selectedSeason: false,
      filteredEvents: this.events,
    }
  },
  head() {
    return {
      title: 'Events in Rome!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'This page offers a overview of selected events in Rome and its surrounding.',
        },
      ],
    }
  },
  computed: {
    cardsPresent() {
      if (this.filteredEvents.length === 0) {
        return false
      } else {
        return true
      }
    },
  },

  methods: {
    handleFilterEvents(eventFilter) {
      console.log(this.filteredEvents.length === 0)
      if (eventFilter == null) {
        this.filteredEvents = this.events
        this.selectedSeason = false
      } else {
        this.filteredEvents = this.events.filter(
          (element) => element.season === eventFilter
        )
        this.selectedSeason = eventFilter
      }
    },
  },
}
</script>
<style scoped>
.btn-group {
  display: inline-flex !important;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -0.5rem;
  margin-left: -1rem;
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
.top {
  margin-left: 1rem;
  margin-top: 0.5rem !important;
}
.btn-custom {
  color: #0d6efd !important;
  border-color: #0d6efd !important;
}
.btn-custom:active,
.btn-custom.active .btn-custom:hover {
  color: white !important;
  background-color: #0d6efd !important;
}
.reset-filter-btn {
  align-items: center !important;
  display: flex;
  margin-left: 1rem;
  border-radius: 0.25rem;
  margin-top: 0.5rem !important;
  padding: 0 0.5rem;
  border: 1px solid grey;
  color: grey;
  background: white;
}
</style>