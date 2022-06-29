<template>
  <div class="container">
    <div class="row">
      <Service
          v-for="(service, index) of services"
          :key="`service-index-${index}`"
          :img="service.src"
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
  data() {
    return {
       services: [
        {
          src: '../services/pharmachy.jpg',
          title: "Pharmachy"
        },
        {
          src: '../services/bank.jpg',
          title: "Bank"
        },
        {
          src: '../services/post.jpg',
          title: "Post"
        },
        {
          src: '../services/hospital.jpg',
          title: "Hospital"
        },
        {
          src: '../services/garage.jpg',
          title: "garage"
        },
       ],
      
  //   async asyncData({ $axios }) {
  //     const { data } = await $axios.get('/api/page-info/about')
  //     const title = data.title
  //     const image = data.image
  //     const description = data.description
  //     return {
  //       title,
  //       description,
  //       image,
  //     }
  //   },
}
  }
}
</script>
