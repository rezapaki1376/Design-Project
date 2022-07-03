<template>
<!-- after clicking on each services we are comming this section for seeing more services in that specific type with setails -->
<!-- service details starts from here -->
  <div class="container my-5">
    
    <!-- creating group links for going to previous page -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link :to="`/services`" alt="Services" > Services </nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ service.title }}
        </li>
      </ol>
    </nav>
    <!--  details related to each specific service -->
    <h1>{{service.title}}</h1>
    <span>
      Here you can find all posible <span style="text-transform: lowercase;">{{service.title}} </span> services. Just click on see details bottom and transfer to main website.
    </span>
    
    <div class="row">
      <div v-for="(item, index) in service.locations" :key="index" class="col-lg-3 col-md-5 col-10 my-3">
    <div class="card h-100">
      
      <img
        class="card-img-top"
        :src="require(`@/assets/img/services/${service.title}/${item.imageUrl}`)"
        :alt="item.name"
      />
      <div
        class="card-body d-flex flex-column text-center justify-content-between"
      >
        <div>
          <h4 class="card-title">{{ item.name }}</h4>
        </div>
        <div class="mb-3 d-flex flex-column">
          <hr />
          <div class="d-flex justify-content-around">
            <div>
              <i
                class="bi bi-clock"
                style="font-size: 1.2rem; color: black"
              ></i>
              Opening hours: {{ item.openinHours }}
            </div>
          </div>
          <div class="d-flex justify-content-around">
            <div>
              <i class="bi bi-geo-alt"></i>Address:
              {{ item.address }}
          </div>
          </div>
          <!-- again a group link for going back to previous page -->
          <nuxt-link :to="item.url" :alt="item.name">
            <div class="btn btn-primary mt-3">See Details</div>
          </nuxt-link>
        
      </div>
     
    </div>
  </div>

  </div> 
  </div>
  </div>
  <!-- service details finishes here -->
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  // mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/services/' + id)
    console.log(data.title)
    
    return {
      service: data,
    }
  },
  head() {
    return {
      title: this.name,
      // meta: [
      //   {
      //     name: 'asdasd',
      //     content: 'asdasd',
      //   },
      // ],
    }
  },

  methods: {
    backToList() {
      // accessing information in services table
      this.$router.push('/services')
    },
  },
}
</script>
<style scoped>
/* styles related to service details */
.cut-text {
  height: auto;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
p {
  text-align: justify;
}
.card {
  border-radius: 1;
  border: 1;
  padding: 0;
  height: 10;
  color: black;
  
}
.card img {
  border-radius: 1;
  height: 180px;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
}
.row {
  padding: 5px;
}
.line {
  height: 1px;
  width: 12%;
  visibility: hidden;
}
.btn {
  /* background-color: #00c58e !important; */
  border: 0;
}
.card:hover .line {
  visibility: visible;
  height: 1px;
  width: 12%;
  border: 1px solid rgb(255, 0, 0);
  background: rgb(255, 0, 0);
}

</style>
