export interface TGuard {
  render_after_loading: React.ReactNode;
  render_on_loading: React.ReactNode;
  redirect_path: "/login" | "/sign";
}

export interface TAxiosErrorResponese {
  message: string;
  statusCode: number;
}

export interface TAxiosResponse {
  email: string;
  nickname: string;
}
