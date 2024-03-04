import axios from "axios";

export async function getProductsByType(product_type: string | undefined) {
  const products = await axios.get(
    `http://localhost:3000/products/all_products/${product_type}`,
    { withCredentials: true }
  );

  return products.data;
}
