<template>
  <div class="col-lg-3 col-md-5 col-10 my-3">
    <div class="card h-100">
      <img
        class="card-img-top"
        :src="require(`@/assets/img/itinerary/${imageUrl}`)"
        :alt="title"
      />
      <div
        class="card-body d-flex flex-column text-center justify-content-between"
      >
        <div>
          <h4 class="card-title">{{ title }}</h4>
          <p class="card-text cut-text">
            {{ description }}
          </p>
        </div>
        <div class="mb-3 d-flex flex-column">
          <hr />
          <div>Total duration: {{ totalDuration }}</div>
          <div>Suggested audience: {{ suggestedAudience }}</div>
          <nuxt-link
            :to="`/points_of_interest/${$route.params.id}/itinerary/${id}`"
            :alt="`details of itinerary-${id}`"
          >
            <div class="btn btn-primary mt-3">See Details</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItineraryCardPreview',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    totalDuration: {
      type: String,
      required: true,
    },
    suggestedAudience: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/itinerarydetail/${this.id}`)
    },
  },
}
</script>

<style scoped>
.cut-text {
  /* width: 160px;  */
  height: auto;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
p {
  text-align: justify;
}
.card {
  border-radius: 1;
  border: 1;
  padding: 0;
  height: 10;
  color: black;
  /* height: 70vh;
  min-height: 150px; */
}
.card img {
  border-radius: 1;
  height: 180px;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* background: rgb(243, 243, 243); */
}
.row {
  padding: 5px;
}
.line {
  height: 1px;
  width: 12%;
  visibility: hidden;
}
.btn {
  /* background-color: #00c58e !important; */
  border: 0;
}
.card:hover .line {
  visibility: visible;
  height: 1px;
  width: 12%;
  border: 1px solid rgb(255, 0, 0);
  background: rgb(255, 0, 0);
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>

