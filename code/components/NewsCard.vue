<template>
  <div class="col-xlg-3 col-lg-3 col-md-7 col-sm-12 newscard">
          <a href="#">
          <div class="card">
          <img
            class="card-img-top"
            :src="img"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text cut-text">
              {{ description }}
            </p>
            <hr>
            <p class="date co-lg-12">
               {{ date }}
             
              </p>
               <div class="line"></div>
          </div>
        </div>
        </a>
      </div>
</template>

<script>
export default {
  name: 'NewsComponent',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
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
.cut-text { 
  /* width: 160px;  */
  height: 78px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
p{
  text-align: justify;
}
.newscard{
  display: inline-block;
}
.card {
  border-radius: 0%;
  border: 0;
  padding: 10px;
  margin: 3px;
  color: black;
  height: auto;
}
.card img{
  border-radius: 0;
  height: 180px;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0,0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19);
  /* background: rgb(243, 243, 243); */
  
}
.row {
  padding: 5px;
}
.line{
  height: 1px;
  width: 12%;
  visibility: hidden;
}
.card:hover .line{
  visibility: visible;
    height: 1px;
    width: 12%;
    border: 1px solid rgb(255, 0, 0);
    background: rgb(255, 0, 0);
}
a, a:hover, a:focus, a:active {
     text-decoration: none;
     color: inherit;
 }
</style>

