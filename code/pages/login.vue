<template>
  <!-- Login page for administrator -->
  <!-- this page is not mandatory part but we considered to show in this way admins could login -->
  <!-- Login template starts from here  -->
  <div class="login">
    <div class="row justify-content-center">
      <div class="form col-lg-3 col-md-4 col-sm-7 col-xs-10">
        <div class="form-header">
          <h1 class="display-4 lh-1">Login for Admin</h1>
        </div>
        <form @submit="onSubmit">
          <div class="form-group">
            <input
              id="exampleInputEmail1"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              id="exampleInputPassword1"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn">SIGN IN</button>
          <div class="form-group form-check">
            <input
              id="exampleCheck1"
              type="checkbox"
              class="form-check-input"
              checked
            />
            <label
              class="form-check-label transparent-input"
              for="exampleCheck1"
              >Remember Me</label
            >
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

<script>
export default {
  name: 'LoginPage',
  components: {},

  head() {
    return {
      title: this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Login page',
        },
      ],
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (!this.name) {
        alert(
          'You would have logged in but this is merely a dummy to show the intentions. Enjoy the website!!!'
        )
        return null
      }
    },
  },
}
</script>
<style scoped>
.text-md-right {
  text-align: right;
  display: inline;
  float: right;
}
.btn {
  background: #0d6efd;
  color: white;
  width: 100%;
  border-radius: 15px;
  height: 50px;
}

.form-control {
  border-radius: 15px;
  border: 1px solid rgb(174, 174, 174);
  height: 50px;
  color: black;
}
.form-check-label {
  color: #0d6efd;
}
.form-group {
  margin: 20px 0;
}
.form-check-input {
  height: 20px;
  width: 20px;
  background-color: #0d6efd;
  border: none;
}
::placeholder {
  font-size: 17px;
  color: black;
  opacity: 1;
}
.text-muted {
  color: black !important;
}
.form-header {
  text-align: center;
  margin: 30px 0;
}
.form-header > * {
  margin: 25px 0;
}
.row {
  padding: 0;
  margin: 0;
}
/*  here we are defining the background image */
.login {
  height: 100vh;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  backdrop-filter: blur(5px);
}
.blur {
  background: rgba(240, 240, 240, 0.295);
  backdrop-filter: blur(1px);
  height: 100vh;
}
</style>


