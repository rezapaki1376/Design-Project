<template>
  <footer class="container-fluid footer">
    <div class="row justify-content-around flex-wrap text-center">
      <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
        <h3>Navigation</h3>
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
      <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
        <h3>Legal Notice</h3>
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
        <h3>Connect</h3>
        <ul>
          <li>
            <button type="button" class="btn icon">
              <img src="../assets/img/socialmedia/instagram.png" alt="" />
            </button>
          </li>
          <li>
            <button type="button" class="btn icon">
              <img src="../assets/img/socialmedia/facebook.png" alt="" />
            </button>
          </li>
          <li>
            <button type="button" class="btn icon">
              <img src="../assets/img/socialmedia/pinterest.png" alt="" />
            </button>
          </li>
        </ul>
      </div>
      <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
        <h3>Newsletter</h3>
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
</template>

// <script>
// export default {
//   name: 'TheHeader',
//   data() {
//     return {
//       headerList: [
//         {
//           name: 'Home',
//           path: '/',
//         },
//         {
//           name: 'Evens',
//           path: '/list',
//         },
//         {
//           name: 'Point Of Interesteds',
//           path: '/POI_list',
//         },
//         {
//           name: 'Itineraries',
//           path: '/Itineraries_list',
//         },
//         {
//           name: 'Services',
//           path: '/Service_list',
//         },
//         {
//           name: 'About',
//           path: '/about',
//         },
//         {
//           name: 'ConcatctUs',
//           path: '/contactus',
//         },
//       ],
//     }
//   },
// }
//
</script>
<style scoped>
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
.btn > img {
  width: 35px;
}
/* .logo {
  color: white;
  font-size: 32px;
} */
</style>


