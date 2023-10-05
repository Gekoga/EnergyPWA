import { defineStore } from 'pinia';

export const usePricesStore = defineStore('prices', {
  state: () => {
    return { prices: new Map<number, number>(), average: 0 };
  },
  actions: {
    setAverage(average:number) {
      this.average = average;
    },
    setPrices(prices: Map<number, number>) {
      this.prices = prices;
    },
    getAverage(): number {
      return this.average;
    },
    getPrices(): Map<number, number> {
      return this.prices;
    }
  }
});
