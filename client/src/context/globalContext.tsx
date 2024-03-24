import { createContext, useContext } from "react";
import type { TBasketProduct } from "../components/interfaces/interfaces";
import type { TAxiosResponse } from "../components/Guard/interfaces/interfaces";

export type GlobalContent = {
  basket: TBasketProduct[];
  user: TAxiosResponse | null;
  setUser: (c: TAxiosResponse) => void;
  setBasket: (c: TBasketProduct[]) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  basket: [],
  user: null,
  setUser: () => {},
  setBasket: () => {}
});

export const useGlobalContext = () => useContext(MyGlobalContext);
