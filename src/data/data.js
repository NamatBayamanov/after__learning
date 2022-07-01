const exchangeRates = {
  USAKGS: "80",
  EURUSA:  "100",
  RUBKGS:  "0.86",
};

export function getExchangeRates(p) {
  return exchangeRates[p];
};