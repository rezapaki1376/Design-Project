<template>
 <div class="col-xlg-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
         <a href=""> 
          <img :src="img" alt="">
         </a>
        </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    img: {
      type: String,
      required: true,
    },
    
  },
  methods: {
    goToDetails() {
      this.$router.push(`/eventdetail/${this.id}`)
    },
  },
}
</script>
<style scoped>
img{
  width: 160px;
}
</style>

