<template>
  <div class="page container mt-5">
    <div class="mb-5">
      <h1 class="display-4">Events</h1>
      <p class="lead">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus.
      </p>
    </div>
    <div class="row mb-5 justify-content-center">
      <Service
        v-for="(service, serviceIndex) of services"
        :id="service.id"
        :key="`event-index-${serviceIndex}`"
        :title="service.title"
        :image-url="service.imageUrl"
      />
    </div>
  </div>
</template>

<script >
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
    return {
      // catList: []
    }
  },
  mounted: () => {
    console.log('HI')
  },
}
</script>
