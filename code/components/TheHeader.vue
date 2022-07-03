<template>
<!-- website header starts from here  -->
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <!--  our website main navigations included here -->
    <nuxt-link to="/" class="nav-link link px-3 py-0" alt="link to main page">
    <!-- defining the logo -->
      <img src="../assets/img/logo/logo2_r.jpg" width="70" height="70" alt="website logo" />
    </nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarToggler" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li key="`0`" class="nav-item">
          <nuxt-link
            to="/"
            class="nav-link-custom nav-link"
            prefetch
            style="color: black"
            alt="Home"
          >
            Home
          </nuxt-link>
        </li>
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex + 1}`"
          class="nav-item"
        >
          <nuxt-link
            :to="navItem.path"
            class="nav-link-custom nav-link"
            prefetch
            style="color: black"
            :alt="navItem.name"
          >
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!--  link to login page for admins -->
    <nuxt-link
      to="/login"
      class="nav-link-custom nav-link"
      prefetch
      style="color: black"
      alt="Login page"
    >
      <i
        class="bi bi-box-arrow-in-right"
        style="font-size: 1.3rem; color: black"
      />
      Login
    </nuxt-link>
  </nav>
  <!-- website header finishes here  -->
</template>

<script>
export default {
  name: 'TheHeader',
  // here we are defining the navbar links statically 
  data() {
    return {
      currentTab: 0,
      headerList: [
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: 'Points of Interest',
          path: '/points_of_interest',
        },
        {
          name: 'Itineraries',
          path: '/itineraries',
        },
        {
          name: 'Services',
          path: '/services',
        },
      ],
    }
  },
}
</script>


<style scoped>
/* styles for header part */
.logo {
  color: white;
  font-size: 32px;
}
.nuxt-link-exact-active {
  color: #0d6efd !important;
}
.header {
  background: white;
}
.link {
  color: black;
}

.nav-link-custom {
  color: rgb(53, 53, 53);
  font-size: 1.1rem !important;
  font-weight: normal;
}
.nav-link:hover {
  color: #0d6efd !important;
}
</style>
