// En tu archivo counter.ts
import { defineStore } from 'pinia';
import { SerieItem } from '../model/serieItem';

export const useCounter = defineStore('counter', {
  state: () => ({
    favoriteSeries: [] as SerieItem[],
    viewedSeries: [] as number[],
  }),

  actions: {
    toggleFavorite(serie: SerieItem) {
      const index = this.favoriteSeries.findIndex((s) => s.id === serie.id);

      if (index !== -1) {
        this.favoriteSeries.splice(index, 1);
      } else {
        if (this.favoriteSeries.length < 10) {
          this.favoriteSeries.push(serie);
        } else {
          console.warn('Se ha alcanzado el límite máximo de favoritos (10).');
          // Puedes mostrar un mensaje aquí o manejar de alguna otra manera.
        }
      }

      localStorage.setItem('favoriteSeries', JSON.stringify(this.favoriteSeries));
    },
    addViewedSerie(id: number) {
      // Asegurarse de que no está en favoritos antes de agregarlo
      if (
        !this.favoriteSeries.some((s) => s.id === id) &&
        !this.viewedSeries.includes(id)
      ) {
        this.viewedSeries.push(id);
      }
    },
  },
});

