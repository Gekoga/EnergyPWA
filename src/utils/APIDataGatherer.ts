import type { APIData, Prices } from "@/data/priceData";
import { useDatesStore } from "@/stores/dates";
import { usePricesStore } from "@/stores/prices";
import { mockAPIData } from "./mockFunctions";

export class APIDataGatherer {
  datesStore = useDatesStore();
  pricesStore = usePricesStore();

  public async getAPIResponse() {
    try {
      const url: string = `https://api.energyzero.nl/v1/energyprices?fromDate=${this.datesStore.getStartDate}&tillDate=${this.datesStore.getEndDate}&interval=4&usageType=1&inclBtw=true`;
      console.log(url);
      const apiResponse = await fetch(url);
      const apiData = (await apiResponse.json()) as APIData;

      this.createDataObject(apiData);
    } catch (error) {
      console.error(error);
      throw new Error("Error API Response");
    }
  }

  public async getMockAPIResponse() {
    try {
      await new Promise((r) => setTimeout(r, 1000));
      const mockedData = mockAPIData();

      this.createDataObject(mockedData);
    } catch (error) {
      console.error(error);
      throw new Error("Error Mock API Response");
    }
  }

  private createDataObject(data: APIData) {
    if (data.Prices === undefined) throw new Error("No prices");

    if (data.average === undefined) throw new Error("No average");

    const priceArray: number[] = [];

    data.Prices.forEach((value) => {
      const element = value as Prices;
      priceArray.push(element.price);
    });

    this.pricesStore.setPrices(priceArray);
    this.pricesStore.setAverage(data.average);
  }
}
