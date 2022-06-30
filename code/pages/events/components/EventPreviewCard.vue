<template>
  <div class="col-lg-3 col-md-5 col-10 my-3">
    <div class="card h-100">
      <nuxt-link :to="`/events/${id}`">
        <img
          class="card-img-top"
          :src="require(`@/assets/img/events/${imageUrl}`)"
          alt="Card image"
        />
        <div class="card-body d-flex flex-column text-center">
          <h4 class="card-title">{{ title }}</h4>
          <p class="card-text cut-text">
            {{ description }}
          </p>
          <hr />
          <div class="d-flex justify-content-around mb-3">
            <div>
              <i
                class="bi bi-calendar"
                style="font-size: 1.2rem; color: black"
              ></i>
              {{ date }}
            </div>
            <div>
              <i
                class="bi bi-currency-euro"
                style="font-size: 1.2rem; color: black"
              ></i>
              {{ price }}
            </div>
          </div>

          <nuxt-link :to="`/events/${id}`">
            <div class="btn mt-auto btn-primary">See Details</div>
          </nuxt-link>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventDetail',
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
    price: {
      type: Number,
      required: true,
    },
    preregisterNeccessary: {
      type: Boolean,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.context)
  },
  methods: {
    goToDetails() {
      this.$router.push(`/eventdetail/${this.id}`)
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
  background-color: #00c58e !important;
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

