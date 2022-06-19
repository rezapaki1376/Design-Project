<template>
 <div>
    <div class="row col-lg-12 about-us">
      <div class="jumbotron col-lg-6 ">
        <h1>Get in touch</h1>
      <p>
        Want to get in touch? We'd love to hear from you. Here's how you can reach us...

      </p>
      </div>
      <div class="jumbotron col-lg-6">
        <img class="CU_image" src="CU2.jpg" alt="" />
      </div>
    </div>

  <div class="row" style="">
    <div class="col-xlg-1 col-lg-1 col-md-0 col-sm-0"></div>
    <div class="col-xlg-5 col-lg-5 col-md-12 col-sm-12">
          
          <div class="card">
          <img
            class="card-img-top"
            src="phone.svg"
            alt="Card image"
            height="60px"
          />
          <div class="card-body">
            <h4 class="card-title">Call us</h4>
            <p class="card-text">
              Are you faced problem? Just pick up the phone to chat with a member of our support team.
            </p>
            <p class="phone col-lg-12">
              +2143321444
              
              </p>
              <p class="phone col-lg-12">
              +2143321444
              
              </p>
              <p class="phone col-lg-12">
              Email: Find.your.rome@mail.com
              
              </p>
          </div>
        </div>
        
      </div>

      <div class="col-xlg-5 col-lg-5 col-md-12 col-sm-12">
          
          <div class="card">
          <img
            class="card-img-top"
            src="chat.svg"
            alt="Card image"
            height="60px"
          />
          <div class="card-body">
            <h4 class="card-title">Contact Customer Support</h4>
            <p class="card-text">
              Sometimes you need a little help from your friends. Or our support team. Don’t worry… we’re here for you.
            </p>
            <div class="row">
            <form class="form-inline" action="/action_page.php">
            <div class="row">
            <div class="col-xlg-6 col-lg-6">
              <div class="form-group">
      <label for="email">Name:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter name"  name="email">
    </div>
            </div>
    <div class="col-xlg-6 col-lg-6">
    <div class="form-group">
      <label for="pwd">Email:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter email" name="pwd">
    </div>
    </div>
    </div>
    <div class="row">
      <div class="form-group">
    <label for="comment">Comment:</label>
  <textarea class="form-control" rows="5" id="comment" placeholder="Comment"></textarea>
</div>
    </div>
    
    <button type="button" class="btn btn-dark">Submit</button>
    
  </form>
  </div>
          </div>
        </div>
        
      </div>
      <div class="col-xlg-1 col-lg-1 col-md-0 col-sm-0"></div>
  </div>
    

   <div class="row address">
    <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
      <h2>Portsmouth, NH (U.S. Office)</h2>
      <h4>Address</h4>
      <p>1 Harbour Pl, Suite 175 <br>
        Portsmouth, <br>
        NH 03801 United States

      </p>
      <h4>Phone</h4>
      <p>1231244</p>
    </div>
    <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
 <img class="IMG_styles" src="CU3.jpg" alt="" />
    </div>
    <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
 <img class="IMG_styles" src="CU4.jpg" alt="" />
    </div>
    <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
<h2>Portsmouth, NH (U.S. Office)</h2>
      <h4>Address</h4>
      <p>1 Harbour Pl, Suite 175 <br>
        Portsmouth, <br>
        NH 03801 United States

      </p>
      <h4>Phone</h4>
      <p>1231244</p>
    </div>

   </div>

    

   
  </div>

  
</template>

<script>
// import NewsCard from '~/components/NewsCard.vue'
// export default {
//   name: 'AboutPage',
//   components: {
//     NewsCard,
//   },
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
// }
</script>


<style scoped>
form{
  text-align: left;
  padding: 10px 0 0 0;
}
div{
  margin: 0;
}
form button{
  margin: 10px auto;
  display: block;
  width: 100px;
}
.CU_image {
  height: 400px;
  width: 100%;
  border-radius: 0% 0 0 70%;
}
.IMG_styles {
  height: 400px;
  width: 100%;
  /* margin: 10px; */
}
.jumbotron {
  margin: 0;
  padding: 0px;
}
.about-us {
  background: #ffffff;
  color: rgb(0, 0, 0);
  margin: 0;
}
.about-us > div:first-child{
  padding: 8%;
}
.description {
  background: #e1e1e1;
  color: rgb(0, 0, 0);
  margin: 0;
}
.lead {
  padding: 5px;
  text-align: ltr;
}


.join-us{
background: #f6f6f6;
}


.card {
  border-radius: 0%;
  border: 0;
  padding: 10px;
  margin: 3px;
  color: black;
  height: 550px;
}
.card img{
  border-radius: 0;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0,0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19);
  /* background: rgb(243, 243, 243); */
  
}
/* .row {
  padding: 5px;
} */
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
 .card-body{
   text-align: center;
 }
 .card-text{
   /* padding: 5% 0 0 0; */
 }
 .phone{
   font-size: 20px;
 }
 .address{
   background: #f5f8fa;
   color: #33485c;
   padding: 5%;
 }
 .address div{
   margin-top: 5%;
 }
</style>
