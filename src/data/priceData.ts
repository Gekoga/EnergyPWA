export interface APIData {
  Prices: Prices[];
  average: number;
  fromDate: string;
  intervalType: number;
  tillDate: string;
}

export interface Prices {
  price: number;
  readingDate: string;
}
