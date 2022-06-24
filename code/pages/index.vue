<template>
 <div>
<div class="container">
  <div id="demo" class="carousel slide" data-bs-ride="carousel">

  <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="index1.jpg" alt="Los Angeles" class="d-block w-60">
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="index2.jpg" alt="Chicago" class="d-block w-60">
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="index3.jpg" alt="New York" class="d-block w-60">
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>
    </div>
  </div>

  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

</div>







 </div>
</template>

<script>
// import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  components: {
    // CustomPage,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
}
</script>
<style scoped>
.row *{
  padding: 0 !important;
  margin: 0;
}
.row{
  padding: 0;
  margin: 0;
}
.carousel-inner img {
    width: 100%;
    height: 600px;
  }
  .carousel-indicators button{
    margin: 0 10px;
  }
</style>