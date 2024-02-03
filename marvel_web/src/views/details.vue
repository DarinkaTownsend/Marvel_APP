<template>
    <header>
        <div class="navbar">
          <div class="dropdown">
          <button class="dropbtn"><img src="@/assets/menu.png" /></button>
          <div class="dropdown-content">
            <router-link to="/history">
            <a class="action_btn"> History </a>
          </router-link>
          </div>
        </div>
  
        </div>
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/marvel_logo.jpg" />
          </router-link>
        </div>

  
    </header>
    <div class= "info"> 
    <div class="detailsD">
      <div class="header">
        <img class="imagen_princ" :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`" :alt="serie.title" />
      </div>
      
      <div class="detailsA">
        <button @click="toggleFavorite" class="corazon">&#10084;</button>
        <h2 class="title">{{ serie.title }}</h2>
        <p class="texto">{{ serie.description }}</p>
        <div class="fechas_div">
          <p class="texto_Fechas">Start Year : {{ serie.startYear }}</p>
          <p class="texto_Fechas">End Year : {{ serie.endYear }}</p>
        </div>
      </div>
    </div>

    <!-- Resumen de historias -->
<div class="stories" v-if="shouldShowStoriesSection">
  <div class="centered-text">
    <h3 class = "separadorh">STORIES</h3>
  </div>

  <div class="cartillas">
    <div v-for="story in stories" :key="story.resourceURI" class="cartilla">
      <h2 class="textoCartillasH">{{ story.title }}</h2>
    </div>
  </div>
</div>


<!-- Resumen de cómics -->
<div class="comics" v-if="shouldShowComicsSection">
  <div class="centered-text">
    <h3 class="separadorC">Cómics</h3>
  </div>

  <div class="cartillas">
    <div v-for="comic in comics" :key="comic.resourceURI" class="cartilla" :href="comic.urls[0].url">
      <h2 class="textoCartillas">{{ comic.title }}</h2>
      <img class="image_comic" :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" :alt="comic.title" />
      <p class="textoCartillas">{{ comic.description }} </p>
    </div>
  </div>
</div>

   
</div>
</template>

  

  
  <script>
  import { base_url2 } from "../api/marvel.ts";
  import { SerieItem } from '../model/serieItem';
  

  export default {
      data() {
          return {
              serie: {
                  id: 0,
                  title: "",
                  description: "",
                  startYear: 0,
                  endYear: 0,
                  thumbnail: {
                      path: "",
                      extension: "",
                  },
              },
              stories: [],
              comics: [],
          };
      },
      computed: {
    shouldShowStoriesSection() {
      return this.stories.length > 2;
    },
    shouldShowComicsSection() {
      return this.comics.length > 4;
    },
  },
      mounted() {
          this.getinfo();
      },
      methods: {
          async getinfo() {
              const serieId = this.$route.params.id;
              try {
                  const url_serie_details = `${base_url2}${serieId}?ts=1&apikey=${process.env.VUE_APP_PUBLIC_KEY}&hash=${process.env.VUE_APP_HASH}`;
                  const url_comics = `${base_url2}${serieId}/comics?ts=1&apikey=${process.env.VUE_APP_PUBLIC_KEY}&hash=${process.env.VUE_APP_HASH}`;
                  const url_stories = `${base_url2}${serieId}/stories?ts=1&apikey=${process.env.VUE_APP_PUBLIC_KEY}&hash=${process.env.VUE_APP_HASH}`;
                  console.log(url_comics);
                  try{
                    const storiesResponse = await this.fetchData(url_stories);
                    this.stories = storiesResponse.data.results;
                  }catch(error){
                      console.error('No cumple con la cantidad minima de Stories', error);
                  }

                  try{
                    const comicsResponse = await this.fetchData(url_comics);
                    this.comics = comicsResponse.data.results;
                  }catch(error){
                      console.error('No cumplen con la cantidad mínima de comics');
                  }


                  

                  const serieDetailsResponse = await this.fetchData(url_serie_details);
                  this.serie.title = serieDetailsResponse.data.results[0].title;
                  this.serie.id = serieDetailsResponse.data.results[0].id;
                  this.serie.description = serieDetailsResponse.data.results[0].description;
                  this.serie.title = serieDetailsResponse.data.results[0].title;
                  this.serie.thumbnail.path = serieDetailsResponse.data.results[0].thumbnail.path;
                  this.serie.thumbnail.extension = serieDetailsResponse.data.results[0].thumbnail.extension;
                  this.serie.startYear = serieDetailsResponse.data.results[0].startYear;
                  this.serie.endYear = serieDetailsResponse.data.results[0].endYear;
                  console.log(this.serie);

              } catch (error) {
                  console.error('Error al obtener detalles:', error);
              }
          },


      async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.code === 200) {
          return data;
        } else {
          throw new Error('Error en la respuesta de la API');
        }
      },
    },
  };
</script>

  


<style>

.imagen_princ{
  width: 60%;
  height: 20%;
  border-radius: 4px;
}
.fechas_div{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.texto_Fechas{
    color: white;
    font-size: 1.3rem;
}
.stories{
    border-radius: 4px;
}
.separadorh{
  color:white;
  font-size: 3rem;
  background-color: rgb(180, 159, 205);

}

.image_comic {
  width: 100%;
  height: 50%;
  border-radius: 4px;
}
.separadorC{
  color:white;
  font-size: 3rem;
  background-color: rgb(85, 8, 180);

}


.centered-text {
  text-align: center;
  margin-bottom: 20px; 
}


.cartillas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px; 

}

.cartilla {
  padding: 5%;
  margin: 5%;
  border-radius: 4px;
  color: white;
}

.comics {
  /* Agrega estilos adicionales según sea necesario */
}

.textoCartillas{
    color: black;

}
.cartillas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px; /* Espacio entre las cartillas */
}

.cartilla {
  background-color: #f0f0f0; /* Fondo de las cartillas */
  padding: 15px;
  border-radius: 8px;
}

.textoCartillasH{
  color: black;
  font-size: 1rem;
  font-weight: bold;
}

.info {
    padding: 20px;
  background-color: black;
}
.detailsD {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items:flex-start;
  padding: 5%;
  grid-column-gap: 20px;     
}

.detailsA {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items:flex-start;
  grid-row-gap: 1px;     
}
.texto{
    color: white;
}
.header img {
  max-width: 100%;
  height: auto;
}

.title {
  margin: 20px 0;
  font-size: 1.5em;
  font-weight: bold;
  color:white;
}

.stories,
.comics {
  margin-top: 20px;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
.navbar {
    padding-top: 2%;
    padding-right: 0%;
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content:right;
    align-items: center;
}

.logo img{
    width: 300px;
}
.logo{
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
}

.navbar .links {
    display: flex;
    gap: 2rem;
}

.navbar .toggle-button {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
}

.action_btn{
    color: white;
    padding: 0.6rem;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    
}

.action_btn:hover{
    scale:1.05;
    color:white;
}

.action-btn:active{
    scale:0.95;
}

li{
    list-style: none;
}

.corazon {
  background-color: #e258b4;
  color: white;
  padding: 5px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  display: block;
  text-align: center;
}

.corazon:hover {
    background-color: #eaadc4;
}

</style>
  