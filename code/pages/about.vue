<template>
 <div>
    <div class="row about-us">
      <div class="jumbotron col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h1>Find Your <br> Rome</h1>
        
      </div>
      <div class="jumbotron col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <p class="lead col-lg-8 col-md-10 col-sm-12 col-xs-12">
          While it is considered one of the world's fashion and design capitals, as well as a financial hub,
           Rome is also a city of culture and thought. While always looking towards the future,
            this Lazio capital lovingly preserves its prominent history, boasting spectacular museums and some
             of the most monumental churches in Italy. 
        </p>
        
      </div>
    </div>

    <div class="container description">
      <div class="row">
        <div class="jumbotron col-lg-6">
        <h1>Our Mission</h1>
        <p class="lead">
          The Internet’s far-reaching access has moved more people to travel than ever before. Beautiful pictures of unknown places incite a desire to travel. The internet also makes traveling much easier and less stressful.
           People can discover where to go and what to do there.
            They can book flights, hotels, rental cars, and more.The internet provides access to every tidbit
             of information about a foreign destination. We are here to provide all of these facilities for you. Just select your favorit
             itineraries and point of interesteds and leave every thing to us.
        </p>
      </div>
      
        <div class="jumbotron col-lg-6">
        <img class="IMG_styles" src="AU1.png" alt="" />
      </div>

      
      </div>
      
    <!-- </div> -->

    <!-- <div class="container description"> -->
      <div class="row">
        <div class="jumbotron col-lg-6">
        <img class="IMG_styles" src="aboutus1.jpg" alt="" />
      </div>

        <div class="jumbotron col-lg-6">
        <h1>What we do?</h1>
        <p class="lead">
          From the beginning, travel businesses have used imagery in flyers, brochures, and postcards.
          Images are an effective way to stimulate the desire to travel. People can explore destinations virtually,
          through high-definition pictures, 360° views, and videos.A tourism website also needs to attract attention
          and foment trust. If a user trusts your website they will be more likely to apply the recommendations and
          make a purchase. A clean design will help you accomplish this.Tourism websites employ different design trends
           to display content in an organized way.
        </p>
      </div>
      </div>
      
    <!-- </div> -->


    <!-- <div class="container description"> -->
      <div class="row">
        <div class="jumbotron col-lg-6">
        <h1>Our history</h1>
        <p class="lead">
          This travel site is the official tourism guide to the city Rome in Italy.
          This website uses stunning images to grab attention. It maintains a good balance between
          images and text. The prime focus is on the views and activities available. We suggest you all events that held in 
          Rome and interested. As well as this you can finde many interested places to visit.
          Visitors can book reservations on the home page which allows them to act as soon as possible.
        </p>
      </div>
      
        <div class="jumbotron col-lg-6">
        <img class="IMG_styles" src="aboutus3.jpg" alt="" />
      </div>

      
      </div>

      <div class="row">
        <div class="jumbotron col-lg-6">
        <img class="IMG_styles" src="history.jpg" alt="" />
      </div>
        <div class="jumbotron col-lg-6">
        <h1>Rome history</h1>
        <p class="lead">
          Rome was once the centre of a powerful Roman state. You can travel back in time thanks to numerous
          monuments of these olden days. There’s a single package that includes tickets for the Roman Colosseum,
          the Forum and the Palatine Hill. The package is an excellent choice for travellers because you don’t have to queue.
          The Roman Forum was once the centre of everyday life, and when the Romans wanted some fun, they went to the Colosseum,
          which is one of the major Roman attractions. The Palatine Hill is the main Roman hill and is the origin of the Roman State.
          
        </p>
        <nuxt-link to="#">
        <div class="btn">Read more</div>
      </nuxt-link>
      </div>
      </div>

      <div class="row">
        <div class="jumbotron col-lg-6">
        <h1>Rome nature</h1>
        <p class="lead">
          Rome is with its famous seven hills and numerous villa parks, Rome is one of the greenest cities in all of Europe. During any passeggiata in the Eternal City, you’re bound to see stunning umbrella pines, find shady under palm trees and admire cascading ivy on terracotta buildings. Rome is a wonderful mix of nature, culture, history and beauty: be sure to check out the most beautiful parks and gardens in the city.
          
        </p>
        <nuxt-link to="#">
        <div class="btn">Read more</div>
      </nuxt-link>
      </div>
      <div class="jumbotron col-lg-6">
        <img class="IMG_styles" src="nature.jpg" alt="" />
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
            <!-- <h4 class="card-title">Our top news</h4> -->
            <p class="card-text">
             Look at our top news in Rome.
            </p>
            <h4 class="blog">
            <nuxt-link to="#">
              Join to our blog.
            </nuxt-link>
            </h4>
          </div>
        </div>
        
      </div>
       
<NewsCard
v-for="(news, index) of newslist"
:key="`news-index-${index}`"
:img="news.src"
:title="news.title"
:description="news.description"
:date="news.date"
/>
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
        
        <i class="bi bi-people"></i>
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
          <i class="bi bi-person-plus"></i>
          <h1>43,000+</h1>
          <p>
            customers from
          </p>
            <h1>20+</h1>
          <p>
            countries
          </p>
      </div>
      <div class="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
          <i class="bi bi-calendar4-event"></i>
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
      <div class="col-lg-6">
        
      </div>
        
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
  data() {
    return {
      newslist:[
        {
          src : "news1.png",
          title: "Rome PRIDE 2022",
          description: "Pride Rome 2022 gets underway across the city with lots of events and initiatives, leading up to the street parade on July 2nd with the grand finale.",
          date :" 30 Jul 2022 "
        },
        {
          src : "news2.jpg",
          title: "Summer festivals",
          description: "Rome will continue with its celebrations, which take place as usual in the Circus Maximus, but minus the crowds.",
          date :" 18 Sep 2022 "
        },
        {
          src : "news3.jpg",
          title: "jogging  time",
          description: "We love a half marathon. Whether you're an old hand or new to racing, it's a challenging, yet completely attainable goal for most, and can bring great structure to your training year.",
          date :" 21 Aug 2022 "
        },
        {
          src : "news4.jpg",
          title: "Summer offers",
          description: "Are you interested to travel Rome in summer? Just follow us. We planned more than 30 events and itineraries for summer.",
          date :" 18 jun 2022 "
        },
        {
          src : "news5.jpg",
          title: "Top 5 star hotels",
          description: "Our company has agreement with top 5 star hotels for your accomodation and enjoy from your holidays and summer",
          date :" 8 Oct 2022 "
        },
        
      ],
    }
  },
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
.btn{
  background: #293241;
  color: white;
  height: 45px;
  
  
}
.btn:hover{
  cursor: pointer;
  background: #364958;
  box-shadow: 0px 10px 15px rgba(120, 120, 120, 0.7);
  
  transform: translateY(-7px);
}
p{
  text-align: justify;
}
.blog{
  color: #0081a7;
}
.community{
  background: #33475b;
  color: white;
  text-align: center;
  padding: 0 0 25px 0;
}
.community p{
  text-align: center;
}
i{
  font-size: 30px;
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
