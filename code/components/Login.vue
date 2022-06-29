<template>
<div>
<div class="container">
  <div class="login" data-bs-toggle="modal" data-bs-target="#myModal">
    Login
  </div>
</div>

  <div id="myModal" class="modal fade" >
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Login</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
		  <div class="row">
		  <div class="col-lg-6 col-md-6 col-sm-6"><form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input id="exampleInputEmail1" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input id="exampleInputPassword1" type="password" class="form-control"  placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input id="exampleCheck1" type="checkbox" class="form-check-input" >
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-success">Login</button>
</form>
	

</div>
		  <div class="col-lg-6 col-md-6 col-sm-6">
			  <img src="login.jpg" alt="">
		  </div>
		  
      </div>
	</div>
      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

</div>
</template>

<style scoped>
.container{
  margin: 0;
  padding: 0;
}
img{
	height: 450px;
	width: 100%;
}
.login{
  color: white;
 
}
.login:hover{
  cursor: pointer;
  color: rgb(237, 237, 237);
}
input{
	border-radius: 25px;
	
}
.form-group{
	margin: 10px 0 0 0;
}
.modal-header{
	background: #0ead69;
}
button{
	margin: 20px 0;
}

@media (min-width: 1200px) {
  .modal-dialog {
   max-width: 80%;
  }
  
}
@media (max-width: 992px) {
  .modal-dialog {
   max-width: 90%;
  }
  
}

@media (min-width: 992px) {
  .modal-dialog {
   max-width: 65%;
  }
  
}
@media (max-width: 768px) {
  .modal-dialog {
   max-width: 97%;
  }
}
@media (max-width: 576px) {
  img{
	  display: none;
  }
}



/* div{
  text-align: center;
  position: fixed;
  bottom: 20px;
  right: 30px;
  
  background: rgb(244, 244, 244);
  
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
div:hover{
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0,0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19);
   background: rgb(225, 225, 225);
}
div img{
  display: block;
  width: 30px;
  margin: 25% auto;
  
} */
</style>


