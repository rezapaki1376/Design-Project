<template>
<!-- creating template for partners and fouders part in About us page -->
<!-- template support starts from here -->
 <div class="col-xlg-2 col-lg-2 col-md-3 col-sm-4 col-xs-4">
         <nuxt-link :to="link" :alt="alt"> 
          <img :src='img' :alt="alt">
          
         </nuxt-link>
        </div>
<!-- template support finishes here -->
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
  // defining the property 
    img: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    
  },
  // methods: {
  //   goToDetails() {
  //     this.$router.push(`/eventdetail/${this.id}`)
  //   },
  // },
}
</script>
<style scoped>
img{
  width: 160px;
  margin: 5px 0;
}
</style>

