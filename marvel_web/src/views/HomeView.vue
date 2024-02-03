<template>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
  
    <body>
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
        <div class="flecha">
          <img src="@/assets/flecha.png" />
        </div>
  
      </header>
      
      <div v-if="loading" class="loading-overlay">
      <i class="fa fa-spinner fa-spin"></i>
      <p>Cargando...</p>
      </div>

      <div class="heroesDiv">
        <div class="heroesWrapper">
        <li v-for="serie in series" :key="serie.id">
            <serie :serie="serie" />
        </li>
        </div>
      </div>
      

    </body>
</template>

<style>
@import "@/assets/css/navbar.css";
@import "@/assets/css/serieStyle.css";
</style>

<script>
import { base_url} from "../api/marvel.ts";
import Serie from '@/components/serie.vue';

export default {
  data() {
    return {
      series: [],
      page: 1,
      loading: false,
    };
  },
  mounted() {
    this.getSeries();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    async getSeries() {
      this.loading = true;

      const url = `${base_url}ts=1&apikey=${process.env.VUE_APP_PUBLIC_KEY}&hash=${process.env.VUE_APP_HASH}&offset=${(this.page - 1) * 20}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.code === 200) {
          const newSeries = data.data.results;
          this.series = [...this.series, ...newSeries];
        } else {
          console.error('Error en la respuesta de la API');
        }
      } catch (error) {
        console.error('Error en la solicitud fetch', error);
      } finally {
        this.loading = false;
      }
    },
    handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 10 && !this.loading) {
        this.page++;
        this.getSeries();
      }
    },
  },
  components: {
    Serie,
  },
};
</script>
