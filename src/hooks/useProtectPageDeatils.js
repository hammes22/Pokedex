import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToErrorPage } from "../routes/coordinator";
export function useProtectPageDeatils(state) {
  const navigate = useNavigate();
 
  useEffect(() => {
    if (state === null) {
      goToErrorPage(navigate);
    }
  }, []);
}
