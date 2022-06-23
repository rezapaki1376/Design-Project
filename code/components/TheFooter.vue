<template>
  <footer class="container-fluid footer text-center">
  <div class="row">
    <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
      <h3>main features</h3>
      <ul>
  <li><nuxt-link to="/" class="nav-link">
            Home
          </nuxt-link>
  </li>
  <li><nuxt-link to="/list" class="nav-link">
            Evens
          </nuxt-link>
  </li>
  <li><nuxt-link to="/POI_list" class="nav-link">
            Point of interesteds
          </nuxt-link>
  </li>
  <li><nuxt-link to="/Itineraries_list" class="nav-link">
            Itineraries
          </nuxt-link>
  </li>
  <li><nuxt-link to="/Service_list" class="nav-link">
            Services
          </nuxt-link>
  </li>
  
</ul>
    </div>
    <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
      <h3>download our application</h3>
      <button type="button" class="btn">Android <img src="/Android.png" alt=""></button>
      <button type="button" class="btn">IOS <img src="/IOS.png" alt=""></button>
    </div>
    <div class="col-xlg-3 col-lg-3 col-md-6 col-sm-12">
      <h3>Recieve our news</h3>
      <p> Wanna be aware about our new updates. Just enter your Emale.</p>
      <div class="form-group">
      
      <input id="pwd" type="email"  class="form-control" placeholder="Enter your email" name="pwd" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      title="write correct email">
      <button type="button" class="btn btn-dark">Submit</button>
    </div>
    </div>
    <div class="col-lg-3">
      
    </div>
  </div>
</footer>
</template>

<style scoped>
.footer {
  background-color: #2f2f2f;
  color: #ffffff;
  text-align: left;
}
.row{
  text-align: left;
}
.row >div{
  padding: 10px 10px;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
}
.nav-link{
  color: white;
}
.btn{
  background: white;
  width: 150px;
  border-radius: 0;
  color: black;
  display: block;
  margin: 10px 0;
}
.btn:hover{
  background: rgb(225, 225, 225);
}
#pwd{
  display: inline;
  width: 250px;
}
.btn-dark{
  margin: 0 0;
  width: 75px;
  border-radius: 3px;
  display: inline;
}
.btn>img{
  width: 35px;
}
/* .logo {
  color: white;
  font-size: 32px;
} */
</style>

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
// </script>
