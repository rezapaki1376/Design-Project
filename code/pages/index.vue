<template>
<div>

  <div class="main_index">
    <div class="container">
      <div class="row">
      <div class="col-lg-6">
        <h1>Let's see Rome with us</h1>
      </div>
      <div class="col-lg-6">
        <p>As we planned our first international trip with baby J we sought inspiration and motivation from our favourite family travel quotes: from bravery inducing adventure travel quotes to wonderful wanderlust quotes, we hope that our collection of the best family travel quotes will inspire you on your travels and encourage your wandering soul!</p>
      </div>
    </div>
    <div class="row image-box">
      <div class="col-lg-4">
        <img src="index1.jpg" alt="">
      </div>
      <div class="col-lg-4">
        <img src="index2.jpg" alt="">
      </div>
      <div class="col-lg-4">
        <img src="index3.jpg" alt="">
      </div>
    </div>



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
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('/api/page-info/index')
  //   const title = data.title
  //   const image = data.image
  //   const description = data.description
  //   return {
  //     title,
  //     description,
  //     image,
  //   }
  // },
  data() {
    return {
      events: [],
    }
  },
  async mounted() {},
}
</script>
<style scoped>

.main_index{
  background: #292d33;
  color: white;
  padding: 5% 0;
}
img{
  width: 100%;
  height: 100%;
  padding:0 2.5px;
}
img:hover{
  cursor: pointer;
  filter: blur(0.4px);
  
}
h1{
  font-size: 70px;
}
p{
  font-size: 20px;
}
@media (min-width: 1200px) {
  .container{
  max-width: 70%;
}
  
}


</style>