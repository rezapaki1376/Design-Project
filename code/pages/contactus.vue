<template>
  <custom-page :title="title" :image="image" :description="description" />
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'ContactUs',
  components: {
    CustomPage,
  },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/contactus')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
}
</script>
