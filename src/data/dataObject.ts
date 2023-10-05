import { useDatesStore } from "@/stores/dates";

export class dataObject {
  private prices:Map<number, number>;
  private average:number;

  private fromDate:string;
  private tillDate:string;

  private intervalType:number;

  constructor(prices:Map<number, number>, average:number) {
    const dates = useDatesStore();
    
    this.prices = prices;
    this.average = average;
    this.fromDate = dates.getStartDate();
    this.tillDate = dates.getEndDate();

    this.intervalType  = 4;
  }
}

