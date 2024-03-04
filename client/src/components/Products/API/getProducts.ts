import axios from "axios";

export async function getProducts() {
  const products = await axios.get(
    "http://localhost:3000/products/all_products",
    { withCredentials: true }
  );

  return products.data;
}
