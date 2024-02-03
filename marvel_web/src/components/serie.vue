<template>
    <div :class="['hero', serie.type.toLowerCase()]">
      <h2 class="heroName">
        {{ serie.title.toUpperCase() }}
        <span v-if="serie.type"> - {{ serie.type.toUpperCase() }}</span>
        <span v-else> - ONE-SHOT</span>
      </h2>
      <img :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`" :alt="serie.title">
      <div class="details">
        <div class="column">
          <h3>{{ serie.stories.available }} Stories</h3>
        </div>
        <div class="column">
          <h3>{{ serie.comics.available }} Comics</h3>
        </div>
      </div>
      <router-link :to="{name: 'details', params: { id: serie.id }  }" @click="guardarInfoSerie(serie)">
        <a  target="_blank">Ver detalles</a>
      </router-link>
      <button @click="toggleFavorite">&#10084;</button>
    </div>
</template>
  
  

  


<script>
import { SerieItem } from '../model/serieItem';

export default {
    props: {
        serie: {
            type: SerieItem,
            required: true
        }
    },

    methods: {
    navigateToDetails() {
      const serieId = this.serie.id;
      this.$router.push({ name: 'details', params: { id: serieId } });
    },
    guardarInfoSerie(serie) {
      const serieInfo = { id: serie.id, title: serie.title, thumbnail: serie.thumbnail };
      let historial = JSON.parse(localStorage.getItem('historial')) || [];

      const existeEnHistorial = historial.some(item => item.id === serie.id);

      if (!existeEnHistorial) {
        historial.unshift(serieInfo);

        localStorage.setItem('historial', JSON.stringify(historial));
      }
    }

}
}


</script>
  


<style>
.hero {
  align-items: center;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: center;
  padding: 50px;
  width: 350px;
  box-shadow: 0 4px 4px white;
}

.year {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  padding: 5px;
}

.details {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.column {
  flex: 1;
}
.hero .heroName {
  color: white;
  font-size: 1.3em;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
}

.hero img {
  border-radius: 5px;
  height: 70%;
  width: 70%;
}

.hero a {
  background-color: black;
  border-radius: 2px;
  color: white;
  font-size: 1.2em;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  text-decoration: none;
}

.hero a:hover {
  background-color: rgb(83, 0, 139);
}

.hero a, button {
  background-color: black;
  color: white;
  padding: 5px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  display: block;
  width: 100%;
  text-align: center;
}

button:hover {
    background-color: rgb(83, 0, 139);
}

h3 {
  color: white;
  padding: 5px;
}

/* Estilos específicos para cada tipo de serie */
.hero.collection{
  background-color: #A9788B;
}

.hero.limited {
    background-color: #78646b;
}

.hero.ongoing {
background-color: #fac5d9;
}

.hero{
background-color: #3f2f34;
}




</style>