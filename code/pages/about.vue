<template>
 <div>
    <div class="row about-us">
      <div class="jumbotron col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h1>Find Your <br> Rome</h1>
        
      </div>
      <div class="jumbotron col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <p class="lead col-lg-8 col-md-10 col-sm-12 col-xs-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. 
        </p>
      </div>
    </div>

    <div class="container description">
      <div class="row">
        <div class="jumbotron col-lg-6">
        <h1>Our Mission</h1>
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
        <img class="IMG_styles" src="AU1.png" alt="" />
      </div>

      
      </div>
      
    </div>

    <div class="container description">
      <div class="row">
        <div class="jumbotron col-lg-6">
        <img class="IMG_styles" src="aboutus1.jpg" alt="" />
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
      
    </div>


    <div class="container description">
      <div class="row">
        <div class="jumbotron col-lg-6">
        <h1>Our history</h1>
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
        <img class="IMG_styles" src="aboutus3.jpg" alt="" />
      </div>

      
      </div>
      
    </div>


    <div class="row" style="height:40px;background:black"> </div>
    <div class="news">
    

    <div class="container" style="padding-top:25px">
      <div class="row">

      
      <div class="col-xlg-3 col-lg-3 col-md-7 col-sm-12">
          
          <div class="card first_news">
          <h1> Our Top News</h1>
          <div class="card-body">
            <h4 class="card-title">Our top news</h4>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <p class="date co-lg-12">
              18 jun 2022
              <div class="line"></div>
              </p>
          </div>
        </div>
        
      </div>
<NewsCard/>
<NewsCard/>
<NewsCard/>
<NewsCard/>
<NewsCard/>
<NewsCard/>
<NewsCard/>
</div>
      
    </div>
</div>

<div class="community">
    
  <div class="container" style="padding-top:25px">
    <h1>Our Community</h1>
  </div>
    <div class="container" style="padding-top:25px">
      <div class="row">

      
      <div class="col-xlg-4 col-lg-4 col-md-4 col-sm-12 border-sm-right">
        <img src="HUG-icon.svg" alt="">
          <h1>400+</h1>
          <p>
            employees in
          </p>
            <h1>3</h1>
          <p>
            offices
          </p>
      </div>
      <div class="col-xlg-4 col-lg-4 col-md-4 col-sm-12 border-sm-right">
          <img src="Smilyface-icon.svg" alt="">
          <h1>43,000+</h1>
          <p>
            customers from
          </p>
            <h1>40+</h1>
          <p>
            countries
          </p>
      </div>
      <div class="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
          <img src="Globe-icon.svg" alt="">
          <h1>300+</h1>
          <p>
            Events in
          </p>
            <h1>40+</h1>
          <p>
            Point of interests
          </p>
      </div>
      

</div>
      
    </div>
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
.community{
  background: #33475b;
  color: white;
  text-align: center;
}
.community>.container:first-child{
  
}
.first_news{
/* display: inline-block; */
background: #eaf0f6 !important;
}
.card {
  border-radius: 0%;
  border: 0;
  padding: 10px;
  /* margin: 3px; */
  color: black;
  height: auto;
}

a, a:hover, a:focus, a:active {
     text-decoration: none;
     color: inherit;
 }
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
  /* background: #ef4056; */
  color: rgb(0, 0, 0);
  /* margin: 10px 0; */
  
}
.about-us h1{
  color: #333333;
  text-align: right;
  display: block;
  font-size: 90px;

}
.description {
  /* background: #7677cc; */
  color: rgb(0, 0, 0);
  /* margin: 10px 0; */
}
.description h1{
  text-align: center;
}
.about-us .lead{
  padding: 5% 0;
}
.lead {
  padding: 5px;
  text-align: ltr;
}

.news{
  background: #eaf0f6;
  padding: 10px 0;
}
.join-us{
background: #f6f6f6;
}
.row{
  margin: 0;
}
@media (min-width: 768px) {
  .border-sm-right {
    border-right: 1px solid #e3e7eb !important;
    /* border-bottom: 1px solid #e3e7eb !important; */
  }
}

@media (max-width: 768px) {
  .border-sm-right {
    /* border-right: 1px solid #e3e7eb !important; */
    margin: 10px 0;
    border-bottom: 1px solid #e3e7eb !important;
  }
}

</style>
