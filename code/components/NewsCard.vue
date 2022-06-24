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
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <p class="date co-lg-12">
              18 jun 2022
              <div class="line"></div>
              </p>
          </div>
        </div>
        </a>
      </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    breed: {
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

