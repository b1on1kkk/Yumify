import { createContext, useContext } from "react";
import type { TBasketProduct } from "../components/interfaces/interfaces";

export type GlobalContent = {
  basket: TBasketProduct[];
  setBasket: (c: TBasketProduct[]) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  basket: [],
  setBasket: () => {}
});

export const useGlobalContext = () => useContext(MyGlobalContext);
