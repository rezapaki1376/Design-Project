<template>
<!-- service page starts from here  -->
  <div class="container">
    <h1>All possible services</h1>
    <p> If you faced a problem or need a service, don't worry, we provided you a list of different services.</p>
    <div class="row">
      <!-- passing data to the service component  -->
      <Service
        v-for="(service, index) of services"
        :id="service.id"
        :key="`service-index-${index}`"
        :img="service.imageUrl"
        :title="service.title"
      />
    </div>
  </div>
  <!-- service page finishes here  -->
</template>

<script>
import Service from '~/components/Service.vue'
export default {
  // calling the service component here
  name: 'ServiceTypes',
  components: {
    Service,
  },
  // fetching data from service table here
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/services')
    // console.log(data)
    return {
      services: data,
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid:"description",
          name: 'description',
          content: 'Rome possibilities, services',
        },
      ],
    }
  },
}
</script>
