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
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Evens',
          path: '/list',
        },
        {
          name: 'Point Of Interesteds',
          path: '/POI_list',
        },
        {
          name: 'Itineraries',
          path: '/Itineraries_list',
        },
        {
          name: 'Services',
          path: '/Service_list',
        },
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'ConcatctUs',
          path: '/contactus',
        },
      ],
    }
  },
}
</script>

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
.header {
  background: rgb(67, 162, 206);
}
.logo {
  color: white;
  font-size: 32px;
}
.link {
  color: black;
}
</style>
