<template >
    <div class="hero">
        <h2 class="heroName">{{ serie.title }}</h2>
        <img :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`" :alt="serie.title">
        <a :href="serie.urls[0].url" target="_blank">Ver detalles</a>
    </div>
</template>


<script>
export default {
    props: {
        serie: {
            title: String,
            thumbnail: String,
            year: String,
            type: String,
            stories : [],

        }
    }
}
</script>


<style>
.hero {
  align-items: center;
  background: #A9788B;
  background: #A9788B;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  padding: 50px;
  width: 350px;
  box-shadow: 0 4px 4px white;
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
  height: 80%;
  width: 80%;
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

    
</style>