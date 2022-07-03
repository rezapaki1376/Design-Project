<template>

<div class="col-lg-3">
  <!-- <nuxt-link to="/"> -->
          <div class="card">
    <img class="card-img-top" :src="require(`@/assets/img/services/${img}`)" :alt="title">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <nuxt-link :to="`/services/${id}`" :alt="title">
            <div class="btn btn-primary mt-3">See Details</div>
          </nuxt-link>
      </div>
    
  </div>
  <!-- </nuxt-link> -->
  </div>

</template>
<script>
export default {
  name: 'ServiceComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    
  },
  methods: {
    goToDetails() {
      this.$router.push(`/eventdetail/${this.id}`)
    },
  },
}
</script>
<style scoped>

img{
  width: 100%;
  height: 200px;
}
a{
  text-decoration: none;
  color: black;
}
.card{
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 2px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>


