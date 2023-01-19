import { DETAILS_PAGE, HOME_PAGE } from "../constants/routeConstants";

export function goToHomePage(navigate) {
  navigate(HOME_PAGE);
}
export function goToDetailsPage(navigate) {
  navigate(DETAILS_PAGE);
}
