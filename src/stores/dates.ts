import { extractDateString } from "@/utils/utilityFunctions";
import { defineStore } from "pinia";

const regex: RegExp = /:+/g;

export const useDatesStore = defineStore("dates", {
  state: () => {
    return { startDate: new Date(), endDate: new Date() };
  },
  getters: {
    getStartDate(): string {
      const dateString = this.startDate.toISOString().replace(regex, "%3A");
      return dateString;
    },
    getEndDate(): string {
      const dateString = this.endDate.toISOString().replace(regex, "%3A");
      return dateString;
    },
    getDate(): string {
      const dateString = extractDateString(this.startDate);
      return dateString;
    }
  },
  actions: {
    setStartDate(year: number, month: number, day: number) {
      this.startDate = new Date(year, month, day, 22);
    },
    setEndDate(year: number, month: number, day: number) {
      this.endDate = new Date(year, month, day, 21, 59, 59, 999);
    }
  }
});
