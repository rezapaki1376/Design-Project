<template>
  <div class="container">
    <div class="row">
      <Service
        v-for="(service, index) of services"
        :key="`service-index-${index}`"
        :img="require(`@/assets/img/services/${service.imageUrl}`)"
        :title="service.title"
      />
    </div>
  </div>
</template>

<script>
import Service from './components/Service.vue'
export default {
  name: 'Contactus',
  components: {
    Service,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/services')
    console.log(data)
    return {
      services: data,
    }
  },
  data() {
    return {}
  },
}
</script>
