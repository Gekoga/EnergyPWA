import { defineStore } from "pinia";

export const usePricesStore = defineStore("prices", {
  state: () => {
    return { prices: [] as number[], average: 0 };
  },
  getters: {
    getAverage(): number {
      return this.average;
    },
    getPrices(): number[] {
      return this.prices;
    },
    getAmountOfEntries(): number {
      return this.prices.length;
    }
  },
  actions: {
    setAverage(average: number) {
      this.average = average;
    },
    setPrices(prices: number[]) {
      this.prices = prices;
    }
  }
});
