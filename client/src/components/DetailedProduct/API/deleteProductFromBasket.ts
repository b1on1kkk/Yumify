import axios, { AxiosResponse } from "axios";

export async function deleteProductFromBasket(
  product_id: number,
  quantity: number,
  cb: (data: AxiosResponse<any, any>) => void
) {
  try {
    const config = {
      method: "delete",
      url: "http://localhost:3000/basket/delete_product",
      withCredentials: true,
      data: {
        product_id: product_id,
        quantity: quantity
      }
    };

    cb(await axios(config));
  } catch (error) {
    console.log(error);
  }
}
