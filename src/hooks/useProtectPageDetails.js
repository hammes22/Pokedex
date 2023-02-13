import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToErrorPage } from "../routes/coordinator";
export function useProtectPageDetails(state) {
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      goToErrorPage(navigate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
