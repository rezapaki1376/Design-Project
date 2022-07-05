<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link :to="`/itineraries`" alt="Itineraries">
            Itineraries
          </nuxt-link>
        </li>
        <li class="breadcrumb-item">
          <nuxt-link
            :to="`/points_of_interest/${$route.params.id}`"
            :alt="poi.title"
          >
            {{ poi.title }}
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
            <p class="lead mx-1 my-0">
              Duration: {{ itinerary.totalDuration }}min
            </p>
            <p class="lead">
              Suggeste audience: {{ itinerary.suggestedAudience }}
            </p>
          </div>
        </div>
        <hr />
        <div class="d-flex justify-content-between flex-wrap">
          <p class="lead mx-1 my-0">Created: {{ itinerary.createdAt }}</p>
        </div>
      </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" class="btn btn-white px-4" @click="backToPoi">
          <i class="bi bi-arrow-return-left"></i>
          Return to Point of interest
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItinaryDetailsPage',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data: poi } = await $axios.get('/points_of_interest/' + id)
    const { data } = await $axios.get('/itineraries/' + id)

    return {
      itinerary: data,
      poi,
    }
  },
  head() {
    return {
      title: 'this.itinerary.title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          // content: this.itinerary.description,
        },
      ],
    }
  },

  methods: {
    backToPoi() {
      this.$router.push(`/points_of_interest/${this.poi.id}`)
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
  /* color: #00c58e !important; */
  border-color: black;
  border: 1px solid;
}
.btn-white:hover {
  background-color: #0d6efd !important;
  color: white !important;
}
</style>
