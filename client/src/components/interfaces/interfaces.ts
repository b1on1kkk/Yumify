export interface TRecommendedProducts {
  category: string;
  picture: string;
  price: string;
  product_id: number;
  product_title: string;
  weight: string;
  in_basket: boolean;
}

export interface TBasketProduct {
  quantity: number;
  products: TRecommendedProducts;
}
