import axios from "axios";

export async function getProductById(
  product_type: string | undefined,
  product_id: string | undefined
) {
  const product = await axios.get(
    `http://localhost:3000/products/all_products/${product_type}/${product_id}`,
    { withCredentials: true }
  );

  return product.data;
}
