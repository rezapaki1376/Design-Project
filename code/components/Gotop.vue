<template>
  <a href="#">
    <div> 
      <img src="/gotop.png" alt="">
      
    </div>
  </a>
</template>

<style scoped>
div{
  text-align: center;
  position: fixed;
  bottom: 20px;
  right: 30px;
  
  background: rgb(244, 244, 244);
  
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
div:hover{
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0,0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19);
   background: rgb(225, 225, 225);
}
div img{
  display: block;
  width: 30px;
  margin: 25% auto;
  /* border-ra */
}
</style>

 <script>
// export default {
//   name: 'CardComponent',
//   props: {
//     name: {
//       type: String,
//       required: true,
//     },
//     img: {
//       type: String,
//       required: true,
//     },
//     id: {
//       type: Number,
//       required: true,
//     },
//     breed: {
//       type: String,
//       required: true,
//     },
//   },
//   methods: {
//     goToDetails() {
//       this.$router.push(`/eventdetail/${this.id}`)
//     },
//   },
// }
</script>
