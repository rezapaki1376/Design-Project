<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link :to="`/events`"> Events </nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ event.title }}
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
          :src="require(`@/assets/img/events/${event.imageUrl}`)"
          alt=""
        />
      </div>
      <div class="col-lg-7">
        <h1 class="display-4 lh-1">{{ event.title }}</h1>
        <p class="lead mt-2">
          {{ event.description }}
        </p>
        <div class="my-3 d-flex flex-column">
          <hr />
          <b>Details:</b>
          <div class="d-flex justify-content-between flex-wrap">
            <p class="lead mx-1 my-0">
              <i
                class="bi bi-calendar"
                style="font-size: 1.2rem; color: black"
              ></i>
              {{ event.date }}
            </p>
            <p class="lead mx-1 my-0">
              <i class="bi bi-clock"></i>
              {{ event.time }}
            </p>
            <p class="lead mx-1 my-0">Duration: {{ event.timeDuration }}min</p>
            <p class="lead mx-1 my-0">
              Free:
              <i
                class="bi bi-currency-euro"
                style="font-size: 1.2rem; color: black"
              ></i>
              {{ event.price }}
            </p>
            <p class="lead m-0">
              Prebooking:

              <i
                v-if="event.preregisterNeccessary"
                class="bi bi-check-lg"
                style="font-size: 1.2rem; color: red"
              />
              <i
                v-else
                class="bi bi-x-lg"
                style="font-size: 1.2rem; color: green"
              />
            </p>
          </div>
        </div>

        <b>Organisation:</b>
        <p class="lead">{{ event.organisation }}</p>

        <i class="bi bi-geo-alt"></i><b>Address:</b>
        <p class="lead">{{ event.address }}</p>

        <a :href="'//' + event.eventUrl" target="_blank">
          <p class="lead btn btn-primary">Visit Website</p></a
        >
        <hr />
        <div class="d-flex justify-content-between flex-wrap">
          <p class="lead mx-1 my-0">Created: {{ event.createdAt }}</p>
          <p class="lead mx-1 my-0">EventType: {{ event.eventType }}</p>
          <p class="lead mx-1 my-0">Season: {{ event.season }}</p>
        </div>
      </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" class="btn btn-white px-4" @click="backToList">
          <i class="bi bi-arrow-return-left"></i>
          Return to all events
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  // mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/events/' + id)
    console.log(data)
    return {
      event: data,
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          name: 'asdasd',
          content: 'asdasd',
        },
      ],
    }
  },

  methods: {
    backToList() {
      this.$router.push('/events')
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
  background-color: #00c58e !important;
  border: 0;
}
.btn-white {
  background-color: white !important;
  color: #00c58e !important;
  border-color: black;
  border: 1px solid;
}
.btn-white:hover {
  background-color: #00c58e !important;
  color: white !important;
}
</style>
