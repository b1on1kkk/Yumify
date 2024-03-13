import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { testRequestGuard } from "./API/testRequestGuard";
import type {
  TAxiosErrorResponese,
  TAxiosResponse,
  TGuard
} from "./interfaces/interfaces";
import { useGlobalContext } from "../../context/globalContext";
import { isTAxiosResponse } from "./utils/isTAxiosResponse";

export default function Guard({
  render_after_loading,
  render_on_loading,
  redirect_path
}: TGuard) {
  const navigate = useNavigate();
  const { setUser } = useGlobalContext();
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    testRequestGuard().then((data: TAxiosResponse | TAxiosErrorResponese) => {
      if (isMounted) {
        setStatus(false);

        if (isTAxiosResponse(data)) {
          if (Object.keys(data).length === 0) return navigate(redirect_path);

          return setUser(data);
        }

        navigate(redirect_path);
      }
    });

    return () => {
      isMounted = false;
      setStatus(true);
    };
  }, []);

  return status ? render_on_loading : render_after_loading;
}
