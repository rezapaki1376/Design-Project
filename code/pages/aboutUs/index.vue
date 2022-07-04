<template>
<!-- About us page starts from here  -->
  <div>
    <!-- start-----defining the first part describing the website  -->
    <div class="row about-us">
      <div class="jumbotron col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h1>
          Lets see Rome <br />
          with us
        </h1>
      </div>
      <div class="jumbotron col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <p class="lead col-lg-8 col-md-10 col-sm-12 col-xs-12">
          While it is considered one of the world's fashion and design capitals,
          as well as a financial hub, Rome is also a city of culture and
          thought. While always looking towards the future, this Lazio capital
          lovingly preserves its prominent history, boasting spectacular museums
          and some of the most monumental churches in Italy.
        </p>
      </div>
    </div>
  <!-- finish-----defining the first part describing the website  -->

  <!-- start-----defining the parts related to history, mission, nature and so on  -->
    <div class="container description">
      <div class="row">
        <div class="jumbotron col-lg-6">
          <h1>Ancient Rome</h1>
          <p class="lead">
            In modern historiography, ancient Rome refers to Roman civilization 
            from the founding of the city of Rome in the 8th century BC to the collapse of 
            the Western Roman Empire in the 5th century AD. It encompasses the Roman Kingdom (753–509 BC), 
            Roman Republic (509–27 BC) and Roman Empire (27 BC–476 AD) until the fall of the western empire. Ancient 
            Rome began as an Italic settlement, traditionally dated to 753 BC, beside the River Tiber in the 
            Italian Peninsula. The settlement grew into the city and polity of Rome, and came to control its neighbours 
            through a combination of treaties and military strength. It eventually dominated the Italian peninsula, 
            and acquired an Empire that took in much of Europe and the lands and peoples surrounding the Mediterranean Sea.
          </p>
        </div>

        <div class="jumbotron col-lg-6">
          <img class="IMG_styles" src="@/assets/img/about-us/AU1.jpg" alt="" />
        </div>
      </div>

      
      <div class="row">
        <div class="jumbotron col-lg-6">
          <img class="IMG_styles" src="@/assets/img/about-us/CU4.jpg" alt="" />
        </div>

        <div class="jumbotron col-lg-6">
          <h1>Rome in Modern World</h1>
          <p class="lead">
            The glorious history of ancient Rome holds a collection of the most fascinating ideas 
            that were once revolutionary and that we still use today. Rome is ingrained in our political, 
            cultural, literary traditions and quite frankly in our everyday life. And although many of the Roman 
            inventions were a case of adaptation and improvement rather than originality, mainly because of 
            the great influence ancient Greece had, yet some inventions remain truly unique to Rome. As you are 
            about to find out, some had a crucial role in shaping the world we know today and some may come as a 
            surprise to have originated so long ago.
          </p>
        </div>
      </div>

      
      <div class="row">
        <div class="jumbotron col-lg-6">
          <h1>Art and Architecture</h1>
          <p class="lead">
            Roman architecture is an interesting example of Greek influence, where they have borrowed certain 
            designs and ideas only to make them better. Such an example is the use of columns which in their 
            case was more decorative and less structural. Their further creations were curved roofs and arches 
            which are considered to be the most important among Roman inventions. Arches revolutionized architecture 
            and therefore made possible foundations for massive constructions such as bridges, aqueducts and amphitheatres. 
            Two of the very important monuments that bear arches are the Colosseum and the Trajan’s Market.
          </p>
        </div>

        <div class="jumbotron col-lg-6">
          <img class="IMG_styles" src="@/assets/img/about-us/AU3.jpg" alt="" />
        </div>
      </div>

      <div class="row">
        <div class="jumbotron col-lg-6">
          <img class="IMG_styles" src="@/assets/img/about-us/history.jpg" alt="" />
        </div>
        <div class="jumbotron col-lg-6">
          <h1>Rome history</h1>
          <p class="lead">
            Rome was once the centre of a powerful Roman state. You can travel
            back in time thanks to numerous monuments of these olden days.
            There’s a single package that includes tickets for the Roman
            Colosseum, the Forum and the Palatine Hill. The package is an
            excellent choice for travellers because you don’t have to queue. The
            Roman Forum was once the centre of everyday life, and when the
            Romans wanted some fun, they went to the Colosseum, which is one of
            the major Roman attractions. The Palatine Hill is the main Roman
            hill and is the origin of the Roman State.
          </p>
         
            <div class="btn"> <nuxt-link to="/history" alt="Rome history">Read more</nuxt-link></div>
          
        </div>
      </div>

      <div class="row">
        <div class="jumbotron col-lg-6">
          <h1>Rome nature</h1>
          <p class="lead">
            Rome is with its famous seven hills and numerous villa parks, Rome
            is one of the greenest cities in all of Europe. During any
            passeggiata in the Eternal City, you’re bound to see stunning
            umbrella pines, find shady under palm trees and admire cascading ivy
            on terracotta buildings. Rome is a wonderful mix of nature, culture,
            history and beauty: be sure to check out the most beautiful parks
            and gardens in the city.
          </p>
          
            <div class="btn"><nuxt-link to="/nature" alt="Rome nature">Read more</nuxt-link></div>
          
        </div>
        <div class="jumbotron col-lg-6">
          <img class="IMG_styles" src="@/assets/img/about-us/nature.jpg" alt="" />
        </div>
      </div>
    </div>
