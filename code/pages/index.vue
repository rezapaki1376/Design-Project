<template>
  <div>
    <div class="main_index">
      <div class="container top_section">
        <div class="row">
          <div class="col-lg-6">
            <h1>Find your <br> Rome</h1>
          </div>
          <div class="col-lg-6">
            <p>
              The Internet’s far-reaching access has moved more people to travel
            than ever before. Beautiful pictures of unknown places incite a
            desire to travel. The internet also makes traveling much easier and
            less stressful. People can discover where to go and what to do
            there. They can book flights, hotels, rental cars, and more.The
            internet provides access to every tidbit of information about a
            foreign destination. We are here to provide all of these facilities
            for you. Just select your favorit itineraries and point of
            interesteds and leave every thing to us.
            </p>
          </div>
        </div> 
        <div class="row image-box">
          <div class="col-lg-4">
            <img src="@/assets/img/index1.jpg" alt=" rome image" />
          </div>
          <div class="col-lg-4">
            <img src="@/assets/img/index2.jpg" alt=" rome image" />
          </div>
          <div class="col-lg-4">
            <img src="@/assets/img/index3.jpg" alt=" rome image" />
          </div>
        </div>
      </div>
    </div>

    <div class="news">
      <div class="container" style="padding-top: 25px">
        <div class="row">
          <div class="col-xlg-3 col-lg-3 col-md-7 col-sm-12">
            <div class="card first_news">
              <h1>Our Top News</h1>
              <div class="card-body">
                <!-- <h4 class="card-title">Our top news</h4> -->
                <p class="card-text">Look at our top news in Rome.</p>
                <h4 class="blog">
                  <nuxt-link to="/" alt="link to blog"> Join to our blog. </nuxt-link>
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
  </div>
</template>

<script>
import NewsCard from '~/components/NewsCard.vue'
export default {
  name: 'IndexPage',
  components: {
    NewsCard,
  },
  
  data() {
    return {
      newslist: [
        {
          src: 'news1.jpg',
          title: 'Rome PRIDE  2022',
          description:
            'Pride Rome 2022 gets underway across the city with lots of events and initiatives across the city with lots of events and initiatives across the city with lots of events and initiatives, leading up to the street parade on July 2nd with the grand finale.',
          date: ' 30 Jul 2022 ',
        },
        {
          src: 'news2.jpg',
          title: 'Summer festivals',
          description:
            'Rome will continue with its celebrations, which take place as usual in the Circus Maximus, but minus the crowds.',
          date: ' 18 Sep 2022 ',
        },
        {
          src: 'news3.jpg',
          title: 'jogging  time',
          description:
            "We love a half marathon. Whether you're an old hand or new to racing, it's a challenging, yet completely attainable goal for most, and can bring great structure to your training year.",
          date: ' 21 Aug 2022 ',
        },
        {
          src: 'news4.jpg',
          title: 'Summer offers',
          description:
            'Are you interested to travel Rome in summer? Just follow us. We planned more than 30 events and itineraries for summer.',
          date: ' 18 jun 2022 ',
        },
        {
          src: 'news5.jpg',
          title: 'Top 5 star hotels',
          description:
            'Our company has agreement with top 5 star hotels for your accomodation and enjoy from your holidays and summer',
          date: ' 8 Oct 2022 ',
        },
      ],
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid:"description",
          name: 'description',
          content: 'Home page, Find your Rome, Tourist, ',
        },
      ],
    }
  },
  
}
</script>
<style scoped>
.main_index {
  background: #292d33;
  color: white;
  padding: 5% 0;
}
img {
  width: 100%;
  height: 100%;
  padding: 0 2.5px;
}
img:hover {
  cursor: pointer;
  filter: blur(0.6px);
}
h1 {
  font-size: 70px;
}
p {
  font-size: 20px;
}
.blog {
  color: #0081a7;
}
.card {
  border-radius: 0%;
  border: 0;
  padding: 10px;
  /* margin: 3px; */
  color: black;
  height: auto;
}
.news {
  background: #eaf0f6;
  padding: 10px 0;
}
.first_news {
  /* display: inline-block; */
  background: #eaf0f6 !important;
}
.IMG_styles {
  height: 400px;
  width: 100%;
  /* margin: 10px; */
}
.about-us h1 {
  color: #333333;
  text-align: right;
  display: block;
  font-size: 90px;
}
.description h1 {
  text-align: center;
}
.about-us .lead {
  padding: 5% 0;
}
.lead {
  padding: 5px;
  text-align: ltr;
}
@media (min-width: 1200px) {
  .top_section {
    max-width: 70%;
  }
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>