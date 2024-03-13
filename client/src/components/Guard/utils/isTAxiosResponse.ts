import type { TAxiosResponse } from "../interfaces/interfaces";

export function isTAxiosResponse(data: any): data is TAxiosResponse {
  return typeof data.email === "string" && typeof data.nickname === "string";
}
