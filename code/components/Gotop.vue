<template>
  
    <div onclick='window.scrollTo({top: 0, behavior: "smooth"});'>
      <span><i class="bi bi-arrow-up"></i></span>
    </div>
  
</template>

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

 <style scoped>
div {
  text-align: center;
  position: fixed;
  bottom: 20px;
  right: 30px;
  background: rgb(244, 244, 244);
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
div:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: rgb(225, 225, 225);
  cursor: pointer;
}
span{
  margin: 10% auto;
  display: block;
}
i{
  
  color: rgb(78, 78, 78);
  font-size: 30px;
  
}

</style>
