import axios from "axios";

export async function getRecommendedProducts() {
  const products = await axios.get(
    "http://localhost:3000/products/recommended_products",
    { withCredentials: true }
  );

  return products.data;
}
