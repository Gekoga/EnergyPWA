import type { APIData, Prices } from "@/data/priceData";

export function mockAPIData(): APIData {
  const pricesArray: Prices[] = [];
  let sumTotalOfPrices = 0;

  for (let index = 0; index < 24; index++) {
    const price = Math.random();

    sumTotalOfPrices += price;
    pricesArray.push({ price: price, readingDate: `test ${index}` });
  }

  const apiData: APIData = {
    Prices: pricesArray,
    average: sumTotalOfPrices / 24,
    fromDate: new Date().toString(),
    intervalType: 4,
    tillDate: new Date().toString()
  };

  return apiData;
}