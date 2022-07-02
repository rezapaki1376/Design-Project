<template>
<!-- Login page for administrator -->
<!-- this page is not mandatory part but we considered to show in this way admins could login -->
<!-- Login template starts from here  -->
<div class="login ">
  <div class="blur row justify-content-center">
<div class="form col-lg-3 col-md-4 col-sm-7 col-xs-10">
  <div class="form-header">
  <h1> Login</h1>
  <h4>Have an account?</h4>
  </div>
<form>
  <div class="form-group">
    
    <input id="exampleInputEmail1" type="email" class="form-control transparent-input"  aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    
    <input id="exampleInputPassword1" type="password" class="form-control transparent-input"  placeholder="Password">
  </div>
  
  <button type="submit" class="btn">SIGN IN</button>
  <div class="form-group form-check">
    <input id="exampleCheck1" type="checkbox" class="form-check-input" checked>
    <label class="form-check-label transparent-input" for="exampleCheck1">Remember Me</label>
    <div class="w-50 text-md-right">
<a href="#" style="color: #fff">Forgot Password</a>
</div>
  </div>
</form>


</div>
</div>
</div>
<!-- Login template finishes here  -->
</template>

<style scoped>
.text-md-right{
  text-align: right;
  display: inline;
  float: right;
}
.btn{
  background:#fbceb5;
  color:black;
  width: 100%;
  border-radius: 25px;
  height: 50px;
}
input.transparent-input{
  background-color:rgba(0, 0, 0, 0.15) !important;
       
}
input.transparent-input:hover{
  background-color:rgba(0, 0, 0, 0.0) !important;
       
  }
.form-control{
  border-radius: 25px;
  border: 1px solid rgb(174, 174, 174);
  height: 50px;
  
}
.form-check-label{
  color:#fbceb5;
}
.form-group{
  margin: 20px 0 ;
}
.form-check-input{
  height: 20px;
  width: 20px;
  background-color: #fbceb5;
  border: none;
}
::placeholder { 
  font-size: 17px;
  color: rgb(255, 255, 255);
  opacity: 1; 
}
.text-muted{
  color: black !important;
}
.form-header{
  text-align:center;
  margin: 30px 0;
}
.form-header >*{
  margin: 25px 0;
}
.row{
  padding: 0;
  margin: 0;
  
}
/*  here we are defining the background image */
.login{
  height:100vh;
  width: 100%;
  background-image: url("./static/login4.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  backdrop-filter: blur(5px);
}
.blur{
  background: rgba(240, 240, 240, 0.295); 
  backdrop-filter: blur(1px); 
  height: 100vh;

}
</style>


