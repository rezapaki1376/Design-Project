<template>
<!-- service page starts from here  -->
  <div class="container">
    
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
  name: 'Contactus',
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
}
</script>
