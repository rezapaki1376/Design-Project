<template>
<!-- Nature template that linked inside the About us page  -->
<!-- Nature template starts from here -->
  <div>
    
    <div class="main_index">
      
      <div class="container top_section">
        <h1>Rome Nature</h1>
        <div class="row image-box">
          <!-- defining the pictures in the begining of the page  -->
          <div class="col-lg-6">
            <img src="@/assets/img/nature/nature1.jpg" alt="Rome nature" />
          </div>
          <div class="col-lg-6">
            <img src="@/assets/img/nature/nature3.jpg" alt="Rome nature" />
          </div>
        </div>
        <div class="row">
           <p>
              The Geography of Ancient Rome: The seven hills and the Tiber River defined Ancient Rome.
              Viminal, Quirrinal, Palatine, Esquiline, Capitaline, Caelian, and Aventine are the names of the seven hills.
              From the Apennine Mountains to the Tyrrhenian Sea, the Tiber River runs. It is about 250 miles long.
              Rome was built on seven hills that are separated by seven rivers. These rivers are the Tiber, Anio, Agro,
              Velino, Trebbia, Sangro, and Arno. The city of Rome had many suburbs and villages. Nowadays, you can visit
              many sites all over Italy that were important places in Ancient Rome's life. For example, you can go to the
              ruins of Ancient Rome's greatest temple, the Temple of Jupiter (Jupiter Tonans). Or you can see where Julius
              Caesar was stabbed to death at the Senate House. During the Renaissance, Europe began to discover the world
              and its cultures. In 1556, Pope Maffeus IV Farnese published a book called "Geographical Dictionary" which
              included a map showing all the known countries at that time. This map is now in the British Museum. 
              In 1797, Napoleon invaded Italy and started to build roads, bridges, and hospitals while trying to convince
              the people that he was making their country more efficient and powerful.
            </p>

            <h3> What is the physical geography of Rome, Italy?</h3> 
            <p>
              
              The Tiber River and the seven hills upon which Rome is constructed are the city's most famous physical features.
              Aventine Hill, Caelian Hill, Capitoline Hill, Esquiline Hill, Palatine Hill, Quirinal Hill, and Viminal Hill are
              among them. They form a natural barrier between the central business district and the rest of the city.
              The Tiber forms a natural boundary between the metropolitan area of Rome and that of Fiumicino on the other
              side of the river. It is an important waterway for inland navigation but also has a reputation for causing floods
              and severe weather. The river's name comes from the Latin word "tigris" which means "thunderbolt".
        
        
            </p>
            </div>
        
      </div>
    </div>

  </div>
  <!-- Nature template finishes here -->
</template>

<script>

export default {
  name: 'NaturePage',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid:"description",
          name: 'description',
          content: 'Rome nature',
        },
      ],
    }
  },
}
</script>
<style scoped>
.main_index {
  background: #292d33;
  color: white;
  padding: 5% 0;
}
img {
  width: 100%;
  height: 100%;
  
  
}
.image-box >div{
  margin: 10px 0;
}
h1 {
  font-size: 70px;
  color: #cad2c5;
}
h3{
  color: #cad2c5;
}
p {
  font-size: 20px;
  margin: 30px 0;
  text-align: justify;
}

</style>