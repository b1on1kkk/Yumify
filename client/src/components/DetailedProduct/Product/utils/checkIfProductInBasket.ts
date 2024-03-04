import {
  TBasketProduct,
  TRecommendedProducts
} from "../../../interfaces/interfaces";

export function checkIfProductInBasket(
  product: TRecommendedProducts[] | null,
  basket: TBasketProduct[]
) {
  if (product && product.length > 0) {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].products.product_id === product[0].product_id) return true;
    }
  }

  return false;
}
