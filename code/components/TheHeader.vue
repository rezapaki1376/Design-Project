<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <nuxt-link to="/" class="nav-link link"> Art Town </nuxt-link>
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
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link" prefetch>
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <login />
  </nav>
</template>

<script>
import Login from '~/components/Login.vue'
export default {
  name: 'TheHeader',
  components: {
    Login,
  },
  data() {
    return {
      headerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: 'Point of Interests',
          path: '/pointOfInterests',
        },
        {
          name: 'Itineraries',
          path: '/itineraries',
        },
        {
          name: 'Services',
          path: '/services',
        },
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Contact',
          path: '/contact',
        },
      ],
    }
  },
}
</script>


<style scoped>
.logo {
  color: white;
  font-size: 32px;
}
.login {
}
.header {
  background: rgb(67, 162, 206);
}
.link {
  color: black;
}
</style>
