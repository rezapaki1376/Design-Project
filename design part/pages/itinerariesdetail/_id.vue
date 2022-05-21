<template>
  <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">{{ name }}</h1>
        <b>Breed:</b>
        <p class="lead">
          {{ breed }}
        </p>
        <b>Description:</b>
        <p class="lead">
          {{ description }}
        </p>
        <b>Location:</b>
        <p class="lead">
          {{ location.name }} - {{location.city}}
        </p>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToList"
          >
            Back to list
          </button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img class="rounded-lg-3" :src="img" alt="" width="" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/cats/' + id)
    return {
      name: data.name,
      breed: data.breed,
      img: data.img,
      description: data.description,
      location: data.location
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  mounted(){
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/Itineraries_list')
    },
  },
}
</script>
