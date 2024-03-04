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
    let isMounted = true;

    testRequestGuard().then((data: TAxiosResponse | undefined) => {
      if (isMounted) {
        setStatus(false);

        if (!data || data.statusCode !== 200) navigate("/login");
      }
    });

    return () => {
      isMounted = false;
      setStatus(true);
    };
  }, [render_after_loading]);

  return status ? render_on_loading : render_after_loading;
}
