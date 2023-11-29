import type { Prices } from "@/data/priceData";
import { usePricesStore } from "@/stores/prices";
import { getDataForBarchart, getDataForLabels, getDataForLinechart } from "@/utils/chartFunctions";
import { mockAPIData } from "@/utils/mockFunctions";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

describe("Chart functions", () => {
  const mockedAPIData = mockAPIData();
  const priceArray: number[] = [];

  mockedAPIData.Prices.forEach((value) => {
    const element = value as Prices;
    priceArray.push(element.price);
  });

  beforeEach(() => {
    setActivePinia(createPinia());
    const priceStore = usePricesStore();

    priceStore.setPrices(priceArray);
    priceStore.setAverage(mockedAPIData.average);
  });

  it("get data for barchart", () => {
    // Arrange
    const barChartData = getDataForBarchart();

    // Assert
    expect(barChartData).toEqual(priceArray);
  });

  it("get data for linechart", () => {
    // Arrange
    const lineChartData = getDataForLinechart();

    // Act
    const average = lineChartData[0];

    // Assert
    expect(average).toBe(mockedAPIData.average);
  });

  it("get data for labels", () => {
    // Arrange
    const labelData = getDataForLabels();

    // Act
    const labelAmount = labelData.length;

    // Assert
    expect(labelAmount).toBe(mockedAPIData.Prices.length);
    expect(labelData[labelAmount - 1]).toBe(`${mockedAPIData.Prices.length}:00`);
  });
});
