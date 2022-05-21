<template>
  <div class="page container mt-5">
    <h1 class="display-4">List page</h1>
    <div class="row mt-3">
      <card
        v-for="(cat, catIndex) of catList"
        class="col-sm-2 m-2"
        :key="`cat-index-${catIndex}`"
        :id="cat.id"
        :name="cat.name"
        :img="cat.img"
        :breed="cat.breed"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  name: 'ListPage',
  components: {
    Card,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/cats')
    return {
      catList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
