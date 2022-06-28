<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
<<<<<<< Updated upstream
    <nuxt-link to="/" class="nav-link link"> Art Town </nuxt-link>
=======
    <nuxt-link to="/" class="nav-link link">
            Art Town
    </nuxt-link>
>>>>>>> Stashed changes
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
    <login/>
  </nav>
</template>

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
<script>
import Login from '~/components/Login.vue'
export default {
  name: 'TheHeader',
  components: {
    Login
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

<<<<<<< Updated upstream
<style scoped>
.header {
  background: rgb(67, 162, 206);
}
.logo {
  color: white;
  font-size: 32px;
}
</style>
<style scoped>
=======

<style scoped>
.login{

}
>>>>>>> Stashed changes
.header {
  background: rgb(67, 162, 206);
}
.logo {
  color: white;
  font-size: 32px;
}
<<<<<<< Updated upstream
.link {
=======
.link{
>>>>>>> Stashed changes
  color: black;
}
</style>
