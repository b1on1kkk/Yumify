import { createContext, useContext } from "react";
import type {
  TBasketProduct,
  TUser
} from "../components/interfaces/interfaces";

export type GlobalContent = {
  basket: TBasketProduct[];
  user: TUser | null;
  setUser: (c: TUser) => void;
  setBasket: (c: TBasketProduct[]) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  basket: [],
  user: null,
  setUser: () => {},
  setBasket: () => {}
});

export const useGlobalContext = () => useContext(MyGlobalContext);
