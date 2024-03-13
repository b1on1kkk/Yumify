import axios, { AxiosError } from "axios";

import type {
  TAxiosErrorResponese,
  TAxiosResponse
} from "../interfaces/interfaces";

export async function testRequestGuard() {
  try {
    const data = await axios.get("http://localhost:3000/registration/user", {
      withCredentials: true
    });

    return data.data as TAxiosResponse;
  } catch (error) {
    const axiosError = error as AxiosError;

    return axiosError.response!.data as TAxiosErrorResponese;
  }
}
