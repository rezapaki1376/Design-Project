<template>
<div>
<div class="container">
  <div class="login" data-bs-toggle="modal" data-bs-target="#myModal">
    Login
  </div>
</div>

  <div id="myModal" class="modal fade" >
  <div class="col-lg-7 col-md-12 modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div class="text-center my-5">
						<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100">
					</div>
					<div class="card shadow-lg">
						<div class="card-body p-5">
							<h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
							<form method="POST" class="needs-validation" novalidate="" autocomplete="off">
								<div class="mb-3">
									<label class="mb-2 text-muted" for="email">E-Mail Address</label>
									<input id="email" type="email" class="form-control" name="email" value="" required="" autofocus="">
									<div class="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div class="mb-3">
									<div class="mb-2 w-100">
										<label class="text-muted" for="password">Password</label>
										<a href="forgot.html" class="float-end">
											Forgot Password?
										</a>
									</div>
									<input id="password" type="password" class="form-control" name="password" required="">
								    <div class="invalid-feedback">
								    	Password is required
							    	</div>
								</div>

								<div class="d-flex align-items-center">
									<div class="form-check">
										<input type="checkbox" name="remember" id="remember" class="form-check-input">
										<label for="remember" class="form-check-label">Remember Me</label>
									</div>
									<button type="submit" class="btn btn-primary ms-auto">
										Login
									</button>
								</div>
							</form>
						</div>
						<div class="card-footer py-3 border-0">
							<div class="text-center">
								Don't have an account? <a href="register.html" class="text-dark">Create One</a>
							</div>
						</div>
					</div>
					<div class="text-center mt-5 text-muted">
						Copyright © 2017-2021 — Your Company 
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
.login{
  color: white;
  /* text-align: right; */
}
.login:hover{
  cursor: pointer;
  color: rgb(237, 237, 237);
}
.modal-dialog{
  
}


@media (min-width: 768px) {
  .modal-dialog {
   max-width: 70%;
  }
}

@media (max-width: 768px) {
  .modal-dialog {
   max-width: 100%;
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


