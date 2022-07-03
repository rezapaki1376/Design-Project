<template>
<!-- History of Rome page -->
<!-- History template starts from here -->
<div>
<div class="main_index">
      <div class="container top_section">
        <div class="row">
          <!-- 1: defining 2 rows with image and text
               2: then creating a row with the rest of the text
          -->
          <div class="col-lg-6">
            <h1>Rome, The ancient city</h1>
            <p>
              The history of Rome includes the history of the city of Rome as well as
              the civilisation of ancient Rome. Roman history has been influential on
              the modern world, especially in the history of the Catholic Church, and
              Roman law has influenced many modern legal systems.
            </p>
          </div>
          <div class="col-lg-6">
            
            <img src="../assets/img/history/history_1.jpg" alt="" />
          
          </div>
        </div>
        <div class="row image-box">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../assets/img/history/history_2.jpg" alt="" />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p>
              The origin of the city's name is thought to be that of the reputed founder and first ruler, the legendary Romulus.
            It is said that Romulus and his twin brother Remus, apparent sons of the god Mars and descendants of the Trojan hero
            Aeneas, were suckled by a she-wolf after being abandoned, then decided to build a city.
            The brothers argued, Romulus killed Remus, and then named the city Rome after himself.
            After founding and naming Rome (as the story goes), he permitted men of all classes to
            come to Rome as citizens, including slaves and freemen without distinction.
            To provide his citizens with wives, Romulus invited the neighboring tribes to a festival in Rome where
            he abducted many of their young women (known as The Rape of the Sabine Women). 
            </p>
          </div>
          <div class="col-lg-12">
            <p>
               After the ensuing war with
            the Sabines, Romulus shared the kingship with Sabine King Titus Tatius. Romulus selected 100 of the most
            noble men to form the Roman senate as an advisory council to the king.
              These men he called patres, and their
            descendants became the patricians. He created three centuries of equites: Ramnes (meaning Romans), Tities 
            (after the Sabine king), and Luceres (Etruscans). He also divided the general populace into thirty curiae,
            named after thirty of the Sabine women who had intervened to end the war between Romulus and Tatius. The 
            curiae formed the voting units in the Comitia Curiata.
            </p>
          </div>
        </div>
      </div>
    </div>

</div>
<!-- History template finishes here -->
</template>
<script>

export default {
  name: 'HistoryPage',
  components: {
    
  },
  
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid:"description",
          name: 'description',
          content: 'Rome history',
        },
      ],
    }
  },
}
</script>
<style scoped>

.main_index {
  background: #eaf0f6;
  color: black;
  padding: 5% 0;
}
img {
  width: 100%;
  height: 100%;
  padding: 0 2.5px;
  border-radius: 25px;
}
h1 {
  font-size: 70px;
}
p {
  font-size: 20px;
  margin: 5px 0;
  text-align: justify;
}
.image-box img{
  height: 500px;
  border-radius: 20px 20px 5px 5px ;
}
.image-box{
  margin: 20px 0;
}
/* extra style for responsive part */
@media (min-width: 1200px) {
  .container{
  max-width: 75%;
  
}
.image-box img{
  
  width: 400px;
}
  
}
</style>


