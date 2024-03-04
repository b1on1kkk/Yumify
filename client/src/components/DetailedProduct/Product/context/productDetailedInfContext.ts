import { createContext, useContext } from "react";

import type { TRecommendedProducts } from "../../../interfaces/interfaces";

export type ProductDetailedInfContent = {
  product: TRecommendedProducts[] | null;
  quantity: number;
  productStatus: boolean;
  setQuantity: (c: number) => void;
  setLoading: (c: boolean) => void;
};

export const ProductDetailedInfContext =
  createContext<ProductDetailedInfContent>({
    product: null,
    quantity: 1,
    productStatus: false,
    setQuantity: () => {},
    setLoading: () => {}
  });

export const useProductDetailedInfContent = () =>
  useContext(ProductDetailedInfContext);
