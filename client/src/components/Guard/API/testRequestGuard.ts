import axios, { AxiosError } from "axios";

import type { TAxiosResponse } from "../interfaces/interfaces";

export async function testRequestGuard() {
  try {
    const data = await axios.get("http://localhost:3000/registration/test", {
      withCredentials: true
    });

    return data.data as TAxiosResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      return axiosError.response!.data as TAxiosResponse;
    }
  }
}
