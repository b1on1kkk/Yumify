import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { testRequestGuard } from "./API/testRequestGuard";

import type { TAxiosResponse, TGuard } from "./interfaces/interfaces";

export default function Guard({
  render_after_loading,
  render_on_loading
}: TGuard) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    testRequestGuard().then((data: TAxiosResponse | undefined) => {
      setStatus(false);

      if (data && data.statusCode === 200) return navigate("/");
      return navigate("/login");
    });
  }, []);

  return status ? render_on_loading : render_after_loading;
}
