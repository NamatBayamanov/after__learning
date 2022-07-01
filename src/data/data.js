const exchangeRates = {
  USAKGS: "80",
  EURUSA:  "100",
};

export function getExchangeRates(p) {
  return exchangeRates[p];
};