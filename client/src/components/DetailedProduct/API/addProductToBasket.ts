import axios, { AxiosResponse } from "axios";

export async function addProductToBasket(
  product_id: number,
  quantity: number,
  cb: (data: AxiosResponse<any, any>) => void
) {
  try {
    const data = await axios.post(
      "http://localhost:3000/basket/add_product",
      { product_id: product_id, quantity: quantity },
      { withCredentials: true }
    );

    cb(data);
  } catch (error) {
    console.log(error);
  }
}
