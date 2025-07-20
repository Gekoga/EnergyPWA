import { usePricesStore } from "@/stores/prices";

// TODO: Wanneer er per kwartier gerekend wordt, hier het aanpassen dat het gemiddelde per uur weergegeven wordt, en niet per kwartier. 
// Hiervoor kan er gebruik gemaakt worden van het gemiddelde per uur. 
export function getDataForBarchart(): number[] {
  const priceStore = usePricesStore();
  return priceStore.getPrices;
}

export function getDataForLinechart(): number[] {
  const priceStore = usePricesStore();
  return Array(priceStore.getAmountOfEntries).fill(priceStore.getAverage);
}

export function getDataForLabels(): string[] {
  const priceStore = usePricesStore();

  const labelArray: string[] = [];
  for (let index = 0; index < priceStore.getAmountOfEntries; index++) {
    labelArray.push(`${index}:00-${index + 1}:00`);
  }
  return labelArray;
}
