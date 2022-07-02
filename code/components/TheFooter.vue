<template>
<!-- Footer starts from here  -->
  <footer class="container-fluid footer">
    <div class="row justify-content-around flex-wrap text-center">
      <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
        <!-- 1: defining the navigation to access main website parts -->
        <p class="big_p">Navigation</p>
        <ul>
          <li><nuxt-link to="/events" class="nav-link"> Events</nuxt-link></li>
          <li>
            <nuxt-link to="/points_of_interest" class="nav-link">
              Point of interests
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/itineraries" class="nav-link">
              Itineraries
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services" class="nav-link"> Services </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about_us" class="nav-link"> About us </nuxt-link>
          </li>
        </ul>
      </div>
      <!-- 2: defining Legal Notice -->
      <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
        <p class="big_p">Legal Notice</p>
        <ul>
          <li>
            <nuxt-link to="/" class="nav-link"> Private Policy </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/list" class="nav-link"> Disclosure </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/list" class="nav-link"> Terms of use</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
        <!-- 3: social media part for following us  -->
        <p class="big_p">Connect</p>
        <ul>
          <li>
            <div class="">
              <a href="www.instagram.com" target="_blank" alt="instagram">
              
              <img src="../assets/img/socialmedia/instagram.png" alt="instagram" />
              </a>
            </div>
          </li>
          <li>
            <div class="">
              <a href="www.facebook.com" target="_blank" alt="facebook">
              <img src="../assets/img/socialmedia/facebook.png" alt="facebook" />
              </a>
            </div>
          </li>
          <li>
            <div  class="">
              <a href="www.pinterest.com" target="_blank" alt="pinterest">
              <img src="../assets/img/socialmedia/pinterest.png" alt="pinterest" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
        <!-- 4: user can write own email for us to being inform about our new updates and news -->
        <p class="big_p">Newsletter</p>
        <p>
          Subscribe to our monthly newsletter to never miss news on Rome again.
        </p>
        <div class="form-group">
          <input
            id="pwd"
            type="email"
            class="form-control"
            placeholder="Enter your email"
            name="pwd"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="write correct email"
          />
          <button type="button" class="btn btn-dark">Submit</button>
        </div>
      </div>
    </div>
    <!-- 5: Copyright license and link to contact us -->
    <div class="d-flex justify-content-center py-2">
      <div class="px-2 vl">Copyright © 2022 Find-your-Rome</div>
      <nuxt-link to="/sitemap" class="px-2 nav-link py-0 vl">
        Sitemap</nuxt-link
      >
      <nuxt-link to="/contact_us" class="px-2 nav-link py-0">
        Contact us</nuxt-link
      >
    </div>
  </footer>
  <!-- Footer finishes here  -->
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      
    }
  },
}

</script>
<style scoped>
.big_p{
      font-size: 22px;
}
.footer {
  background-color: rgb(245, 245, 245);
  color: #000000;
}
.row {
  text-align: center;
}
.row > div {
  padding: 10px 10px;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}
.vl {
  border-right: 1px solid black;
}
.nav-link {
  color: #000000;
}
.btn {
  /* background: #293241; */
  color: white;
  margin: 5px;
  padding: 3px;
  width: 35px;
  height: 35px;
}
.btn:hover {
  cursor: pointer;
  background: #364958;
  /* box-shadow: 0px 10px 15px rgba(120, 120, 120, 0.7); */
}
.icon:hover {
  cursor: pointer;
  background: #dedede;
  box-shadow: 0px;
}
#pwd {
  display: inline;
  width: 250px;
}
.btn-dark {
  margin: 0 0;
  width: 75px;
  border-radius: 3px;
  display: inline;
}
img {
  width: 45px;
}
nuxt-link{

}
</style>