<!-- finish-----defining the parts related to history, mission, nature and so on  -->

<!-- start-----defining the parts related to partners  -->
    <div class="row" style="height: 40px; background: black"></div>
    <div class="container partners">
      <div class="row">
        <h2>Partners</h2>
        <Support
          v-for="(partner, index) of partners"
          :key="`partner-index-${index}`"
          :img="require(`@/assets/img/partners_images/${partner.src}`)"
          :link="partner.link"
          :alt="partner.alt"
        />
      </div>
      <div style="height: 2px; color: black; background: black"></div>
      <div class="row">
        <h2>Supporting and Financing Partners</h2>
        <Support
          v-for="(founder, index) of founders"
          :key="`partner-index-${index}`"
          :img="require(`@/assets/img/partners_images/${founder.src}`)"
          :link="founder.link"
          :alt="founder.alt"
        />
      </div>
    </div>
  <!-- finish-----defining the parts related to partners  -->

  <!-- start-----defining the our Community section  -->
    <div class="community">
      <div class="container" style="padding-top: 25px">
        <h1>Our Community</h1>
      </div>
      <div class="container" style="padding-top: 25px">
        <div class="row">
          <div class="col-xlg-4 col-lg-4 col-md-4 col-sm-12 border-sm-right">
            <i class="bi bi-people"></i>
            <p class="big_p">400+</p>
            <p>employees in</p>
            <p class="big_p">3</p>
            <p>offices</p>
          </div>
          <div class="col-xlg-4 col-lg-4 col-md-4 col-sm-12 border-sm-right">
            <i class="bi bi-person-plus"></i>
            <p class="big_p">43,000+</p>
            <p>customers from</p>
            <p class="big_p">20+</p>
            <p>countries</p>
          </div>
          <div class="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
            <i class="bi bi-calendar4-event"></i>
            <p class="big_p">300+</p>
            <p>Events in</p>
            <p class="big_p">40+</p>
            <p>Point of interests</p>
          </div>
        </div>
      </div>
    </div>
    <!-- start-----defining the our Community section  -->
  </div>
  <!-- About us page finishes here  -->
</template>

<script>
// calling the support components fro creating the partner part
import Support from './components/Support.vue'
export default {
  name: 'AboutPage',
  components: {
    Support,
  },
  data() {
    return {
// defining static data for partners and founders
      partners: [
        {
          src: 'Assolombarda.png',
          link:"https://www.assolombarda.it/english/",
          alt:"assolombarda"
        },
        {
          src: 'Logo_A2A.png',
          link:"https://www.a2a.eu/it/home",
          alt:"a2a"
        },
        {
          src: 'Logo_Accenture.png',
          link:"https://www.accenture.com/it-it",
          alt:"accenture"
        },
        {
          src: 'Logo_ATM.png',
          link:"https://www.assolombarda.it/english/",
          alt:"ATM"
        },
        {
          src: 'Logo_Borsa_Italiana.png',
          link:"https://www.borsaitaliana.it/homepage/homepage.htm",
          alt:"borsaitaliana"
        },
        {
          src: 'Logo_Confcommercio.png',
          link:"https://www.confcommerciomilano.it/it/index.html",
          alt:"confcommerciomilano"
        },
        
      ],
      founders: [
        {
          src: 'Logo_Fiera_Milano Congressi.png',
          link:"https://www.fieramilanocongressi.it/Home_it.html",
          alt:"fieramilanocongressi"
        },
        {
          src: 'Logo_Login_Lendlease.png',
          link:"https://www.lendlease.com/it/",
          alt:"lendlease"
        },
        {
          src: 'Logo_Nexi.png',
          link:"https://www.nexi.it/",
          alt:"nexi"
        },

        {
          src: 'Logo_TIM.png',
          link:"https://www.tim.it/",
          alt:"tim"
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
          content: "About us, Find your Rome",
        },
      ],
    }
  },
 
}
</script>


<style scoped>
/* styles related to elements */
.btn {
  background: #293241;
  color: white;
  height: 45px;
}
.btn:hover {
  cursor: pointer;
  background: #364958;
  box-shadow: 0px 10px 15px rgba(120, 120, 120, 0.7);

  transform: translateY(-7px);
}
p {
  text-align: justify;
}
.big_p{
  font-size: 40px;
}
.community {
  background: #33475b;
  color: white;
  text-align: center;
  padding: 0 0 25px 0;
}
.community p {
  text-align: center;
}
i {
  font-size: 30px;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
.IMG_styles {
  height: 400px;
  width: 100%;
}
.jumbotron {
  margin: 0;
  padding: 20px;
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

.join-us {
  background: #f6f6f6;
}
.row {
  margin: 0;
}
/* styles related to responsive elements */
@media (min-width: 768px) {
  .border-sm-right {
    border-right: 1px solid #e3e7eb !important;
    
  }
}

@media (max-width: 768px) {
  .border-sm-right {
    
    margin: 10px 0;
    border-bottom: 1px solid #e3e7eb !important;
  }
}
</style>
