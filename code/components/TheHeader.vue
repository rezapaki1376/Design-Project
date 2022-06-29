<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <nuxt-link to="/" class="nav-link link px-3 py-0">
      <img
        src="../assets/img/logo/colosseum.png"
        width="70"
        height="70"
        alt=""
      />
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
          >
            {{ navItem.name }}
          </nuxt-link>
        </li>
        <nuxt-link
          to="/login"
          class="nav-link-custom nav-link"
          prefetch
          style="color: black"
        >
          <i
            class="bi bi-box-arrow-in-right"
            style="font-size: 1.3rem; color: black"
          />
          Login
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',

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
@media (min-width: 992px) {
  .login {
    color: black;
    text-align: right;
    margin: auto 0;
    position: absolute;
    right: 10px;
  }
}
@media (max-width: 992px) {
  .login {
    color: black;
    text-align: left;
    margin: auto 0;
  }
}
.logo {
  color: white;
  font-size: 32px;
}
.nuxt-link-exact-active {
  color: #00c58e !important;
}
.header {
  background: white;
}
.link {
  color: black;
}

.nav-link-custom {
  color: rgb(53, 53, 53);
  font-size: 19px !important;
  font-weight: normal;
}
.nav-link:hover {
  color: #00c58e !important;
}
</style>
