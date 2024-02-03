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
    <div class="contenido">
            <h2 class="separadorHH">HISTORY</h2>
            <div class="cartillas">
            <div v-for="item in historial" :key="item.id" class="cartilla">
                <h3 class="textoHH">{{ item.title }}</h3>
                <img class="image_comicH" :src="item.thumbnail.path + '.' + item.thumbnail.extension" :alt="item.title" />
                <button @click="eliminarDelHistorial(item.id)">Eliminar</button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            historial: [],
        };
    },
    mounted() {
        this.historial = JSON.parse(localStorage.getItem('historial')) || [];
        
    },
    methods: {
    eliminarDelHistorial(id) {
      const nuevoHistorial = this.historial.filter(item => item.id !== id);
      localStorage.setItem('historial', JSON.stringify(nuevoHistorial));
      this.historial = nuevoHistorial;
    },
  },
};
</script>

<style>

.centered-text {
  text-align: center;
  margin-bottom: 20px; 
}

.textoHH{
    color: black;
}

.separadorHH{
    padding-top: 2%;
    padding-bottom: 2%;
    color:white;
  font-size: 3rem;
  background-color: rgb(180, 159, 205);
  text-align: center;

  
}
.image_comicH {
  width: 100%;
  height: 70%;
  border-radius: 4px;
}

.contenido .cartillas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px; 

}
.contenido{
    background: black;
    align-content: center;
}
.contenido .cartilla {
  padding: 5%;
  margin: 5%;
  border-radius: 4px;
  color: black;

}

.navbar {
    padding-top: 2%;
    padding-right: 0%;
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: right;
    align-items: center;
}

.logo img {
    width: 300px;
}

.logo {
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

.action_btn {
    color: white;
    padding: 0.6rem;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

}

.action_btn:hover {
    scale: 1.05;
    color: white;
}

.action-btn:active {
    scale: 0.95;
}

li {
    list-style: none;
}
</style>


