<template>
 <div>
    <div class="row col-lg-12 about-us">
      <div class="jumbotron col-lg-6">
        <h1>About us</h1>
        <p class="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="jumbotron col-lg-6">
        <img class="IMG_styles" src="aboutus1.jpg" alt="" />
      </div>
    </div>

    <div class="row col-lg-12 description">
      <div class="jumbotron col-lg-6">
        <img class="IMG_styles" src="aboutus2.jpg" alt="" />
      </div>

      <div class="jumbotron col-lg-6">
        <h1>What we do?</h1>
        <p class="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>

    <div class="row col-lg-12 news">
      <h1>News</h1>
    </div>

    <div class="row">
<NewsCard/>
<NewsCard/>
<NewsCard/>
<NewsCard/>

      
    </div>

    <div class="row join-us">
      <div class="col-lg-6"></div>
      <div class="col-lg-6"></div>


    </div>
  </div>

  
</template>

<script>
import NewsCard from '~/components/NewsCard.vue'
export default {
  name: 'AboutPage',
  components: {
    NewsCard,
  },
//   data() {
//     return {}
//   },
//   async asyncData({ $axios }) {
//     const { data } = await $axios.get('/api/page-info/about')
//     const title = data.title
//     const image = data.image
//     const description = data.description
//     return {
//       title,
//       description,
//       image,
//     }
//   },
}
</script>


<style scoped>
.IMG_styles {
  height: 400px;
  width: 100%;
  /* margin: 10px; */
}
.jumbotron {
  margin: 0;
  padding: 20px;
}
.about-us {
  background: #ef4056;
  color: white;
  margin: 10px 0;
}
.description {
  background: #7677cc;
  color: white;
  margin: 10px 0;
}
.lead {
  padding: 5px;
  text-align: ltr;
}
.card {
  border-radius: 0%;
  border: 0;
  padding: 10px;
  margin: 3px;
  color: black;
  height: 400px;
}
.card img{
  border-radius: 0;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0,0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19);
  /* background: rgb(243, 243, 243); */
  
}
.row {
  padding: 5px;
}
.line{
  visibility: hidden;
}
.card:hover .line{
  visibility: visible;
  height: 1px;
    width: 12%;
    border: 1px solid rgb(255, 0, 0);
    background: rgb(255, 0, 0);
}
a, a:hover, a:focus, a:active {
     text-decoration: none;
     color: inherit;
 }

.join-us{
background: #f6f6f6;
}
</style>
