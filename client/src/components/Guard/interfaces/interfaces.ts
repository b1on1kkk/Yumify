export interface TGuard {
  render_after_loading: React.ReactNode;
  render_on_loading: React.ReactNode;
}

export interface TAxiosResponse {
  message: string;
  statusCode: number;
}
