<template>
  <div class="page container mt-5">
    <h1 class="display-4">List page</h1>
    <div class="row mt-3"></div>
    <img src="bank.jpg" style="width: 500px; border-radius: 5%" alt="" />
  </div>
</template>

<script>
// import DetailsPage from '~/components/_id.vue'
export default {
  name: 'ListPage',
  components: {
    // DetailsPage,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  // async asyncData({ $axios }) {
  //   // const { data } = await $axios.get('http://localhost:3000/api/cats')
  //   const { data } = await $axios.get('/api/cats')
  //   return {
  //     catList: data,
  //   }
  // },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
