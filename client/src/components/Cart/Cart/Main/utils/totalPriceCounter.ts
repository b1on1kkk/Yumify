import { TBasketProduct } from "../../../../interfaces/interfaces";

export function totalPriceCounter(basket: TBasketProduct[]) {
  let sum = 0;

  basket.forEach((product) => {
    sum += parseFloat(
      product.products.price.replace(/руб\./, "").replace(",", ".")
    );
  });

  return sum;
}
