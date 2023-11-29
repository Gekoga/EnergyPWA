import { extractLocalDateString } from "@/utils/utilityFunctions";
import { describe, it, expect } from "vitest";

describe("utility functions", () => {
  it("Extract local date string", () => {
    // Arrange
    // Set date to 27 september 2000, met als tijd 01:02:03 (uur:minuten:seconden)
    const testingDate = new Date(2000, 8, 27, 1, 2, 3);
    const expectedString = "2000-09-27";

    // Act
    const result = extractLocalDateString(testingDate);

    // Assert
    expect(result).toBe(expectedString);
  });
});
