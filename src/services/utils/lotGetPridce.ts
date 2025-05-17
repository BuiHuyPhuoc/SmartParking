import { PriceDTO } from "@/lib/models";

export const getMinPricesByType = (prices: PriceDTO[]): Record<string, PriceDTO> => {
  return prices.reduce<Record<string, PriceDTO>>((acc, curr) => {
    const existing = acc[curr.type];
    if (!existing || curr.price < existing.price) {
      acc[curr.type] = curr;
    }
    return acc;
  }, {});
};