import axios from "axios";

export async function getBasket() {
  const products = await axios.get("http://localhost:3000/basket/products", {
    withCredentials: true
  });

  return products.data;
}
