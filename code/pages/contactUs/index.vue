/* eslint-disable vue/no-unused-components */
<template>
<!-- contact us component for descriobing how users can contact for support -->
<!-- contact us starts from here -->
  <div>
    <div class="row col-lg-12 about-us">
      <div class="jumbotron col-lg-6">
        <h1>Get in touch</h1>
        <div class="line"></div>
        <p>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us...
        </p>
      </div>
      <div class="jumbotron col-lg-6">
        <img class="CU_image" src="CU2.jpg" alt="" />
      </div>
    </div>

    <div class="container" style="">
      <div class="row">
        <!-- here we are defining the main office phone and email address -->
        <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
          <div class="card contact_info">
            <i class="bi bi-chat-dots-fill"></i>
            <div class="card-body">
              <h4 class="card-title">Contact us directly</h4>
              <p class="card-text">
                Are you faced problem? Just pick up the phone to chat with a
                member of our support team.
              </p>
              <p class="phone col-lg-12">
                <i class="bi bi-telephone-plus-fill"></i
                ><a href="tel:+21-325-4658"> Phone: +21-325-4658</a>
              </p>
              <p class="phone col-lg-12">
                <i class="bi bi-telephone-plus-fill"></i
                ><a href="tel:+21-325-4659"> Phone: +21-325-4658</a>
              </p>
              <p class="phone col-lg-12">
                <i class="bi bi-envelope-open-fill"></i
                ><a href="mailto:Find.your.rome@mail.com"> Email: Find.your.rome@mail.com</a
                >
              </p>
            </div>
          </div>
        </div>
        <!-- defining the form for users that can contact with support directly and send their qquestion and problems -->
        <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
          <div class="card">
            <i class="bi bi-headset"></i>
            <div class="card-body">
              <h4 class="card-title">Contact Customer Support</h4>
              <p class="card-text">
                Sometimes you need a little help from your friends. Or our
                support team. Don’t worry… we’re here for you.
              </p>
              <div class="row">
                <form class="form-inline" action="/action_page.php">
                  <div class="row">
                    <div class="col-xlg-6 col-lg-6">
                      <div class="form-group">
                        <label for="email">Name:</label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          placeholder="Enter name"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="col-xlg-6 col-lg-6">
                      <div class="form-group">
                        <label for="pwd">Email:</label>
                        <input
                          id="pwd"
                          type="email"
                          class="form-control"
                          placeholder="Enter email"
                          name="pwd"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group">
                      <label for="comment">Comment:</label>
                      <textarea
                        id="comment"
                        class="form-control"
                        rows="5"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                  </div>

                  <button type="button" class="btn btn-dark">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!-- defining offices information with address and picture -->
    <div class="row address">
      <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
        <h2>Downtown Atlanta, GA</h2>
        <h4>Address</h4>
        <p>
          Viale dell'Arte 25, <br />
          Rome, <br />
          Lazio, 00144
        </p>
        <h4>Phone</h4>
        <p class="phone col-lg-12">
          <i class="bi bi-telephone-plus-fill"></i
          ><a href="tel:+21-325-4658"> Phone: +21-325-4555</a>
        </p>
      </div>
      <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
        <img class="IMG_styles" src="CU3.jpg" alt="" />
      </div>
      <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
        <img class="IMG_styles" src="CU4.jpg" alt="" />
      </div>
      <div class="col-xlg-6 col-lg-6 col-md-12 col-sm-12">
        <h2>City Life office</h2>
        <h4>Address</h4>
        <p>
          Piazza di San Silvestro 8 <br />
          2nd floor, <br />
          Rome, Lazio, 00187
        </p>
        <h4>Phone</h4>
        <p class="phone col-lg-12">
          <i class="bi bi-telephone-plus-fill"></i
          ><a href="tel:+21-325-4658"> Phone: +21-328-4877</a>
        </p>
      </div>
    </div>
    
    
  </div>
  <!-- contact us finishes here -->
</template>

<script>


export default {
  name: 'Contactus',
  components: {
    
  },
  data() {
    return {
      
    }
  },
 
}
</script>


<style scoped>
/* styles for contact us page starts from here */
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
i {
  font-size: 50px;
  text-align: center;
}
.contact_info .card-body *:not(h4) {
  margin-top: 50px;
  margin-bottom: 50px;
}
.card-body i,
.address i {
  font-size: 20px;
  margin: 0 10px 0 0;
}

.contact_info {
  margin: 20px 0;
}

form {
  text-align: left;
  padding: 10px 0 0 0;
}

form button {
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
.about-us > div:first-child {
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

.join-us {
  background: #f6f6f6;
}

.card {
  border-radius: 0%;
  border: 1px solid #e2e2e2;
  border: 0;
  padding: 10px;
  margin: 3px;
  color: black;
  height: 550px;
}
.card img {
  border-radius: 0;
}

.row {
  margin: 0;
}
.line {
  height: 2px;
  width: 20%;
  border: 1px solid rgb(255, 0, 0);
  background: rgb(255, 0, 0);
}
a:hover {
  color: #0582ca;
}
a,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
.card-body {
  text-align: center;
}
.phone {
  font-size: 20px;
}
.address {
  background: #f5f8fa;
  color: #33485c;
  padding: 5%;
}
.address div {
  margin-top: 5%;
}
</style>
