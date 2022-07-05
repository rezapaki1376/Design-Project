<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link :to="`/itineraries`" alt="Itineraries">
            Itineraries
          </nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ itinerary.title }}
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
          :src="require(`@/assets/img/itinerary/${itinerary.imageUrl}`)"
          :alt="itinerary.title"
        />
      </div>
      <div class="col-lg-7">
        <h1 class="display-4 lh-1">{{ itinerary.title }}</h1>
        <p class="lead mt-2">
          {{ itinerary.description }}
        </p>
        <div class="my-3 d-flex flex-column">
          <hr />
          <b>Details:</b>
          <div class="d-flex justify-content-between flex-wrap">
            <!-- <p class="lead mx-1 my-0">
              <i
                class="bi bi-calendar-event"
                style="font-size: 1.2rem; color: black"
              ></i>
              {{ itinerary.date }}
            </p> -->
            <!-- <p class="lead mx-1 my-0">
              <i class="bi bi-clock"></i>
              {{ itinerary.time }}
            </p> -->
            <p class="lead mx-1 my-0">
              Duration: {{ itinerary.totalDuration }}min
            </p>

            <p class="lead">
              Suggeste audience: {{ itinerary.suggestedAudience }}
            </p>
            <!-- <p class="lead mx-1 my-0">
               Cost:
            <span v-if="itinerary.price > 0" >
            <i class="bi bi-currency-euro" style="font-size: 1.2rem; color: black"
            ></i>
            {{ itinerary.price }}
            </span>
            <span v-if="itinerary.price == 0" >
            
            Free
            </span>
            </p> -->
            <!-- <p class="lead m-0">
              Prebooking:

              <i
                v-if="itinerary.preregisterNeccessary"
                class="bi bi-check-lg"
                style="font-size: 1.2rem; color: red"
              />
              <i
                v-else
                class="bi bi-x-lg"
                style="font-size: 1.2rem; color: green"
              />
            </p> -->
          </div>
        </div>

        <!-- <b>Organisation:</b>
        <p class="lead">{{ itinerary.organisation }}</p> -->

        <!-- <i class="bi bi-geo-alt"></i><b>Address:</b>
        <p class="lead">{{ itinerary.address }}</p> -->

        <!-- <a :href="'//' + itinerary.eventUrl" target="_blank">
          <p class="lead btn btn-primary">Visit Website</p></a
        > -->
        <hr />
        <div class="d-flex justify-content-between flex-wrap">
          <p class="lead mx-1 my-0">Created: {{ itinerary.createdAt }}</p>
          <!--<p class="lead mx-1 my-0">EventType: {{ itinerary.eventType }}</p>
           <p class="lead mx-1 my-0">
           
            Season: {{ itinerary.season }}
             <i v-if="itinerary.season == 'SUMMER'" class="bi bi-brightness-high"></i>
            <i v-if="itinerary.season == 'WINTER'" class="bi bi-snow2"></i>
            </p> -->
        </div>
      </div>
      <div class="container">
        <div class="my-5">
          <h1 class="display-4 lh-1 text-center">
            Points of interest involving the itinerary
          </h1>
          <div
            v-if="itinerariesPresent"
            class="row mb-5 justify-content-center"
          >
            <PointOfInterestedPreview
              v-for="(Poi, index) of poi"
              :id="Poi.id"
              :key="`service-index-${index}`"
              :img="Poi.imageUrl"
              :title="Poi.title"
              :description="Poi.description"
              :address="Poi.address"
              :openinghours="Poi.openingHours"
            />
          </div>
          <div v-else class="row my-3 justify-content-center">
            <div class="col-lg-3 col-md-5 col-10 empty-card">
              No point of interestss available
            </div>
          </div>
        </div>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" class="btn btn-white px-4" @click="backToList">
          <i class="bi bi-arrow-return-left"></i>
          Return to all itineraries
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PointOfInterestedPreview from './components/PointOfInterestedPreview.vue'

export default {
  name: 'ItinaryDetailsPage',
  // mixins: [CommonMixin],
  components: {
    PointOfInterestedPreview,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/itineraries/' + id)
    const { data: poi } = await $axios.get(
      '/itineraries/' + id + '/points_of_interest'
    )
    console.log('dataconnecte')
    console.log(poi)
    return {
      itinerary: data,
      poi,
    }
  },
  head() {
    return {
      title: this.itinerary.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.itinerary.description,
        },
      ],
    }
  },
  computed: {
    itinerariesPresent() {
      if (this.poi.length === 0) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    backToList() {
      this.$router.push('/itineraries')
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
  background-color: #0d6efd !important;
  border: 0;
}
.btn-white {
  background-color: white !important;
  /* color: #0d6efd !important; */
  border-color: black;
  border: 1px solid;
}
.btn-white:hover {
  background-color: #0d6efd !important;
  color: white !important;
}
</style>
