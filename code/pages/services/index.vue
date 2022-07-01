<template>
  <div class="container">
    <div class="row">
      <Service
        v-for="(service, index) of services"
        :id="service.id"
        :key="`service-index-${index}`"
        :img="service.imageUrl"
        :title="service.title"
      />
    </div>
  </div>
</template>

<script>
import Service from '~/components/Service.vue'
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
